# ARB Digital: site institucional e catálogo de exemplo

Site da ARB Digital, um estúdio que cria sites institucionais, páginas de venda e catálogos para pequenas empresas. O site apresenta o estúdio, explica como o trabalho é feito e mostra um catálogo pronto, que dá para abrir e usar, como exemplo do que entregamos.

Entrega 3 da disciplina. O protótipo da entrega anterior virou site com HTML, CSS e JavaScript. Não usamos React.

## Para quem é

Para o dono de pequena empresa que ainda não tem site, ou tem e não vende por ele. Essa pessoa quer entender três coisas antes de chamar alguém: o que o estúdio faz, como é o processo e como fica um trabalho pronto. Por isso o site tem uma página para cada uma dessas respostas e termina num formulário de proposta.

## Páginas

| Página | Arquivo | O que tem |
|---|---|---|
| Início | `index.html` | O que fazemos, as quatro etapas do método, manutenção e perguntas frequentes |
| Grupo ARB | `grupo.html` | A consultoria e a plataforma de gestão que fazem parte do mesmo grupo |
| Catálogo de exemplo | `catalogo.html` | Catálogo de uma tabacaria, com busca, filtro, ordenação e pedido montado para o WhatsApp |
| Contato | `contato.html` | Formulário de proposta com validação |

O menu do topo é o mesmo em Início, Grupo ARB e Contato. O catálogo tem a identidade visual da loja, porque é um trabalho feito para um cliente, então ele ganhou uma faixa no topo com os links de volta para as outras três páginas.

## Como rodar

Não precisa instalar nada.

1. Baixe o repositório (botão **Code**, depois **Download ZIP**) e descompacte, ou clone com o Git.
2. Abra o arquivo `index.html` no navegador.

As fontes vêm do Google Fonts, então na primeira vez é preciso estar com internet. Sem internet o site abre do mesmo jeito, só que com a fonte padrão do sistema.

Quem usa o VS Code pode abrir a pasta e clicar em **Go Live**, da extensão Live Server, para a página recarregar sozinha a cada alteração.

### Só para quem for mexer no componente em Tailwind

O arquivo `css/tailwind.css` já está compilado no repositório. Ele só precisa ser gerado de novo se alguém trocar as classes do cartão em `contato.html`:

```
npm install
npm run build
```

## O que cada arquivo faz

```
index.html              Página inicial
grupo.html              Página do Grupo ARB
catalogo.html           Catálogo de exemplo
contato.html            Formulário de proposta

css/site.css            Estilo de Início, Grupo ARB e Contato: cores, fontes, cabeçalho, seções e rodapé
css/contato.css         Estilo do formulário e do resumo do pedido
css/catalogo.css        Estilo do catálogo
css/tailwind.css        CSS gerado pelo Tailwind para o cartão da página de contato
css/tailwind.input.css  Arquivo de entrada do Tailwind

js/site.js              Menu do celular, abas, itens que abrem e fecham e janela de ampliar imagem
js/contato.js           Mensagens de erro do formulário, contador de caracteres e resumo do pedido
js/catalogo.js          Busca, filtro, ordenação, janela do produto e pedido
js/produtos.js          Lista de produtos do catálogo: nome, marca, preço, categoria e imagem

img/                    Logo e telas de exemplo usadas no site
img/catalogo/           Logo da loja e fotos dos produtos

tailwind.config.js      Cores e fonte usadas pelo Tailwind, com o reset dele desligado
package.json            Comando que compila o Tailwind
README.md               Este arquivo
MUDANCAS.md             O que ficou diferente do protótipo e por quê
```

Para trocar um produto do catálogo basta editar `js/produtos.js`. O número de WhatsApp que recebe o pedido fica na primeira linha de `js/catalogo.js`.

## Interatividade em JavaScript

Em todos os casos a página muda sem recarregar.

| Comportamento | Página | Arquivo |
|---|---|---|
| Abrir e fechar o menu no celular, também pela tecla Esc | Início, Grupo ARB, Contato | `js/site.js` |
| Trocar o exemplo mostrado ao escolher uma aba | Início, Grupo ARB | `js/site.js` |
| Abrir um item de "O que fazemos" e fechar os outros | Início | `js/site.js` |
| Percorrer as quatro etapas do método, com clique ou com as setas | Início | `js/site.js` |
| Ampliar a imagem de um exemplo numa janela | Início, Grupo ARB | `js/site.js` |
| Buscar produto por nome, marca ou sabor enquanto digita | Catálogo | `js/catalogo.js` |
| Filtrar por marca e ordenar por menor ou maior preço | Catálogo | `js/catalogo.js` |
| Adicionar item ao pedido, mudar a quantidade, remover e ver o total | Catálogo | `js/catalogo.js` |
| Mostrar mensagem própria embaixo de cada campo com erro | Contato | `js/contato.js` |
| Contar os caracteres do texto e formatar o telefone enquanto digita | Contato | `js/contato.js` |
| Montar o resumo do pedido depois do envio | Contato | `js/contato.js` |

O pedido do catálogo fica salvo no navegador com `localStorage`, então não se perde se a aba for fechada.

## O formulário

Fica em `contato.html`. Cada campo tem um `label` ligado pelo `for`, e o `type` certo: `text`, `email`, `tel`, `checkbox`, além de `select` e `textarea`.

Quem barra o envio é o próprio navegador, com `required`, `type="email"`, `minlength` e `pattern`. O JavaScript não valida nada por conta própria. Ele só escuta o evento `invalid` e troca o balão padrão por uma frase nossa embaixo do campo, que diz o que falta e dá um exemplo.

Para testar: envie o formulário vazio, depois escreva um e-mail sem o que vem depois do `@` e um telefone incompleto.

O formulário não manda os dados para servidor nenhum. Depois de aprovado, ele mostra o resumo e um botão que abre o e-mail da pessoa com a mensagem já escrita.

## Componente com framework CSS

O cartão "O que acontece depois", na página de contato, foi feito com Tailwind CSS. Todas as classes dele são do framework.

Logo acima do cartão, dentro do `contato.html`, tem um comentário com o mesmo cartão escrito em CSS puro, propriedade por propriedade. Colocamos ali porque no Tailwind o estilo fica no próprio HTML, então é ali que dá para comparar um com o outro.

O que deu para perceber fazendo dos dois jeitos: no Tailwind cada classe é uma regra de uma propriedade só (`p-7` é `padding: 1.75rem`, `gap-4` é `gap: 1rem`), e o `@media` vira um prefixo na classe. Não foi preciso inventar nome de classe nem sair do HTML. Em troca, a linha do HTML fica comprida e mais difícil de ler do que um `.depois` com as regras num arquivo separado.

O reset do Tailwind foi desligado em `tailwind.config.js`. Ligado, ele mudaria margens e bordas do resto do site, que é CSS puro.

## Responsivo e acessibilidade

- Testado em 360px, 768px e 1280px. Nenhuma das quatro páginas tem rolagem horizontal.
- Layout só com Flexbox e Grid. Não há `float` em nenhum arquivo.
- Todo o CSS está em arquivos próprios. Não há `style=` no HTML nem no HTML gerado pelo JavaScript.
- Dá para percorrer tudo com Tab. O foco tem contorno dourado nas áreas escuras e escuro nas áreas claras, para aparecer nos dois fundos.
- A primeira parada do Tab em cada página é o link "Pular para o conteúdo".
- Um `h1` por página, e os títulos seguem em ordem, sem pular nível.
- As imagens que mostram alguma coisa têm `alt` descrevendo. As que são só enfeite, como a logo ao lado do nome e as fotos que repetem o nome do produto escrito ao lado, têm `alt=""`.
- Quem configurou o sistema para reduzir animações vê o site sem elas.

## Sobre o catálogo

O catálogo foi montado como demonstração para uma tabacaria de Brasília. Preços, estoque e o telefone que recebe o pedido são de exemplo, e as fotos são ilustrativas. Como são produtos para maiores de idade, a página abre com uma pergunta de idade antes de mostrar qualquer produto.

## Créditos

Grupo:

- Renan Braga
- Adriellen de Andrade
- Lucas Chagas

Fontes: Playfair Display, Inter, Archivo e Cinzel, pelo Google Fonts.
Framework: Tailwind CSS 3, usado no cartão da página de contato.
Ícones do catálogo: desenhados em SVG direto no código.
As telas de exemplo do início (clínica, advocacia, página de vendas e agenda) e as telas da plataforma usam empresas e dados fictícios.
