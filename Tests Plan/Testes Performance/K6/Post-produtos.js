//Importando bibliotecas
import http from 'k6/http';
import { check, sleep, fail } from "k6";
//import uuid from './libs/uuid.js'
import execution from 'k6/execution';

//Definindo constante da URL
const url = 'http://127.0.0.1:8000';

//Definindo estágios do teste e métricas

//Métricas thresholds Definidas manualmente
import { Trend, Rate, Gauge } from 'k6/metrics';
//Definindo a constante/nome da métrica e o seu tipo de valor 
export const TrendRTT = new Trend('RTT');
export const GaugeContentSize = new Gauge('ContentSize');
export const FailRate = new Rate('fail_rate');


export const options = {
    //Definindo as métricas de rampas de VUs e tempos
    stages:[
        { duration: '1s', target: 2 }, // traffic ramp-up from users for target time
        { duration: '5s', target: 5 }, // stay at users for target time
        { duration: '1s', target: 0 }, // ramp-down to users in target time
    ],
    //Definindo 
    thresholds: {
        //Definidas pelo K6 (tem que ser exatamente igual o nome da métrica que o k6 responde)
        http_req_failed: ['rate < 0.02'],// http errors should be less than %
        http_req_duration: ['p(90)<200', 'p(95)<350', 'p(99)<350'],// % of requests should be below time in ms
        http_req_waiting: ['avg < 350'],// time requests waiting should be below time in ms
        data_sent: ['rate > 100'],// returned content must be bigger than bytes
        data_received: ['rate > 100'],// VUs must be bigger than
        iteration_duration: ['p(90) < 3000'],// % of requests should be below time in ms
        http_req_blocked: ['p(99)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
        http_req_connecting: ['p(99)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
        http_req_receiving: ['p(99)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
        http_req_sending: ['p(99)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
        http_req_tls_handshaking: ['p(99)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
        http_reqs: ['count > 10'],// returned requests must be bigger than
        iterations: ['count > 10'],// returned iterations must be bigger than
        vus: ['value > 1'],// VUs must be bigger than
        vus_max: ['value > 1'],// max VUs must be bigger than

        //Métricas definidas manualmente (de acordo com as constantes definidas acima)
        ContentSize: ['value > 1'],// returned content must be bigger than bytes
        RTT: ['p(95)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
    },
};


//default function alimentada por checkData
export default function (checkData) {
    //Body data
    let prodData = {
            "nome": "Nome do Produto",
            "preco": 99.99
            };
    //Verificando a resposta da requisição
    console.log('Dados do novo produto: ', prodData, 'Produto criado pelo VU: ', execution.vu.idInTest);
    let resposta;
    //  FUNÇÃO POST CADASTRAR PRODUTOS
    const res = http.post(`${url}/produtos`,
        //Inserindo o Body data como JSON
        JSON.stringify(prodData),
        //Inserindo o Header data
        {
            headers: {
                //Tipo do conteúdo enviado
                'Content-Type': 'application/json',
            }
        });
    //Verificando a resposta da requisição
    console.log('Check created ok? ', res.body)
    //Checks das responses
    //Verificando as Métricas definidas manualmente 
    TrendRTT.add(res.timings.duration);
    GaugeContentSize.add(res.body.length);
    FailRate.add(res.status == 0 || res.status > 399);
    //Status code
    if (check(res, {
        'Status was 201 - POST-Produtos': (r) => r.status == 201,
        'Response com id - POST-Produtos': (r) => r.body.includes('id')
    })) {
        if (checkData) {
            //Se checkData = true pegar o id do produto para a proxima interação com idProd
            resposta = res.json().id
            //Mensagem de verificação de execução
            console.log('Pegou id do produto = idProd = ', resposta)
        }
        //Se não pegar todas as informações do produto para alimentar prodData
        else {
            resposta = Object.assign(prodData, { id: res.json().id })
            //Mensagem de verificação de execução
            console.log('Pegou dados do produto = prodData = ', resposta)
        };
    };
    //Response Time - RTT
    let durationMsg = 'Max Duration Ultrapassada'
    if (!check(res, {
        'Max Duration Iterations': (r) => r.timings.duration < 1000,
    })) {
        fail(durationMsg);
    }
    //Pausa para proxima interação
    sleep(1)
    //Retornando o valor alimentado pela regra de checkData
    return resposta;
}

// To run code
// k6 run Post-produtos.js
// k6 run --out=cloud Post-produtos.js

