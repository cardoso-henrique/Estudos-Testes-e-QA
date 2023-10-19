//Importando bibliotecas
import http from 'k6/http';
import { check, fail, sleep } from "k6";
import execution from 'k6/execution';

//Definindo constante da URL
const url = 'http://127.0.0.1:8000';

///Métricas thresholds Definidas manualmente
import { Trend, Rate, Gauge } from 'k6/metrics';
//Definindo a constante/nome da métrica e o seu tipo de valor 
export const TrendRTT = new Trend('RTT');
export const GaugeContentSize = new Gauge('ContentSize');
export const FailRate = new Rate('fail_rate');

//Executando os testes
export default function () {
    //  FUNÇÃO GET LISTAR PRODUTOS
    const res = http.get(`${url}/produtos`,
        //Inserindo o Header data
        {
            headers: {
                //Tipo do conteúdo enviado
                'Content-Type': 'application/json',
            }
        });

    //Checks das responses
    //Verificando as Métricas definidas manualmente 
    TrendRTT.add(res.timings.duration);
    GaugeContentSize.add(res.body.length);
    FailRate.add(res.status == 0 || res.status > 399);
    //Status code
    check(res, { 'Status Code 200 - GET-Produto': (r) => r.status == 200 });
    //Response Time - RTT
    let durationMsg = 'Max Duration Ultrapassada'
    if (!check(res, {
        'Max Duration Iterations': (r) => r.timings.duration < 1000,
    })) {
        fail(durationMsg);
    }
    //Pausa para proxima interação
    sleep(1);
    //Mensagem de verificação de execução
    console.log('Consulta de produtos pelo VU: ', execution.vu.idInTest)
}

// To run code
// k6 run Get-produtos.js
// k6 run --out=cloud Get-produtos.js