### Produtos:

**[CT_001] (CA_01) - Verificar a possibilidade de criar um produto válido.**

1. Faça uma solicitação POST para `/products/` com dados válidos de um novo produto.
2. Verifique se a resposta retorna os dados do produto criado.

**[CT_002] (CA_02) - Verificar a rejeição de um produto inválido.**

1. Faça uma solicitação POST para `/products/` com dados inválidos de um novo produto.
2. Verifique se a resposta retorna um erro 400.

**[CT_003] (CA_03) - Verificar a possibilidade de listar um produto por ID válido.**

1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação GET para `/products/{product_id}` com o ID válido.
4. Verifique se a resposta contém as informações corretas do produto.

**[CT_004] (CA_04) - Verificar a rejeição de listar um produto por ID inválido.**

1. Faça uma solicitação GET para `/products/{product_id}` com um ID inválido.
2. Verifique se a resposta retorna um erro 404.

**[CT_005] (CA_05) - Verificar a possibilidade de atualizar um produto por ID válido.**

1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação PUT para `/products/{product_id}` com o ID válido e dados atualizados.
4. Verifique se a resposta retorna as informações atualizadas do produto.

**[CT_006] (CA_06) - Verificar a rejeição de atualizar um produto por ID inválido.**

1. Faça uma solicitação PUT para `/products/{product_id}` com um ID inválido e dados atualizados.
2. Verifique se a resposta retorna um erro 404.

**[CT_007] (CA_07) - Verificar a possibilidade de excluir um produto por ID válido.**

1. Crie um produto.
2. Obtenha o ID do produto criado.
3. Faça uma solicitação DELETE para `/products/{product_id}` com o ID válido.
4. Verifique se a resposta retorna os dados do produto excluído.

**[CT_008] (CA_08) - Verificar a rejeição de excluir um produto por ID inválido.**

1. Faça uma solicitação DELETE para `/products/{product_id}` com um ID inválido.
2. Verifique se a resposta retorna um erro 404.

**[CT_009] (CA_09) - Verificar a rejeição de criar um produto inválido.**

1. Faça uma solicitação POST para `/products/` com dados inválidos de um novo produto.
2. Verifique se a resposta retorna um erro 400.

**[CT_010] (CA_10) - Verificar a paginação de produtos.**

1. Crie vários produtos.
2. Faça uma solicitação GET para `/products/?page=2&limit=5` para listar os produtos na segunda página com um limite de 5 produtos por página.
3. Verifique se a resposta contém os produtos corretos de acordo com a página e o limite especificados.

### Pedidos:

**[CT_011] (CA_11) - Verificar a possibilidade de criar um pedido válido.**

1. Faça uma solicitação POST para `/orders/` com dados válidos de um novo pedido.
2. Verifique se a resposta retorna os dados do pedido criado.

**[CT_012] (CA_12) - Verificar a impossibilidade de criar um pedido inválido (exemplo: produtos inexistentes).**

1. Faça uma solicitação POST para `/orders/` com dados inválidos de um novo pedido, como IDs de produtos inexistentes.
2. Verifique se a resposta retorna um erro apropriado, como 400.

**[CT_013] (CA_13) - Verificar a listagem de todos os pedidos existentes.**

1. Crie vários pedidos.
2. Faça uma solicitação GET para `/orders/` para listar todos os pedidos existentes.
3. Verifique se a resposta contém a lista correta de pedidos.

**[CT_014] (CA_14) - Verificar a listagem de um pedido válido por ID.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação GET para `/orders/{order_id}` com o ID válido.
4. Verifique se a resposta contém as informações corretas do pedido.

**[CT_015] (CA_15) - Verificar a impossibilidade de listar um pedido por um ID inválido (exemplo: ID inexistente).**

1. Faça uma solicitação GET para `/orders/{order_id}` com um ID inválido (por exemplo, um ID que não existe).
2. Verifique se a resposta retorna um erro 404.

**[CT_016] (CA_16) - Verificar a possibilidade de atualizar um pedido válido.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação PUT para `/orders/{order_id}` com o ID válido e dados atualizados.
4. Verifique se a resposta retorna as informações atualizadas do pedido.

**[CT_017] (CA_17) - Verificar a impossibilidade de atualizar um pedido inválido (exemplo: produtos inexistentes).**

1. Crie um

 pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação PUT para `/orders/{order_id}` com o ID válido, mas com dados de produtos inválidos (IDs de produtos inexistentes).
4. Verifique se a resposta retorna um erro apropriado, como 400.

**[CT_018] (CA_18) - Verificar a possibilidade de excluir um pedido válido.**

1. Crie um pedido.
2. Obtenha o ID do pedido criado.
3. Faça uma solicitação DELETE para `/orders/{order_id}` com o ID válido.
4. Verifique se a resposta retorna os dados do pedido excluído.

**[CT_019] (CA_19) - Verificar a impossibilidade de excluir um pedido inválido (exemplo: ID inexistente).**

1. Faça uma solicitação DELETE para `/orders/{order_id}` com um ID inválido (por exemplo, um ID que não existe).
2. Verifique se a resposta retorna um erro 404.

**[CT_020] (CA_20) - Verificar a impossibilidade de excluir um pedido sem autenticação.**

1. Faça uma solicitação DELETE para `/orders/{order_id}` com um ID válido, mas sem fornecer autenticação.
2. Verifique se a resposta retorna um erro de autenticação, como 401.

