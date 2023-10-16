
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

### 4.1 Critérios de Aceitação

- **CA_01:** Produtos com dados válidos devem ser criados com sucesso no sistema.

- **CA_02:** Produtos inválidos não devem ser criados e devem retornar um erro apropriado.

- **CA_03:** Produtos com IDs válidos devem ser listados com sucesso.

- **CA_04:** Tentativas de listar produtos com IDs inválidos devem retornar um erro 404.

- **CA_05:** Produtos com IDs válidos devem ser atualizados com sucesso.

- **CA_06:** Tentativas de atualizar produtos com IDs inválidos devem retornar um erro 404.

- **CA_07:** Produtos com IDs válidos devem ser excluídos com sucesso.

- **CA_08:** Tentativas de excluir produtos com IDs inválidos devem retornar um erro 404.

- **CA_09:** Produtos com dados inválidos não devem ser criados e devem retornar um erro apropriado.

- **CA_10:** A rota de listagem de produtos deve suportar paginação.

### 4.2 Casos de Teste de Produtos

[CT_001] (CA_01) - Verificar a possibilidade de criar um produto válido.

[CT_002] (CA_02) - Verificar a rejeição de um produto inválido.

[CT_003] (CA_03) - Verificar a possibilidade de listar um produto por ID válido.

[CT_004] (CA_04) - Verificar a rejeição de listar um produto por ID inválido.

[CT_005] (CA_05) - Verificar a possibilidade de atualizar um produto por ID válido.

[CT_006] (CA_06) - Verificar a rejeição de atualizar um produto por ID inválido.

[CT_007] (CA_07) - Verificar a possibilidade de excluir um produto por ID válido.

[CT_008] (CA_08) - Verificar a rejeição de excluir um produto por ID inválido.

[CT_009] (CA_09) - Verificar a rejeição de criar um produto inválido.

[CT_010] (CA_10) - Verificar a paginação de produtos.

## 5. Rota de Pedidos / Testes Funcionais

### 5.1 Critérios de Aceitação

- **CA_11:** Pedidos com dados válidos devem ser criados com sucesso no sistema.

- **CA_12:** Pedido com dados inválidos (por exemplo, um produto inexistente) devem retornar um erro apropriado.

- **CA_13:** Listar todos os pedidos existentes e garantir que a API retorne uma lista válida de pedidos.

- **CA_14:** Listar Pedido por ID Válido a API retorna o pedido correto.

- **CA_15:** Listar Pedido por ID Inválido a API deve retornar um erro 404.

- **CA_16:** Atualizar Pedido Válido com dados válidos e garantir que o pedido seja atualizado com sucesso no sistema.

- **CA_17:** Atualizar Pedido Inválido com dados inválidos (por exemplo, um produto inexistente) e verificar se a API lida corretamente com a validação e retorna um erro apropriado.

- **CA_18:** Excluir Pedido Válido existente por seu ID e garantir que o pedido seja removido com sucesso do sistema.

- **CA_19:** Excluir Pedido Inválido por um ID inválido (por exemplo, um ID inexistente) e verificar se a API retorna um erro 404.

- **CA_20:** Excluir Pedido com Erro de Autenticação: Tentar excluir um pedido sem autenticação (se a autenticação for aplicada) e verificar se a API retorna um erro de autenticação.

### 5.2 Casos de Teste de Pedidos

Os casos de testes (CT_xxx) estarão documentados e detalhados no JIRA, com as instruções para a sua execução.

[CT_011] (CA_11) - Verificar a possibilidade de criar um pedido válido.

[CT_012] (CA_12) - Verificar a impossibilidade de criar um pedido inválido (exemplo: produtos inexistentes).

[CT_013] (CA_13) - Verificar a listagem de todos os pedidos existentes.

[CT_014] (CA_14) - Verificar a listagem de um pedido válido por ID.

[CT_015] (CA_15) - Verificar a impossibilidade de listar um pedido por um ID inválido (exemplo: ID inexistente).

[CT_016] (CA_16) - Verificar a possibilidade de atualizar um pedido válido.

[CT_017] (CA_17) - Verificar a impossibilidade de atualizar um pedido inválido (exemplo: produtos inexistentes).

[CT_018] (CA_18) - Verificar a possibilidade de excluir um pedido válido.

[CT_019] (CA_19) - Verificar a impossibilidade de excluir um pedido inválido (exemplo: ID inexistente).

[CT_020] (CA_20) - Verificar a impossibilidade de excluir um pedido sem autenticação.

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

- Cenários criados.
- Cobertura atingida dentro dos cenários propostos (proposto vs. atingido).
- Mapa mental.
- Issues abertas (bugs/melhorias).
- Código criado para os scripts do K6.
- Report gerado com as execuções dos testes.
- Organização do plano de testes.
- Organização do projeto com os scripts de testes do K6.
- Uso dos scripts do K6 (ex: thresholds, options, etc).
- Padrões aplicados e boas práticas (ex: PageObjects, ServiceObjects, AppActions, etc).

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
