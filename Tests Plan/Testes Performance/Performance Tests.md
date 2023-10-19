## Plano de Testes de Performance

O objetivo inicial dos testes é encontrar problemas funcionais e de desempenho, a fim de mitigá-los. A partir disso, criaremos o plano de contingência, usando os testes para descobrir o limite da aplicação e ver o quão bem ela irá responder em determinados cenários.

## Testes Executados

Parâmetros dos testes de acordo com a [User Story: Gerenciamento de Produtos na API]() e a [User Story: Reservando Pedidos na API]().

![Load test types](https://media.discordapp.net/attachments/1129809804840411187/1129810697522532553/chart-load-test-types-overview.png?width=1025&height=288)

Os testes estarão documentados e detalhados no JIRA, com as instruções para a sua execução e seus posteriores resultados que serão analisados.

### **Smoke Test** 

- **Duração do teste:** 3 minutos.
- **Rotas cobertas:** [produtos] e [pedidos].
- **Funcionalidades priorizadas:** [POST].
- **Requisitos de segurança:** Usuário administrador, permissão de acesso com e sem autorização.
- **Quantidade média de usuários:** De 10% da User Story/Endpoint.
- **Quantidade máxima de usuários:** De 20% da User Story/Endpoint.
- **Tempo de resposta indicado:** De acordo com User Story/Endpoint.
- **Tempo de resposta máximo:** De acordo com User Story/Endpoint.
- **Tempo de recuperação indicado:** Não tem.
- **Falhas no número total das requisições:** <= 2%.
- **Falhas do servidor nos testes de carga:** = 0%.
- **Margem de segurança:** Não aplicada.

### **Spike Test**

- **Duração do teste:** 1 minuto.
- **Rotas cobertas:** [produtos] e [pedidos].
- **Funcionalidades priorizadas:** [POST].
- **Requisitos de segurança:** Usuário administrador, permissão de acesso com e sem autorização.
- **Quantidade máxima de usuários:** De 200% da User Story/Endpoint.
- **Tempo de resposta indicado:** De acordo com User Story/Endpoint.
- **Tempo de resposta máximo:** De acordo com User Story/Endpoint.
- **Tempo de recuperação indicado:** Não tem.
- **Falhas no número total das requisições:** <= 2%.
- **Falhas do servidor nos testes de carga:** = 0%.
- **Margem de segurança:** Não aplicada.

### **Load Test** 

- **Duração do teste:** 5 minutos.
- **Rotas cobertas:** [produtos] e [pedidos].
- **Funcionalidades priorizadas:** [POST].
- **Requisitos de segurança:** Usuário administrador, permissão de acesso com e sem autorização.
- **Quantidade máxima de usuários:** De 100% da User Story/Endpoint.
- **Tempo de resposta indicado:** De acordo com User Story/Endpoint.
- **Tempo de resposta máximo:** De acordo com User Story/Endpoint.
- **Tempo de recuperação indicado:** Não tem.
- **Falhas no número total das requisições:** <= 2%.
- **Falhas do servidor nos testes de carga:** = 0%.
- **Margem de segurança:** Não aplicada.

### **Stress Test** 

- **Duração do teste:** 3 minutos.
- **Rotas cobertas:** [produtos] e [pedidos].
- **Funcionalidades priorizadas:** [POST].
- **Requisitos de segurança:** Usuário administrador, permissão de acesso com e sem autorização.
- **Quantidade máxima de usuários:** De 150% da User Story/Endpoint.
- **Tempo de resposta indicado:** De acordo com User Story/Endpoint.
- **Tempo de resposta máximo:** De acordo com User Story/Endpoint.
- **Tempo de recuperação indicado:** Não tem.
- **Falhas no número total das requisições:** <= 2%.
- **Falhas do servidor nos testes de carga:** = 0%.
- **Margem de segurança:** Não aplicada.

## Testes de Performance por Endpoint

Verbos [GET], [PUT], [DELETE] e [POST] da rota [produtos].

Verbos [GET], [PUT], [DELETE] e [POST] da rota [pedidos].

### Produtos:

### Pedidos:

