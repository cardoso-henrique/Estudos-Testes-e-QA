# Execução de testes funcionais

A execução dos primeiros testes funcionais obteve os seguintes reultados:

Uso do Postman para realização dos testes

Uso de Environments para otimização de construção dos testes

![environments](https://cdn.discordapp.com/attachments/1158851542904999987/1158851648005869648/001_uso_environments_.png?ex=651dc033&is=651c6eb3&hm=176cf653a0b639951d96c7be66a3170b4cb0d7fd392027faa738d812c82508be&)

### Produtos:

**[CT_001] (CA_01) - Verificar a possibilidade de criar um produto válido.**

1. Faça uma solicitação POST para `/products/` com dados válidos de um novo produto.
2. Verifique se a resposta retorna os dados do produto criado.

Resultados obtidos:
 
-	Melhorar as descrições para português
-	Não precisar passar o id no body do cadastro
-	Implementar mensagem de retorno “produto cadastrado com sucesso”
-	Alterar status code 201 criado
-	Demais verificações ok

![](https://media.discordapp.net/attachments/1158851542904999987/1158851648987336765/0003_postar_produto.png?ex=651dc033&is=651c6eb3&hm=2922cee547c319afc790367b08858ced9e89e4a8c9303c062afc93aaf17cd268&=&width=678&height=409)


**[CT_002] (CA_02) - Verificar a rejeição de um produto inválido.**
1. Faça uma solicitação POST para `/products/` com dados inválidos de um novo produto.
2. Verifique se a resposta retorna um erro 400.

Resultados obtidos:
 
-	Melhorar as descrições para português
-	Não precisar passar o id no body do cadastro
-	Implementar mensagem de retorno “produto não foi cadastrado” pelo motivo
-	Id tem que ser do tipo string uuid
-	Name tem que ser string
-	Price tem que ser valor inteiro ou float

![](https://media.discordapp.net/attachments/1158851542904999987/1158851649301913720/004_postar_produto_incorreto.png?ex=651dc033&is=651c6eb3&hm=b6f1f5f4c4ceef625bd50ec9e0f95ab06e93f0b4416854e8fb6677c583fb951b&=&width=626&height=409)

**[CT_003] (CA_03) - Verificar a possibilidade de listar um produto por ID válido.**
1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação GET para `/products/{product_id}` com o ID válido.
4. Verifique se a resposta contém as informações corretas do produto.

Resultados obtidos:
 
-	Produto foi listado corretamente
-	Id do produto cadastrado ao ser consultado retornou seus dados corretamente

![](https://media.discordapp.net/attachments/1158851542904999987/1158851650128187523/006_produto_consultado.png?ex=651dc033&is=651c6eb3&hm=4ba3949c42e5a4b158d5edba9814415fa6dd5626b81a634eecdfb50efe93a298&=&width=720&height=409)

**[CT_004] (CA_04) - Verificar a rejeição de listar um produto por ID inválido.**
1. Faça uma solicitação GET para `/products/{product_id}` com um ID inválido.
2. Verifique se a resposta retorna um erro 404.

Resultados obtidos:
 
-	Status code correto
-	Resposta em português

![](https://media.discordapp.net/attachments/1158851542904999987/1158851650472124446/007_pesqeuisa_id_inexistente.png?ex=651dc033&is=651c6eb3&hm=a9ff803e5490d206f44fbbe1b834b7a402805b39b224c1b41cf1d79651fcb75a&=&width=768&height=405)
 
**[CT_005] (CA_05) - Verificar a possibilidade de atualizar um produto por ID válido.**

1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação PUT para `/products/{product_id}` com o ID válido e dados atualizados.
4. Verifique se a resposta retorna as informações atualizadas do produto.

Resultados obtidos:
 
-	Produto alterado não deve precisar passar id no body da requisição
-	A resposta mostra o id do corpo, verificar se ele passa a ser o id do produto
-	O produto foi alterado e manteve seu id
-	Ajustar a resposta para não aparecer o id
-	Mensagem de resposta que o produto foi alterado com sucesso

![](https://media.discordapp.net/attachments/1158851542904999987/1158851650862186496/008_alterar_produto.png?ex=651dc033&is=651c6eb3&hm=a627b519a1a640de421643ab95cc2b1ddad02f1bb42c228f6346a451177b2e35&=&width=700&height=409)
 
**[CT_006] (CA_06) - Verificar a rejeição de atualizar um produto por ID inválido.**

1. Faça uma solicitação PUT para `/products/{product_id}` com um ID inválido e dados atualizados.
2. Verifique se a resposta retorna um erro 404.

Resultados obtidos:
 
-	Status code correto
-	Melhorar mensagem de retorno para português

![](https://media.discordapp.net/attachments/1158851542904999987/1158851864041898044/010_altera_produto_id_errado.png?ex=651dc066&is=651c6ee6&hm=409e7d5735bb1554b814c26ea96669b29c67888d6962900af0cbe8ea221a09a5&=&width=768&height=408)
 
**[CT_007] (CA_07) - Verificar a possibilidade de excluir um produto por ID válido.**

1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação DELETE para `/products/{product_id}` com o ID válido.
4. Verifique se a resposta retorna os dados do produto excluído.

Resultados obtidos:
 
-	Status code correto
-	Retornou os dados do produto, talvez seja melhor retornar uma mensagem de que o produto foi deletado com sucesso
-	Ao consultar o produto deletado ele realmente foi deletado

![](https://media.discordapp.net/attachments/1158851542904999987/1158851864410988595/011_deletando_produto.png?ex=651dc066&is=651c6ee6&hm=087cf879db62ff78eb6d57dc0089951f7ce728a7a58699cc351fc0d5fd3140fa&=&width=717&height=409)
 
**[CT_008] (CA_08) - Verificar a rejeição de excluir um produto por ID inválido.**

1. Faça uma solicitação DELETE para `/products/{product_id}` com um ID inválido.
2. Verifique se a resposta retorna um erro 404.

Resultados obtidos:
 
-	Status code correto
-	Traduzir e melhorar resposta

![](https://media.discordapp.net/attachments/1158851542904999987/1158851865073696919/013_deletar_produto_id_errado.png?ex=651dc067&is=651c6ee7&hm=77f44508f05ac3628b0e90cc5f81e48df169407833831b5a81298e8ce7b164ac&=&width=730&height=409)
 
**[CT_009] (CA_09) - Verificar a rejeição de criar um produto inválido.**

1. Faça uma solicitação POST para `/products/` com dados inválidos de um novo produto.
2. Verifique se a resposta retorna um erro 400.

Resultados obtidos:
 
-	Ele retorna mensagens sobre o problema
-	Melhorar as mensagens de retorno para ajudar o usuário

![](https://media.discordapp.net/attachments/1158851542904999987/1158851649301913720/004_postar_produto_incorreto.png?ex=651dc033&is=651c6eb3&hm=b6f1f5f4c4ceef625bd50ec9e0f95ab06e93f0b4416854e8fb6677c583fb951b&=&width=626&height=409)
 
**[CT_010] (CA_10) - Verificar a paginação de produtos.**

1. Crie vários produtos.
2. Faça uma solicitação GET para `/products/?page=2&limit=5` para listar os produtos na segunda página com um limite de 5 produtos por página.
3. Verifique se a resposta contém os produtos corretos de acordo com a página e o limite especificados.

Resultados obtidos:
 
-	Os resultados de consulta de produto não são paginados
-	Implementar solução de paginação
 
### Pedidos:

**[CT_011] (CA_11) - Verificar a possibilidade de criar um pedido válido.**

1. Faça uma solicitação POST para `/orders/` com dados válidos de um novo pedido.
2. Verifique se a resposta retorna os dados do pedido criado.

Resultados obtidos:
 
-	Os produtos não são cadastrados com quantidade, mas pede quantidade no pedido
-	Ajustar Status code para 201
-	Implementar mensagem de resposta "Pedido cadastrado com sucesso"
-	Pede nome do comprador – implementar
-	Pode colocar mais de um item

![](https://media.discordapp.net/attachments/1158851542904999987/1158851865878990889/015_cadastro_de_pedido.png?ex=651dc067&is=651c6ee7&hm=084ff180496980c6cf5c42123e0c1e08156b0321af907ef68af6885fcce0ce0c&=&width=623&height=409)
 
**[CT_012] (CA_12) - Verificar a impossibilidade de criar um pedido inválido (exemplo: produtos inexistentes).**

1. Faça uma solicitação POST para `/orders/` com dados inválidos de um novo pedido, como IDs de produtos inexistentes.
2. Verifique se a resposta retorna um erro apropriado, como 400.

Resultados obtidos:
 
-	Sem produtos ele cadastrou
-	Com id inválido ele barrou
-	Melhorar a mensagem para português

![](https://media.discordapp.net/attachments/1158851542904999987/1158851866331979857/016_pedido_com_produto_de_id_invalido.png?ex=651dc067&is=651c6ee7&hm=a07e6751992197dca8a42c5ad976f3d0251efce6587707b12c2b4078d8e5994b&=&width=712&height=409)

![](https://media.discordapp.net/attachments/1158851542904999987/1158851866709463050/016_pedido_sem_produtos.png?ex=651dc067&is=651c6ee7&hm=ae46a70e8c62d8796ed08e2ebe99a5bc67eb4e66f3be10fe0f568d9cf3266ee7&=&width=664&height=409)
 
**[CT_013] (CA_13) - Verificar a listagem de todos os pedidos existentes.**

1. Crie vários pedidos.
2. Faça uma solicitação GET para `/orders/` para listar todos os pedidos existentes.
3. Verifique se a resposta contém a lista correta de pedidos.

Resultados obtidos:
 
-	Funcionalidade ok
-	Implementar mensagem de resposta

![](https://media.discordapp.net/attachments/1158851542904999987/1158851867162460160/017_busca_pedidos.png?ex=651dc067&is=651c6ee7&hm=dc83eb73e26b5c31f36152b9c48b6dc2fa4f2af9bb191c7e7d008b76e292abac&=&width=615&height=409)
 
**[CT_014] (CA_14) - Verificar a listagem de um pedido válido por ID.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação GET para `/orders/{order_id}` com o ID válido.
4. Verifique se a resposta contém as informações corretas do pedido.

Resultados obtidos:
 
-	Consulta pedido por id ok

![](https://media.discordapp.net/attachments/1158851542904999987/1158851916810428416/018_consulta_pedido.png?ex=651dc073&is=651c6ef3&hm=a7e4c55b179f82b6cb6184d2ee15b41525521596de756d66f814ee5304516c56&=&width=618&height=408)
 
**[CT_015] (CA_15) - Verificar a impossibilidade de listar um pedido por um ID inválido (exemplo: ID inexistente).**

1. Faça uma solicitação GET para `/orders/{order_id}` com um ID inválido (por exemplo, um ID que não existe).
2. Verifique se a resposta retorna um erro 404.

Resultados obtidos:
 
-	Consulta ok
-	Status code correto
-	Melhorar mensagem de retorno

![](https://media.discordapp.net/attachments/1158851542904999987/1158851917720600637/021_consulta_do_pedido_deletado.png?ex=651dc073&is=651c6ef3&hm=ff94b32b7b9599a6c007389ba5ad7ca759800361cc3b3f1e96129c3dfa90aae4&=&width=734&height=409)
 
**[CT_016] (CA_16) - Verificar a possibilidade de atualizar um pedido válido.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação PUT para `/orders/{order_id}` com o ID válido e dados atualizados.
4. Verifique se a resposta retorna as informações atualizadas do pedido.

Resultados obtidos:
 
-	Método não implementado

**[CT_017] (CA_17) - Verificar a impossibilidade de atualizar um pedido inválido (exemplo: produtos inexistentes).**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação PUT para `/orders/{order_id}` com o ID válido, mas com dados de produtos inválidos (IDs de produtos inexistentes).
4. Verifique se a resposta retorna um erro apropriado, como 400.

Resultados obtidos:
 
-	Método não implementado
 
**[CT_018] (CA_18) - Verificar a possibilidade de excluir um pedido válido.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação DELETE para `/orders/{order_id}` com o ID válido.
4. Verifique se a resposta retorna os dados do pedido excluído.

Resultados obtidos:
 
-	Pedido foi deletado
-	Melhorar a mensagem de retorno para "Pedido foi deletado com sucesso"
-	Retorna os dados do produto

![](https://media.discordapp.net/attachments/1158851542904999987/1158851917473124463/020_deletar_pedido.png?ex=651dc073&is=651c6ef3&hm=6bbec77412590dc9afea387eb6cd2bdc77efa710eaf4ec30a0a8172b30f5dc59&=&width=621&height=409)
 
**[CT_019] (CA_19) - Verificar a impossibilidade de excluir um pedido inválido (exemplo: ID inexistente).**

1. Faça uma solicitação DELETE para `/orders/{order_id}` com um ID inválido (por exemplo, um ID que não existe).
2. Verifique se a resposta retorna um erro 404.

Resultados obtidos:
 
-	Status code correto
-	Melhorar mensagem de retorno

![](https://media.discordapp.net/attachments/1158851542904999987/1158851945298133074/022_deeltar_pedido_com_id_nao_existe.png?ex=651dc07a&is=651c6efa&hm=ab9bd49980c1ee3ec2a99fcd246d1b22d476ba54693c589fe2fcfb854c8db130&=&width=768&height=405)
 
**[CT_020] (CA_20) - Verificar a impossibilidade de excluir um pedido sem autenticação.**

1. Faça uma solicitação DELETE para `/orders/{order_id}` com um ID válido, mas sem fornecer autenticação.
2. Verifique se a resposta retorna um erro de autenticação, como 401.

Resultados obtidos:
 
-	Funcionalidade não implemetada

# Testes automatizados (Postman):

Status code:

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200).and.to.have.status("OK");
});
```
Tempo de resposta:

```
pm.test("tempo de resposta < 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
```

Conteúdo da resposta:

```
pm.test("Response message is 'FastAPI E-Commerce Online'", function () {
    pm.expect(pm.response.json().message).to.equal(template);
});

var template = `
<div style="text-align:center">
    <h1>FastAPI E-Commerce Online</h1>
    <p>by: Henrique Cardoso Lana</p>
</div>
`;
```

Resposta com ID:

```
pm.test("Response has id property", function () {
    pm.expect(pm.response.json()).to.have.property("id");
});
```

ID é do tipo String:

```
pm.test("id property is a string", function () {
    pm.expect(pm.response.json().id).to.be.a("string");
});
```
# Conclusão

Em resumo, os testes funcionais revelaram algumas áreas críticas de aprimoramento para a API. A primeira é a necessidade de ajustar as mensagens de retorno, abordando questões como a ausência de mensagens em alguns casos tradução. Além disso, identificamos configurações de informações enviadas no corpo das requisições que não deveriam ser necessárias, como o ID, o que pode ser otimizado.

Além disso, foi evidenciado que algumas funcionalidades essenciais ainda não foram implementadas na API, o que requer atenção imediata para garantir sua completude e usabilidade.

Outra questão crítica diz respeito ao banco de dados da API, que atualmente funciona como um Array e perde informações sempre que a API é reiniciada. Para solucionar esse problema, é imprescindível a implementação de uma solução de banco de dados robusta que permita a persistência dos dados.

Em suma, os testes funcionais foram valiosos para identificar esses desafios e áreas de melhoria, e agora estamos preparados para abordá-los de maneira proativa e aprimorar a qualidade e a estabilidade de nossa API.