# Os 7 Fundamentos do Teste (ISTQB)

 1. Teste Demonstra a Presença de Defeitos, Mas Nunca a Sua Ausência
O teste pode demonstrar a presença de defeitos, mas não pode provar que eles não existem.

 2. Teste Exaustivo Não É Possível
Riscos e prioridades são levados em consideração para dar foco aos esforços de teste.

 3. Teste Antecipado
Quanto mais cedo encontramos um defeito, mais barato será sua identificação e correção.
Regra 10 de Myers

 4. Agrupamento de Defeitos
Um número pequeno de módulos contém a maioria dos defeitos descobertos durante o teste antes de sua entrega ou exibe a maioria das falhas operacionais.

Princípio de Pareto
![pareto](https://media.discordapp.net/attachments/1109930711055618160/1109931662080495696/principio-de-pareto-80-20.png)

 5. Paradoxo do Pesticida
Rodar o mesmo conjunto de testes de novo e de novo não te ajudará a encontrar mais falhas. Assim que os defeitos detectados são corrigidos, estes cenários de teste se tornam inúteis.   Assim, é importante revisar e atualizar regularmente os testes para adaptá-los e potencialmente encontrar mais falhas.

 6. Teste Depende de Contexto
Dependendo do proposito ou da indústria, diferentes aplicações devem ser testadas diferentemente. Enquanto a segurança pode ser de importância primária para um produto de tecnologia financeira, é menos importante para um website corporativo. Este último põe ênfase em usabilidade e velocidade.
"Sem riscos, sem testes".
"Converse com seu cliente e descubra qual é o risco".

 7. A Ilusão da Ausência de Erros
A completa ausência de defeitos no seu produto não significa necessariamente que ele será um sucesso. Não importa o tempo que você dedique polindo seu Código ou melhorando as funcionalidades se seu produto não é útil ou atende as expectativas dos usuários, ele não será adotado pela audiência alvo. 

# Diferença entre Teste e QA

Teste avalia o produto, bom ou ruim.

QA trabalha sobre o processo visando sua melhora:

- Entendimento da causa raiz dos defeitos encontrados
- Aprimorar processos
- Prevenir reincidências de erros
- Melhorar a qualidade dos sistemas futuros
- Testes devem ser integrados como uma das atividades de garantia de qualidade

# Erro, Ocorrência, Defeito e Falha

![erro-defeito-falha](https://media.discordapp.net/attachments/1109930711055618160/1109973459242590280/image.png?width=962&height=406)
Apenas quem produz o código pode encontrar um erro.

A partir do momento que ele é encontrado por um terceiro ele é denominado como defeitos.

Usar o termo ocorrência ou incidente para comunicar defeitos/erros de forma a não ser mal interpretado.

# Tipos de Testes Baseados na IEC/ISO 25010

A ISO/IEC 25010 é uma norma ISO disponibilizada em 2011 para qualidade de produto de software. Define modelos de avaliação da qualidade de software e sistemas.

Substituiu a norma ISO/IEC 9126, da qual adicionou às características principais "segurança" e "compatibilidade".

![iso-25010](https://media.discordapp.net/attachments/1109930711055618160/1109975785625878568/iso25010-1170x430.png?width=1025&height=377)

Ela compreende 8 características de qualidade, são elas: Adequação funcional, Eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança, manutenção e portabilidade.

A norma ISO/IEC 25010 define as características de qualidade que todos os softwares devem ter, de forma a alcançar um nível muito alto de qualidade no software que será entregue.

## IEC/ISO 25010 - Adequação Funcional

Essa característica envolve a capacidade do software de realizar o que ele se propõe a fazer. As subcaracterísticas são:

- Integridade funcional: cobertura de todas as tarefas e objetivos;
- Correção funcional: quão bem provê os resultados corretos quando preciso;
- Adequação funcional: quão bem é capaz de realizar tarefas e objetivos específicos.

## IEC/ISO 25010 - Usabilidade

Trata-se da capacidade de um produto ou sistema de realizar objetivos eficientemente, efetivamente e de maneira satisfatória. As subcaracterísticas são as seguintes:

- Adequação reconhecível: capacidade de reconhecer em seu produto ou sistema elementos e comportamentos comuns ao usuário;
- Capacidade de aprendizado: facilidade de aprender como utilizar o produto ou sistema;
- Operabilidade: se um produto ou sistema possui atributos que facilitam seu uso e controle (navegação);
- Proteção de erro do usuário: capacidade do produto proteger o usuário de erros;
- Estética da interface de usuário: agradabilidade da interface;
- Acessibilidade: capacidade de um produto ou sistema ser utilizado por pessoas com características e capacidades diversas.

## IEC/ISO 25010 - Compatibilidade

É a capacidade de um produto, sistema ou componente de trocar informações, assim como de realizar funções enquanto compartilha um hardware. São subcaracterísticas:

- Coexistência: capacidade de realizar funções eficientemente enquanto compartilha um ambiente ou recursos com outros produtos;
- Interoperabilidade: capacidade de dois ou mais sistemas, produtos ou componentes de trocar informações e as utilizarem.

## IEC/ISO 25010 - Confiança

Diz respeito a quão bem um produto realiza funções específicas sob condições específicas.

Estas são as subcaracterísticas deste atributo da ISO/IEC 25010:

- Maturidade: capacidade do produto prevenir as falhas antes que aconteça;
- Disponibilidade: se um sistema, produto ou componente está acessível e operante;
- Tolerância a falhas: capacidade de um sistema, produto ou componente operar apesar de falhas de hardware e/ou software;
- Recuperabilidade: capacidade de recuperar dados em uma possível falha ou interrupção.

## IEC/ISO 25010 - Eficiência no Desempenho

Esse atributo está relacionado à performance do software relacionada à quantidade de recursos utilizados e possui as seguintes subdivisões:

- Comportamento do tempo: tempo de resposta e processamento;
- Uso de recursos: quantidade e tipos de recursos utilizados por um produto ou sistema;
- Capacidade: limite máximo de um produto.

## IEC/ISO 25010 - Manutenibilidade

A manutenibilidade é a característica que engloba a capacidade de um produto ou sistema ser modificado, atualizado e adaptado às mudanças de ambiente e requerimentos.

Abaixo, vamos ver as subcaracterísticas deste atributo.

- Modularidade: programas ou sistemas podem sofrer mudanças sem impactar em outros componentes;
- Reusabilidade: capacidade de um recurso poder ser utilizado em mais de um sistema;
- Analisabilidade: capacidade de diagnosticar problemas ou causas de falhas, assim como partes a serem modificadas;
- Modificabilidade: capacidade de um produto ou sistema ser modificado sem introduzir defeitos ou diminuir a qualidade atual;
- Testabilidade: facilidade e efetividade de testes para o sistema, produto ou componente.

## IEC/ISO 25010 - Portabilidade

Esta característica é a capacidade de um sistema, produto ou componente de ser transferido de um ambiente para outro. As suas subcaracterísticas são:

- Adaptabilidade: capacidade de um produto ou sistema de ser adaptado a um novo hardware, software ou outros ambientes;
- Facilidade de instalação: capacidade de um produto ou sistema ser instalado ou desinstalado facilmente;
- Capacidade de substituição: capacidade de ser trocado por outro produto similar. 

## IEC/ISO 25010 - Segurança

A capacidade de um produto ou sistema proteger informação e dados de vulnerabilidades é chamada de segurança, dentre as características da ISO/IEC 25010. As subdivisões são:

- Confidencialidade – produto ou sistema é capaz de garantir que dados são acessados apenas por aqueles que têm acesso autorizado. 
- Integridade – capacidade de prevenir acesso não-autorizado e modificação de dados ou programas de computador, e quando houver modificação garantir a rastreabilidade de quem a fez.
- Ausência de repúdio – capacidade de provar que ações ou eventos aconteceram e quem os fez.
- Rastreabilidade de uso – ações de usuários autorizados ou não devem ser ligados a eles.
- Autenticidade – a identidade de um sujeito ou recurso pode ser provada.

# Testes Manuais X Testes Automatizados

## Testes Manuais

Esse formato tem como definição, o trabalho humano envolvido. Geralmente um testador entra em ação para executar testes, sem o uso de ferramentas de automação, realizando um acompanhamento passo a passo e documentando todas as etapas.

Considerando as vantagens e desvantagens dos métodos, o modelo manual é passível para identificação de problemas visuais ou usabilidade de um aplicativo por exemplo e possui baixo custo de investimento. Apesar dos pontos positivos, esse método também pode não ser tão preciso nos detalhes, por erro humano.

## Testes automatizados

Já os testes automatizados, oferecem uma assistência com ferramentas automáticas e pré-programadas, com o objetivo de simplificar os processos. A agilidade desse formato entrega se o sistema desempenhou o que era esperado.

Esse modelo oferece a vantagem de maior aproveitamento do tempo e com grande utilidade, para testes repetitivos e com maior duração. Porém, esses têm maior custo de contratação e demoram mais tempo para serem desenvolvidos.

# Testes Tradicionais X Testes Ágeis

<b>Testador Ágil</b> – é o profissional que de forma interativa e incremental. Antes de se iniciar a codificação, o testador junto a equipe já começa a criar estratégias de teste, em outras palavras conforme o projeto é desenvolvido, o testador acaba recebendo toda a codificação que está sendo gerada e com base nas informações que ele recebeu e foi elaborado, ele inicia a sequência de testes e após a realização dos testes com seu OK, o processo de continuidade do projeto parte para o script seguinte, o que pode dizer que o projeto acaba sendo desenvolvido por partes, em que só é dado a continuidade, após todos os testes serem realizados, atendendo a solicitação do cliente. Com isso o projeto é concluído em conjunto com a equipe de desenvolvimento, onde ambos irão atuar de forma ágil e com estratégias já visando os testes a serem realizados.

![testador](https://media.discordapp.net/attachments/1109930711055618160/1109987418087633026/1621818714233.png?width=627&height=406)

<b>Testador Tradicional</b> – é o profissional que recebe todas as informações do projeto após toda a codificação ter sido realizada e alterações que ocorreram no desenvolvimento do projeto. Após isso o testador elabora o plano de testes e estratégia se baseando nos requisitos que foram criados pelo analista de negócios e cliente, antes do início da codificação. Dessa forma os testes são desenvolvidos apenas no final, o que compromete a qualidade dos testes, já que o teste não ocorre conforme as etapas foram sendo desenvolvidas, onde o tempo que o testador acaba atuando é menor, já que o desenvolvimento leva mais tempo que o esperado. 

