# Notas de Estudo - Etapa 1

## 1. O que difere um "Projeto de Software" de um "Script/Código isolado"?

Um script isolado resolve uma tarefa pontual e geralmente não se preocupa com
manutenção, documentação ou reuso. Já um projeto de software tem escopo
definido, ciclo de vida, versionamento e é pensado pra evoluir com o tempo.

Um exemplo bem claro disso na minha experiência foi o NYX, meu primeiro
projeto de verdade: comecei testando um assistente de IA local com Ollama,
mas rapidamente virou um projeto estruturado — com sistema de memória em
Python, API com FastAPI, interface própria em HTML/CSS/JS, e desafios reais
de engenharia (conflitos de CSS, problemas de venv, decisão de abandonar o
Mem0 por simplicidade). Não era mais "rodar um script", era manter um
sistema com várias partes se comunicando.

## 2. Ciclo de Vida Básico

- **Levantamento de Requisitos / Escopo:** definir o que o sistema precisa
  fazer. No CustoChef, por exemplo, isso aconteceu quando pivotei do
  SlimTrack (SaaS de emagrecimento) pra um sistema de gestão de custos de
  restaurante — reaproveitei a base técnica (Node.js/Express/PostgreSQL/
  Prisma), mas precisei redefinir todo o escopo e o schema do banco pro
  novo domínio.

- **Desenvolvimento / Codificação:** é a fase de implementar. No CustoChef
  isso significou construir desde o CRUD básico de ingredientes até
  features avançadas como histórico de preços, comparação de fornecedores
  e sugestões automáticas de reajuste de margem.

- **Testes / Qualidade:** validar se tudo funciona como esperado — por
  exemplo, testei a integração do Stripe (Free, Pro, Enterprise) ponta a
  ponta, incluindo os webhooks, antes de considerar a feature pronta.

- **Entrega / Implantação:** colocar em produção de verdade. No meu fluxo
  isso é commitar no GitHub (deploy automático via Vercel) e rodar as
  migrations de produção no Console do Railway — inclusive um erro que
  cometo com frequência é esquecer de rodar `npx prisma migrate deploy`
  depois de mudar o schema, o que reforça por que essa etapa de implantação
  precisa de atenção redobrada.

## 3. Por que escopo fechado é vital antes de codificar

Sem escopo fechado, o projeto sofre com "scope creep" — funcionalidades
sendo adicionadas sem controle, o que atrasa entregas. Um exemplo prático
da minha rotina: fixei a versão do Prisma em 6.19.3 propositalmente pra
evitar que mudanças inesperadas da versão 7 quebrassem o projeto no meio
do caminho. Isso é basicamente a mesma lógica de escopo fechado aplicada a
dependências: travar o que já funciona pra não ter atraso ou retrabalho
por causa de mudanças fora do meu controle.

Definir escopo fechado antes de codar evita que eu comece a implementar uma
feature (tipo o modo demo/sandbox que ainda tô debugando no CustoChef) sem
ter clareza total do comportamento esperado — o que geralmente é a causa de
bugs difíceis de rastrear depois.


# O que é uma EAP?
A EAP (Estrutura Analítica do Projeto), também chamada de WBS (Work Breakdown Structure), é uma técnica de gestão de projetos que consiste em decompor o trabalho total do projeto em partes menores e mais fáceis de gerenciar. É como se você pegasse um projeto grande e complicado e fosse fatiando ele em pedacinhos menores, até chegar em tarefas simples que uma pessoa ou uma equipe pequena consegue executar.

# Qual a diferença entre uma EAP e uma Lista de Tarefas?

Uma Lista de Tarefas tem formato simples e linear, com itens soltos, visão micro de tarefas isoladas, somente tarefas, sem relação entre itens, e serve basicamente para executar.

Já a EAP tem formato de estrutura em árvore (hierárquica), com itens agrupados por módulos e entregas, visão macro e micro (do todo para as partes), com módulos, pacotes e tarefas, mostrando a hierarquia e o que pertence a quê, e serve para planejar, organizar e controlar.

# Para que serve uma EAP no desenvolvimento de software?
A EAP é essencial porque ajuda a visualizar o todo, ou seja, você enxerga o projeto completo de cima. Ajuda também a dividir o trabalho, transformando algo grande em tarefas pequenas. Permite distribuir tarefas, onde cada membro da squad fica responsável por uma parte. Facilita estimar prazos, ficando mais fácil calcular o tempo de cada entrega. Ajuda a controlar recursos, mostrando o que é prioridade. E por fim, permite acompanhar o progresso, vendo o que já foi feito e o que falta.

# PESQUISA E FUNDAMENTAÇÃO

## 1. PROJETOS DE SOFTWARE

Um projeto de software precisa ser planejado antes da programação. Nessa etapa são definidos o objetivo, o escopo, os recursos necessários, as responsabilidades da equipe e o cronograma.

No projeto NexGear, o planejamento serve para organizar a criação da loja virtual antes da implementação. Assim, a equipe consegue entender o que precisa ser desenvolvido e qual será a sequência das atividades.

## 2. LEVANTAMENTO DE REQUISITOS E ESCOPO

O escopo define o que fará parte do projeto. Essa definição ajuda a evitar alterações desnecessárias e deixa claro quais funcionalidades serão desenvolvidas.

Na NexGear, o escopo foi definido como uma loja virtual de periféricos gamer composta por três páginas principais:

- Página Inicial;
- Página de Produtos;
- Página de Contato.

Cada página possui componentes próprios, como cabeçalho, menu, conteúdo, cards de produtos, formulário e rodapé.

## 3. ARQUITETURA DE INFORMAÇÃO E NAVEGAÇÃO

A arquitetura de informação organiza o conteúdo e a navegação de um sistema. Em um site, é importante definir como as páginas estarão conectadas e como o usuário poderá encontrar as informações.

Na NexGear, o usuário poderá acessar a página inicial, navegar para os produtos e acessar a página de contato.

Uma navegação bem organizada facilita o uso do site e melhora a experiência do usuário.

## 4. UX E RESPONSIVIDADE

UX significa User Experience, ou Experiência do Usuário. Esse conceito está relacionado à facilidade de utilização de um sistema e à forma como o usuário consegue realizar suas tarefas.

No caso da NexGear, é importante que o usuário consiga encontrar os produtos e navegar pelas páginas de maneira simples.

Também é necessário considerar a responsividade. O site deve se adaptar a diferentes tamanhos de tela, funcionando tanto em computadores quanto em celulares.

## 5. CONTROLE DE VERSÃO — GIT E GITHUB

O Git é utilizado para controlar as versões dos arquivos de um projeto. Ele permite registrar alterações, recuperar versões anteriores e acompanhar a evolução do desenvolvimento.

O GitHub funciona como uma plataforma para armazenar e compartilhar os repositórios Git.

No projeto NexGear, o Git e o GitHub são utilizados para organizar os arquivos, registrar alterações e manter o projeto disponível de forma organizada.

## 6. SCRUM E ORGANIZAÇÃO DA EQUIPE

O Scrum é um framework utilizado para organizar o desenvolvimento de projetos complexos.

A divisão de responsabilidades ajuda a equipe a entender quem ficará responsável por cada atividade. No desenvolvimento de um site, podem existir funções relacionadas ao planejamento, design, desenvolvimento e validação.

No projeto NexGear, essa organização ajuda a distribuir as tarefas e acompanhar o andamento do projeto.

## 7. IMPORTÂNCIA DO PLANEJAMENTO

O planejamento é importante porque permite organizar o projeto antes da implementação.

No caso da NexGear, foram considerados:

- objetivo do projeto;
- escopo;
- páginas do site;
- componentes;
- navegação;
- estrutura de pastas;
- equipe;
- recursos materiais;
- infraestrutura;
- cronograma;
- controle de versão;
- responsividade.

Dessa forma, a equipe consegue iniciar o desenvolvimento com uma visão mais clara do que precisa ser feito.

# CONCLUSÃO

O desenvolvimento de um site não começa somente com a programação. Antes disso, é necessário planejar o projeto, definir o escopo, organizar as páginas, pensar na navegação, definir os recursos e distribuir as responsabilidades.

No projeto NexGear, esses conceitos foram utilizados para criar a base de uma loja virtual de periféricos gamer.

O planejamento permite reduzir problemas durante o desenvolvimento e facilita a organização das atividades da equipe.
