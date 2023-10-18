## Quality Assurance: Definição 

Imagine um tester que realiza mais do que o esperado, um profissional que além de se entregar para o software, também busca melhorias em seu meio trabalhistico e otimização das metodologias que lá são ultilizadas. Esse é o Quality Assurance (QA), possuindo uma visão ampla do projeto, um QA segue além da perspectiva do programa e do que ele entrega, tendo seu foco em garantir a excelência em todos os aspectos. 
Enquanto um teste comum busca apenas cumprir o que é proposto, o QA se preocupa em entregar da melhor forma possível, como em de que forma a equipe está se organizando, como tornar a produção sera mais eficiente, que maneiras podem ser feitas pra melhhorarem os custos do produto, se ele pode entregar fatores relevantes além do solicitado entre outros. 

Podemos ilustrar isso com o seguinte exemplo:

![0](https://cdn.discordapp.com/attachments/1027385935333171220/1109895529120407622/image.png)

__Eficácia:__ Um teste entrega apenas o _proposto_.

__Eficiência:__ Um QA se preocupa em entregar a _melhor solução possível_, considerando o contexto geral.

## Como um QA pode gerar qualidade em um projeto.

Aqui estão apresentadas algumas práticas que podem ajudar a garantir a qualidade em um projeto, como:

1. __Alcançar uma cobertura de testes completa:__
Para qualquer profissional no ramo de testes de software, é relevante ressaltar a importância de uma cobertura bem feita, isso não significar gerar testes desnecessário até a exaustão, e sim pensar em maneiras que possam agregar uma maior quantidade de possíveis bugs á serem solucionados.
Podemos inclusive, pontuar algumas ressalvas, como:

    - Adotar a perspectiva do usuário.
    - Priorizar métodos mais utilizados nos testes, deixando de lado os menos relevantes para evitar desperdícios de tempo e recursos (Princípio de Pareto).
    - Realizar testes o mais cedo possível durante o ciclo de produção.
    - Testar em todas as atividades do ciclo de vida do produto.
    - Revisar e atualizar regularmente os testes, adaptando-os para encontrar novas falhas. Dessa forma, evitando o "Paradoxo Pesticida".

2. __Cumprir os prazos e expectativas do cliente:__
Cumprir as expectativas do usuário, cliente, empresa ou qualquer entidade que tenha solicitado ou que usufrua de nosso software é essencial para uma boa imagem da empresa. E para conseguirmos realizar essa produção, há de ser nescessário alguns métodos, por exemplo:

    - Manter uma comunicação eficaz e que compreenda as necessidades futuras.
    - Estabelecer uma lista de prioridades clara.
    - Gerenciar o tempo de forma eficiente.

Afinal, garantir a entrega dentro do prazo e atender às expectativas do cliente são fundamentais para o sucesso do projeto.

![1](https://cdn.discordapp.com/attachments/1027385935333171220/1109900663300837467/image.png)

3. __Compreensão da psicologia do teste:__
Saindo da pespectiva de entrega ao usuário e adentrando a própria comunicação na equipe, fornecer bons feedbacks e manter uma comunicação clara é essencial para um bom desenvolvimento. Mas claro, existem momentos e situações que dificultam essa atrelação entre os funcionários, principalmente quando falamos de testes. Os profissionais que são responsáveis por estes setor, vivem constantemente tendo que auxiliar e até "desfazer" códigos de seus colegas. E, dependendo da forma que se é comunicado, a relação entre eles pode se tornar desagradável. Portanto:

- Entender a diferença entre **erros, defeitos e falhas**:

    - Erro: ação humana que leva a um mau entendimento ou execução inadequada (por exemplo, falta de entendimento de como executar um cálculo).
    - Defeito: resultado de um erro de entendimento, como um código com uma fórmula de cálculo mal escrita.
    - Falha: a execução de um defeito que leva a resultados incorretos (por exemplo, um cálculo que produz resultados errados).

- Usar termos como "ocorrência" ou "incidente" para comunicar defeitos/erros, pode evitar interpretações negativas.

- Além disso, é pertinênte estar ciente do viés de confirmação, que nos leva a enxergar mais aquilo em que acreditamos e concordamos, em vez de observar o que discordamos.


4. __Um software sem erros não é uma boa razão para lançar em produção:__

    - A ausência de erros pode indicar que eles estão ocultos ou que o software não foi suficientemente testado.
    - Lembre-se de que lançar um software sem erros não garante sua aceitação pelos usuários. Portanto, é fundamental realizar testes de usabilidade.

5. __Encontrar e corrigir defeitos não é útil se:__

    - O produto não for utilizável.
    - O produto não atender às necessidades e expectativas dos usuários.

6. __O teste de software não é um processo aleatório para descobrir bugs:__
A realização de testes é um processo estruturado para garantir sua eficacia, considerando as necessidades do produto.

7. __Estar sempre em busca de inovação nos testes:__
Estar sempre em busca de inovação nos testes de software é essencial para acompanhar o ritmo acelerado das mudanças tecnológicas e garantir a qualidade dos produtos e sistemas de software. A constante evolução das tecnologias e das necessidades dos usuários demanda abordagens cada vez mais sofisticadas e eficientes para testar e validar o software.
Portanto, faz-se nescessário:

    - Explorar novas técnicas e abordagens para aprimorar a qualidade do software.
    - Se manter atualizado sobre as melhores práticas e tendências da área.

Ao seguir essas práticas, um QA pode desempenhar um papel fundamental na geração de qualidade excepcional em um projeto de software, garantindo a satisfação do cliente e o sucesso do produto.

### Pirâmide de teste:

Mike Cohn criou esse conceito em seu livro Succeeding with Agile . É uma ótima metáfora visual dizendo para você pensar em diferentes camadas de teste. Ele também informa quanto teste fazer em cada camada.

![piramide](https://media.discordapp.net/attachments/1109930711055618160/1110258495296643192/piramide.png?width=711&height=406)

Devido à sua simplicidade, a essência da pirâmide de teste serve como uma boa regra prática quando se trata de estabelecer seu próprio conjunto de testes. Sua melhor aposta é lembrar duas coisas da pirâmide de teste original de Cohn:

1. Escrever testes com granularidade diferente
2. Quanto mais alto nível você obtiver, menos testes deverá ter

Atenha-se à forma de pirâmide para criar um conjunto de testes saudável, rápido e sustentável: Escreva muitos testes de unidade pequenos e rápidos . Escreva alguns testes mais granulares e muito poucos testes de alto nível que testem seu aplicativo de ponta a ponta. Cuidado para não acabar com uma casquinha de sorvete de teste que será um pesadelo para manter e leva muito tempo para ser executado.

### Teste unitário

Os testes de unidade verificam o funcionamento da menor unidade de código testável da nossa aplicação, independente da interação dela com outras partes do nosso código.

Não reflita sua estrutura de código interno em seus testes de unidade. Em vez disso, teste o comportamento observável. Pense sobre

_se eu inserir valores xe y, o resultado será z?_

em vez de

_se eu inserir xe y, o método chamará a classe A primeiro, depois chamará a classe B e depois retornará o resultado da classe A mais o resultado da classe B?_

- Estrutura de teste

Uma boa estrutura para todos os seus testes (isso não se limita a testes de unidade) é esta:

1. Configure os dados de teste
2. Chame seu método em teste
3. Afirme que os resultados esperados são retornados

Existe um bom mnemônico para lembrar essa estrutura: _"Arrange, Act, Assert"_ . Outro que você pode usar é inspirado no BDD . É a tríade "dado" , "quando" e "então" , onde dado reflete a configuração, quando a chamada do método e, em seguida , a parte da asserção.

Esse padrão também pode ser aplicado a outros testes de nível mais alto. Em todos os casos, eles garantem que seus testes permaneçam fáceis e consistentes de ler. Além disso, testes escritos com essa estrutura em mente tendem a ser mais curtos e expressivos.

### Teste de integração

![](https://miro.medium.com/v2/resize:fit:640/1*peBPc8OfE1HrqvHh6BxdOQ.gif)

A porta funciona perfeitamente, a fechadura funciona perfeitamente, mas a integração entre ambas não rolou muito bem.

Podemos ter testado duas unidades que interagem entre si separadamente, usando os test doubles mencionados acima, e concluído que ambas então funcionando como esperado. Ainda assim, é possível que as duas unidades não funcionem em conjunto.

Testes de integração estreitos vivem no limite do seu serviço. Conceitualmente, eles sempre tratam de desencadear uma ação que leva à integração com a parte externa (sistema de arquivos, banco de dados, serviço separado). Um teste de integração de banco de dados ficaria assim:


![Figura 6](https://martinfowler.com/articles/practical-test-pyramid/dbIntegrationTest.png)

Um teste de integração de banco de dados integra seu código a um banco de dados real

- iniciar um banco de dados
- conecte seu aplicativo ao banco de dados
- acionar uma função dentro do seu código que grava dados no banco de dados
- verifique se os dados esperados foram gravados no banco de dados lendo os dados do banco de dados

Outro exemplo, testar se seu serviço se integra a um serviço separado por meio de uma API REST pode ser assim:

![Figura 7.](https://martinfowler.com/articles/practical-test-pyramid/httpIntegrationTest.png)

esse tipo de teste de integração verifica se seu aplicativo pode se comunicar corretamente com um serviço separado

- inicie seu aplicativo
- iniciar uma instância do serviço separado (ou um teste duplo com a mesma interface)
- acionar uma função dentro do seu código que lê da API do serviço separado
- verifique se seu aplicativo pode analisar a resposta corretamente

Seus testes de integração - como testes de unidade - podem ser bastante whitebox. Algumas estruturas permitem que você inicie seu aplicativo enquanto ainda pode usar de algumas outras partes de seu aplicativo para que você possa verificar se as interações corretas ocorreram.

Escreva testes de integração para todas as partes do código em que você serializar ou desserializar dados. Pense sobre:

- Chamadas para a API REST dos seus serviços
- Lendo e gravando em bancos de dados
- Chamando as APIs de outros aplicativos
- Lendo e gravando em filas
- Escrevendo no sistema de arquivos

Escrever testes de integração em torno desses limites garante que a gravação e a leitura de dados desses colaboradores externos funcionem bem.

### Teste E2E

São testes que simulam o ambiente real, isto é, sobem a aplicação ou abrem o navegador, preenchem formulários, clicam em botões e, por fim, verificam se aconteceu o que era esperado. A diferença desse tipo de teste para um usuário real é que os testes end to end geralmente acontecem em um ambiente controlado (não o de produção) e quem executa as ações é um robozinho (não o usuário real). Vale lembrar que quando falamos “usuário” não estamos falando necessariamente do cliente que vai acessar sua página ou aplicação desktop: se seu software for uma API, então o usuário é quem vai consumir essa API.

### Evolução dos tipos de testes

O software pronto para produção requer testes antes de entrar em produção. À medida que a disciplina de desenvolvimento de software amadureceu, as abordagens de teste de software também amadureceram. Em vez de ter uma miríade de testadores manuais de software, as equipes de desenvolvimento passaram a automatizar a maior parte de seus esforços de teste. Automatizar seus testes permite que as equipes saibam se seu software está quebrado em questão de segundos e minutos, em vez de dias e semanas.

O ciclo de feedback drasticamente reduzido alimentado por testes automatizados anda de mãos dadas com práticas de desenvolvimento ágil, entrega contínua e cultura DevOps. Ter uma abordagem de teste de software eficaz permite que as equipes se movam com rapidez e confiança.

Tradicionalmente, o teste de software era um trabalho excessivamente manual feito ao implantar seu aplicativo em um ambiente de teste e, em seguida, realizar alguns testes no estilo caixa-preta, por exemplo, clicando na interface do usuário para ver se algo está quebrado. Freqüentemente, esses testes seriam especificados por scripts de teste para garantir que os testadores fizessem verificações consistentes.

