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

## 1. Paleta de Cores (regra 60-30-10)

A paleta foi escolhida pra reforçar a identidade gamer/tech da marca sem virar caricatura. O cinza-escuro domina a página, o cinza-médio organiza os blocos e o magenta neon é o ponto de ação que puxa o olho pros botões e CTAs.

### 60% — Cor dominante (fundo e áreas grandes)

```
#cb1fff
```

- Uso: background principal do site, área do banner, fundo da Home, fundo do catálogo e fundo do formulário de contato.
- Justificativa: preto-acinzentado profundo que lembra setup de streamer com LED apagado. Não cansa a vista em sessões longas de navegação, faz os produtos e os destaques de cor "saltarem" e passa uma sensação sóbria de hardware premium.

### 30% — Cor secundária (cards, menus e elementos estruturais)

```
#1c5bed
```

- Uso: fundo do cabeçalho/menu de navegação, fundo dos cards de produto, fundo de seções estruturais, fundo do campo de filtro, divisórias e blocos de informação de contato.
- Justificativa: um tom levemente mais claro que o fundo principal, o que cria a hierarquia visual sem precisar de bordas pesadas. Ajuda a separar cards do banner e mantém o "look gamer" sem cair no preto puro absoluto.

### 10% — Cor de destaque (botões de ação e CTAs)

```
#ffffff
```

- Uso: botão "Ver mais" nos cards, botão de envio do formulário de contato, estado "ativo" do filtro de categoria, links de ação no rodapé e microinterações de hover.
- Justificativa: magenta neon bem saturado, com alto contraste sobre os dois tons de cinza. É a cor clássica de RGB em setup gamer, então o público reconhece a identidade na hora, e a saturação forte garante que o CTA nunca passe despercebido na página.

### Cores de apoio (uso pontual)

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

- Fonte: [Rajdhani](https://fonts.google.com/specimen/Rajdhani) (Google Fonts).
- Pesos sugeridos: 500 (médio) pra subtítulos e 700 (bold) pra títulos principais.
- Justificativa: Rajdhani tem um desenho geométrico com terminais angulosos que remetem a HUDs de jogos e painéis de hardware. Transmite tecnologia sem virar display futurista ilegível, e o contraste de pesos ajuda a montar uma hierarquia clara de seções (banner, "Produtos em destaque", "Filtros", "Envie sua mensagem").

### Corpo de texto — Inter

- Fonte: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts).
- Pesos sugeridos: 400 (regular) pra parágrafos e 500 (medium) pra labels de formulário e botões.
- Justificativa: Inter foi desenhada pra leitura em tela, com altura-x generosa e espaçamento consistente — o que importa quando o usuário vai ler nome de produto, preço, descrição e mensagens longas no formulário. Mantém o "clean" do fundo escuro e deixa a Rajdhani brilhar nos títulos sem competir.

### Combinação

| Função | Fonte | Peso | Tamanho base sugerido |
|---|---|---|---|
| Título principal (banner, h1) | Rajdhani | 700 | 40–48px |
| Título de seção (h2) | Rajdhani | 500 | 24–32px |
| Subtítulo / label | Inter | 500 | 14–16px |
| Corpo de texto | Inter | 400 | 16px |
| Texto pequeno / rodapé | Inter | 400 | 14px |

---

## 3. Inventário de Pastas de Assets

Status das pastas solicitadas no briefing:

| Caminho | Status | Observação |
|---|---|---|
| `/assets/images` | Já existia | Mantida como está, com `.gitkeep` e sem conteúdo ainda. |
| `/assets/icons` | Criada agora | Pasta nova, criada vazia com `.gitkeep` pra Git rastrear. |
| `/assets/css` | Já existia | Mantida como está, com `.gitkeep` e sem conteúdo ainda. |
| `/js` | Já existia | Mantida como está, com `.gitkeep` na raiz do projeto. |
