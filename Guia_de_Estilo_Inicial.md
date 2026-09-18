# Guia de Estilo Inicial — NexGear

Documento vivo que define a identidade visual da primeira versão do
site da NexGear. Serve como referência pra qualquer ajuste de CSS,
escolha de imagem ou decisão de UI daqui pra frente.

Sobre o projeto:

- **Nome:** NexGear
- **Propósito:** loja virtual de periféricos gamer (mouses, teclados, headsets e GPUs), com vitrine na Home, catálogo filtrável em Produtos e formulário de Contato.
- **Público-alvo:** gamers, streamers e entusiastas de hardware que estão montando setup ou fazendo upgrade.
- **Estado atual do front-end:** os três HTMLs (`pages/index.html`, `pages/produtos.html`, `pages/contato.html`) existem, mas ainda não têm marcação nem estilo. Nenhum arquivo CSS ou JS foi escrito ainda. Este guia é o ponto de partida visual antes do código sair.

---

## 1. Paleta de Cores

Escolhi essa paleta pra reforçar a identidade gamer da marca sem virar caricatura.

### 60% — Cor dominante

```
#cb1fff
```

- Uso o background principal do site, área do banner, fundo da Home, fundo do catálogo e fundo do formulário de contato.
- Com justificativa tem o tom de roxo muito bonito, que lembra setup de streamer com LED apagado. Não cansa a vista em sessões longas de navegação, faz os produtos e os destaques de cor "saltarem" e passa uma sensação sóbria de hardware premium.

### 30% — Cor secundária

```
#1c5bed
```

- Eu uso um fundo do cabeçalho, fundo dos cards de produto, fundo de seções estruturais, fundo do campo de filtro, divisórias e blocos de informação de contato.
- como justificativa um tom de azul muito bonito, o que cria a hierarquia visual sem precisar de bordas pesadas. Ajuda a separar cards do banner e mantém o "look gamer" sem cair no preto puro absoluto.

### 10% — Cor de destaque

```
#ffffff
```

- Eu uso um botão nos cards, botão de envio do formulário de contato, estado "ativo" do filtro de categoria, links de ação no rodapé e microinterações de hover.
- Como justificativa um magenta neon bem saturado, com alto contraste sobre os dois tons de cinza. É a cor clássica de RGB em setup gamer, então o público reconhece a identidade na hora, e a saturação forte garante que o CTA nunca passe despercebido na página.

### Cores de apoio

```
Texto principal:        #F5F5F7
Texto secundário:       #9AA0A6
Borda/sombra discreta:  #2A2D35
Estado de erro:         #FF4D4D
```

---

## 2. Tipografia

A combinação abaixo foi escolhida pra equilibrar a agressividade gamer com legibilidade de catálogo. **Rajdhani** entra com peso e angularidade nos títulos, e **Inter** segura a leitura corrida do corpo de texto.

### Títulos — Rajdhani

- Fonte: [Rajdhani](https://fonts.google.com/specimen/Rajdhani)

### Corpo de texto — Inter

- Fonte: [Inter](https://fonts.google.com/specimen/Inter)
