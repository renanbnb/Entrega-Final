# O que mudou em relação ao protótipo

Esta lista compara o site entregue com as telas do protótipo. Cada item diz o que estava no protótipo, como ficou e por que mudou. No fim estão as coisas que continuaram iguais.

## 1. O contato virou uma página com formulário

**No protótipo:** o contato era o último bloco da página, com um botão "Enviar e-mail".

**No site:** existe a página `contato.html`, com formulário. Os botões "Solicitar proposta" levam para ela. O bloco do fim das páginas continua lá, com o e-mail e o Instagram.

**Por quê:** um botão de e-mail não tem campo para validar, e a entrega pede formulário com `label`, `type` e validação. Também faz mais sentido para o visitante, que não precisa ter programa de e-mail configurado para pedir uma proposta.

## 2. O menu passou a levar para páginas

**No protótipo:** o menu tinha cinco links para partes da página inicial: Como pensamos, O que fazemos, Método, Grupo ARB e Dúvidas.

**No site:** o menu tem O que fazemos, Método, Grupo ARB, Catálogo e Dúvidas, mais o botão Solicitar proposta. "Como pensamos" saiu do menu, mas a seção continua na página inicial.

**Por quê:** com quatro páginas, o menu precisava mostrar o caminho entre elas. Tirar um link em vez de somar mais dois foi o jeito de o menu continuar cabendo numa linha em telas entre 921px e 1100px. No Figma o quadro tem largura fixa e esse aperto não aparecia.

## 3. O catálogo ganhou uma faixa de navegação no topo

**No protótipo:** o catálogo era uma tela separada, com uma faixa escrito só "Demonstração".

**No site:** a faixa tem os links Início, Grupo ARB, Catálogo e Contato.

**Por quê:** o catálogo usa as cores e a logo da loja, não as da ARB. Sem a faixa, quem entrasse nele não tinha como voltar para o resto do site. Preferimos a faixa a colocar o cabeçalho da ARB em cima do cabeçalho da loja, porque dois cabeçalhos ocupariam metade da tela no celular.

## 4. Um cartão novo na página de contato

**No protótipo:** não existia.

**No site:** ao lado do formulário tem o cartão "O que acontece depois", com três passos.

**Por quê:** é o componente feito com Tailwind que a entrega pede. Escolhemos criar um componente novo em vez de refazer um que já existia, para não ter o mesmo botão feito de dois jeitos diferentes no site.

## 5. Campos de formulário com a aparência do sistema

**No protótipo:** no Figma cada campo tem um desenho só, igual em qualquer tela.

**No site:** o `select` e o `checkbox` usam o desenho do navegador, só com a borda, a fonte e a cor de destaque ajustadas. Num iPhone, num Android e no Windows eles ficam um pouco diferentes entre si.

**Por quê:** foi o caso mais claro de coisa que o navegador impõe. A lista que abre no `select` é desenhada pelo sistema e o CSS não alcança. Para ter um desenho só seria preciso trocar o `select` por um componente feito à mão, e aí se perde o teclado e o leitor de tela que o campo nativo já traz. Ficamos com o nativo.

## 6. As mensagens de erro ficam embaixo do campo

**No protótipo:** o estado de erro não tinha sido desenhado.

**No site:** o campo com erro fica com a borda vermelha e uma frase embaixo.

**Por quê:** o balão de erro padrão muda de texto e de aparência de um navegador para outro e some sozinho depois de alguns segundos. Com a frase embaixo do campo, o texto é o mesmo em qualquer navegador e continua na tela até a pessoa corrigir.

## 7. A cor do contorno de foco muda conforme o fundo

**No protótipo:** não havia desenho de foco, porque no Figma ninguém navega com Tab.

**No site:** o contorno é dourado nas áreas escuras e verde-escuro nas áreas claras.

**Por quê:** testando só com o teclado, o dourado quase não aparecia em cima do branco e do bege.

## 8. O título da pergunta de idade deixou de ser título

**No protótipo:** "Você tem 18 anos ou mais?" tinha estilo de título.

**No site:** a aparência é a mesma, mas no HTML é um parágrafo.

**Por quê:** essa janela vem antes de todo o resto no código. Se fosse um `h2`, ele apareceria antes do `h1` da página e os títulos ficariam fora de ordem.

## 9. O rodapé é o bloco de contato inteiro

**No protótipo:** o bloco de contato e o rodapé eram desenhados como uma coisa só, no fim da tela.

**No site:** esse bloco é a tag `footer`, depois do `main`.

**Por quê:** no Figma não existe diferença entre conteúdo e rodapé, é tudo retângulo. No HTML foi preciso escolher. Como o bloco se repete igual em Início e Grupo ARB e só tem contato e assinatura, ele é rodapé.

## 10. O telefone do catálogo é de exemplo

**No protótipo:** aparecia o telefone da loja.

**No site:** o pedido é montado para um número que não existe, (61) 90000-0000.

**Por quê:** o repositório é público e o catálogo é uma demonstração. Quem testasse o botão "Enviar pedido" mandaria um pedido falso para uma loja de verdade.

## 11. Imagens e código em arquivos separados

**No protótipo:** não se aplica, é só organização do código.

**No site:** o catálogo, que no começo era um arquivo só com as fotos embutidas, foi dividido em HTML, CSS, JavaScript e uma pasta de imagens. Os estilos que estavam escritos direto nas tags viraram classes.

**Por quê:** a entrega pede CSS em arquivo próprio e sem `style=`. De quebra, a página do catálogo caiu de 2 MB para 11 KB de HTML, e as fotos passaram a carregar só quando aparecem na tela.

## O que ficou igual

- Cores, fontes e espaçamentos das três páginas da ARB e do catálogo.
- A ordem das seções da página inicial e da página do Grupo ARB.
- Os textos. Só mudaram os rótulos de menu e de botão citados acima.
- O comportamento do catálogo: busca, filtro por marca, ordenação e pedido pelo WhatsApp.
- O menu que vira botão no celular, abaixo de 920px de largura.
