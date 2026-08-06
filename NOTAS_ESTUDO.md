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
