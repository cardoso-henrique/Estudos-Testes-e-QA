<center>

# 💻 Estudos-Testes-de-Performance 📖

![GitHub repo size](https://img.shields.io/github/repo-size/cardoso-henrique/Estudos-Testes-de-Performance)

</center><br/>

Este repositório contém o código e a documentação relacionados aos meus estudos sobre QA e testes funcionais e de performance.

## Sumário

Em construção...

<center>

# Planos de Testes Funcionais e de Performance

</center><br/>

## 1. Nome do projeto

FastAPI E-Commerce

## 2. Resumo

O objetivo deste documento é descrever o plano de testes funcionais e de performance, bem como suas execuções e resultados. Será analisada uma [API de E-Commerce](https://github.com/cardoso-henrique/FastAPI-E-Commerce) criada por mim utilizando o framework [FastAPI](https://fastapi.tiangolo.com/pt/).

Para os testes funcionais, será utilizado o programa Postman, que pode ser baixado neste link [download](https://www.postman.com/downloads/). Para a documentação da realização dos testes, utilizaremos o JIRA, que pode ser acessado neste link [JIRA](https://www.atlassian.com/br/software/jira). Já os testes de performance serão feitos utilizando o K6. Sua documentação e instruções de instalação podem ser acessadas neste link [K6 Documentation](https://k6.io/docs/).

## 3. Cobertura

- Fluxo da API /default: GET.
- Fluxo da API /Produtos: POST, GET, PUT, DELETE.
- Fluxo da API /Pedidos: POST, GET, PUT, DELETE.

## 4. Rota Produtos / Testes Funcionais

### 4.1 Critérios de aceite

### 4.2 Casos de teste de Produtos

Os casos de testes (CT_xxx) estarão documentados e detalhados no JIRA, com as instruções para a sua execução.

## 5. Rota de Pedidos / Testes Funcionais

### 5.1 Critérios de aceite

### 5.2 Casos de teste de Pedidos

Os casos de testes (CT_xxx) estarão documentados e detalhados no JIRA, com as instruções para a sua execução.

## 6. Plano de Testes de Performance

O objetivo inicial dos testes é encontrar problemas funcionais e de desempenho, a fim de mitigá-los. A partir disso, criaremos o plano de contingência, usando os testes para descobrir o limite da aplicação e ver o quão bem ela irá responder em determinados cenários.

## 6.1 Testes Executados

Parâmetros dos testes de acordo com a [User Story: Gerenciamento de Produtos na API]() e a [User Story: Reservando Pedidos na API]().

![Load test types](https://media.discordapp.net/attachments/1129809804840411187/1129810697522532553/chart-load-test-types-overview.png?width=1025&height=288)

Os testes estarão documentados e detalhados no JIRA, com as instruções para a sua execução e seus posteriores resultados que serão analisados.

### 6.1.1 **Smoke Test** 

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

### 6.1.2 **Spike Test**

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

### 6.1.3 **Load Test** 

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

### 6.1.4 **Stress Test** 

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

## 6.2 Testes de Performance por Endpoint

Verbos [GET], [PUT], [DELETE] e [POST] da rota [produtos].

Verbos [GET], [PUT], [DELETE] e [POST] da rota [pedidos].

## 7. Riscos Mitigados

1. Risco de requisições com dados incompletos ou inválidos.

2. Risco de usuários que não sejam administradores criarem, alterarem e deletarem.

3. Risco de mensagens de retorno incorretas e/ou inexistentes.

4. Risco de falta de evidências: Os testes podem incluir a geração de evidências, como registros de logs ou capturas de tela, para garantir que seja possível rastrear e investigar problemas ou falhas durante a execução dos testes.

5. Riscos de indisponibilidade dos serviços devido à alta demanda.

6. Riscos de tempos de resposta de requisições não condizentes com os parâmetros estabelecidos como mínimos aceitáveis.

## 8. Como os resultados do teste serão divulgados

Os resultados dos testes serão divulgados em forma de prints, relatórios HTML do K6 e arquivos .md. As seguintes documentações serão entregues:

- Cenários criados (se fazem sentido, estão fáceis de ler, etc).
- Cobertura atingida dentro dos cenários propostos (proposto vs. atingido).
- Mapa mental.
- Issues abertas (bugs/melhorias).
- Qualidade do código criado para os scripts do K6.
- Report gerado com as execuções dos testes.
- Organização do plano de testes.
- Organização do projeto com os scripts de testes do K6.
- Uso dos conteúdos aprendidos na Sprint nos scripts do K6 (ex: thresholds, options, etc).
- Padrões aplicados e boas práticas (ex: PageObjects, ServiceObjects, AppActions, etc).
- Adicional de inovação (ex: paralelismo, novos padrões ou práticas, execução multi-browser, etc).

## 10. Mapa mental

Mapa mental para melhor visualização das rotas da API e seus resultados esperados.

![mapa mental]()

## 12. Testes funcionais candidatos a automação (Postman)

- Tempo de resposta 
- Status code 
- Status code name
- Mensagem de retorno
- Tipo de informação
- Intervalo de valor

## 13. Ferramentas

- [API FastAPI-E-Commerce](https://github.com/cardoso-henrique/FastAPI-E-Commerce) (Swagger), como API a ser estudada. 
- [Jira](https://www.atlassian.com/br/software/jira), como ferramenta de controle.
- [Postman](https://www.postman.com/downloads/), como ferramenta de testes funcionais.
- [Xmind](https://xmind.app/download/), como ferramenta de visualização de fluxos.
- [GitLab](https://gitlab.com/), como ferramenta de controle de versionamento.
- [VSCode](https://code.visualstudio.com/), como editor de código.
- [K6](https://k6.io/docs/), como ferramenta de testes funcionais.

<center>

## Contributing

![GitHub pull requests](https://img.shields.io/github/issues-pr/cardoso-henrique/Estudos-Testes-de-Performance)

![GitHub forks](https://img.shields.io/github/forks/cardoso-henrique/Estudos-Testes-de-Performance)

## Commit historic

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/cardoso-henrique/Estudos-Testes-de-Performance)

## License

![GitHub](https://img.shields.io/github/license/cardoso-henrique/Estudos-Testes-de-Performance)

## Autor

**Henrique Cardoso Lana**
([LinkedIn](https://www.linkedin.com/in/proj-henrique/))

## Colaboradores

![GitHub contributors](https://img.shields.io/github/contributors/cardoso-henrique/Estudos-Testes-de-Performance)

</center><br/>
