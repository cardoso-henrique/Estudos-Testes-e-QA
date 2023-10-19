# Instruções de uso do K6

## Instalar chocolatey

https://chocolatey.org/install

## instalar K6

https://k6.io/docs/get-started/installation/

powershell executar os comandos:

```choco install k6```

```winget install k6 --source winget```

### Script para testar se o k6 está funcionando

Crie o arquivo test.js com o código abaixo:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
```
https://k6.io/docs/get-started/running-k6/

executar no terminal do VSCode

```k6 run test.js```

![](https://media.discordapp.net/attachments/1109930711055618160/1164615890709512273/image.png?ex=6543dc11&is=65316711&hm=994bf24189b7cfabcf49f8c2c07cc232b391def089cd4cf85e2316afe80bae6c&=)

## Tipos de testes 

![](https://media.discordapp.net/attachments/1129809804840411187/1129810697522532553/chart-load-test-types-overview.png?width=1020&height=287)

## Instalando uuid de masssa de teste dinâmica

gitbash executar os comandos:

````npm install uuid@3.4.0````

````npm install browserify````

````npx browserify node_modules/uuid/index.js -s uuid > uuid.js````

- apagar a pasta node modules
- apagar os arquivos package.json e  package-lock.jason
- mover o arquivo uuid.js para uma pasta de libs do repositório
- importar para o projeto com: import uuid from './libs/uuid.js'
- chamando a função `${uuid.v4()}` 

## K6 HTML Report Exporter v2

[link GitHub](https://github.com/benc-uk/k6-reporter)

````javascript
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
````

## Usando Grafana

Executar os comandos no terminal do VsCode:

````k6 login cloud --token 9ed76ecfcfbbe165af........................````

Run your test in the Cloud

````k6 cloud script.js````

Run locally, stream results to the Cloud

````k6 run --out=cloud script.js````

## Métricas thresholds

````javascript

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
        ContentSize: ['value > 100'],// returned content must be bigger than bytes
        RTT: ['p(95)<350', 'p(90)<200', 'avg<200', 'med<150', 'min<100'],// % of requests should be below time in ms
    },
};


//Executando os testes
export default function () {
//  FUNÇÃO GET LISTAR USUARIOS
    const res = http.get('http://localhost:3000/usuarios', 
    //Inserindo o Header data
    {headers: {
        //Tipo do conteúdo enviado
        'Content-Type': 'application/json',
        //Desativando o monitor de teste de carga
        'monitor': 'false'}});
    //Verificando as Métricas definidas manualmente 
    TrendRTT.add(res.timings.duration);
    GaugeContentSize.add(res.body.length);
    FailRate.add(res.status == 0 || res.status > 399);

//Checks das responses
    //Status code
    check(res, { 'Status Code 200': (r) => r.status == 200 });
    //Response Time - RTT
    let durationMsg = 'Max Duration Ultrapassada'
    if(!check(res, {
        'Max Duration Iterations': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg);
    }
    sleep(1);
}

````
