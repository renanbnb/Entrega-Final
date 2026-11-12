/* Catálogo de demonstração — Tabacaria Ceará.
   Preços e estoque são de exemplo; as fotos são ilustrativas e serão
   trocadas pelas fotos reais da loja na versão final. */
window.PRODUTOS = [

/* ---------- PALHAS E FUMO ---------- */
{cat:"palha", marca:"Asa Branca", nome:"Palha Asa Branca", preco:"12,00",
 imagem:"img/catalogo/palha-asa-branca.webp", sub:"Maço com 40 palhas", destaque:true,
 descricao:"Palha de milho tradicional, folha fina e uniforme. A mais pedida do balcão."},

{cat:"palha", marca:"Flor do Norte", nome:"Cigarro de palha", preco:"15,00",
 imagem:"img/catalogo/cigarro-de-palha.webp", sub:"Display com 10 maços",
 descricao:"Cigarro de palha pronto, display fechado para revenda ou consumo."},

{cat:"palha", marca:"São Francisco", nome:"Palha para cigarro", preco:"14,00",
 imagem:"img/catalogo/palha-para-cigarro.webp", sub:"Pacote com 5 maços",
 descricao:"Palha selecionada, já cortada no tamanho certo para enrolar."},

{cat:"palha", marca:"Tabacaria Ceará", nome:"Fumo de corda", preco:"18,00",
 imagem:"img/catalogo/fumo-de-corda.webp", sub:"Vendido por metro",
 descricao:"Fumo de corda curado, cortado na hora no tamanho que você quiser."},

{cat:"palha", marca:"Tabacaria Ceará", nome:"Fumo picado", preco:"20,00",
 imagem:"img/catalogo/fumo-picado.webp", sub:"Pacote com 12 g",
 descricao:"Fumo picado fino, pronto para enrolar na seda ou na palha."},

/* ---------- SEDAS E FILTROS ---------- */
{cat:"seda", marca:"King", nome:"Seda King Size", preco:"10,00",
 imagem:"img/catalogo/seda-king-size.webp", sub:"Display com 50 livretos", novo:true,
 descricao:"Seda longa de queima lenta, display fechado para quem compra em quantidade."},

{cat:"seda", marca:"OCB", nome:"Seda OCB Slim", preco:"9,00",
 imagem:"img/catalogo/seda-ocb-slim.webp", sub:"Livreto com 32 folhas",
 descricao:"Papel de fibras orgânicas, sem cloro e sem sabor residual."},

{cat:"seda", marca:"Smoking", nome:"Seda Smoking Brown", preco:"7,00",
 imagem:"img/catalogo/seda-smoking-brown.webp", sub:"Livreto com 50 folhas · 1 1/4",
 descricao:"A clássica marrom não branqueada, tamanho curto do dia a dia."},

{cat:"seda", marca:"Filtros", nome:"Piteira de papel", preco:"8,00",
 imagem:"img/catalogo/piteira-de-papel.webp", sub:"Display com 24 livretos",
 descricao:"Piteira de papelão pré-cortada, fácil de enrolar."},

{cat:"seda", marca:"Filtros", nome:"Piteira de vidro", preco:"22,00",
 imagem:"img/catalogo/piteira-de-vidro.webp", sub:"Unidade · vidro reutilizável",
 descricao:"Piteira de vidro lavável, não altera o sabor e dura muito mais."},

/* ---------- RAPÉ ---------- */
{cat:"rape", marca:"Zero Grau", nome:"Rapé Pura Menta", preco:"35,00",
 imagem:"img/catalogo/rape-pura-menta.webp", sub:"Lata com 10 g", destaque:true,
 descricao:"Rapé de menta, o mais procurado da casa. Lata lacrada de 10 g."},

{cat:"rape", marca:"Xingu", nome:"Rapé Alecrim", preco:"32,00",
 imagem:"img/catalogo/rape-alecrim.webp", sub:"Lata com 10 g",
 descricao:"Rapé artesanal de alecrim, aroma leve e marcante."},

{cat:"rape", marca:"Sortidos", nome:"Kit de rapés", preco:"90,00", de:"105,00",
 imagem:"img/catalogo/kit-de-rapes.webp", sub:"6 latas de 10 g",
 descricao:"Seis sabores sortidos da casa. Leve o kit e pague menos."},

{cat:"rape", marca:"Aplicadores", nome:"Kuripe de bambu", preco:"25,00",
 imagem:"img/catalogo/kuripe-de-bambu.webp", sub:"Aplicador individual",
 descricao:"Aplicador em V, artesanal em bambu, para uso próprio."},

{cat:"rape", marca:"Aplicadores", nome:"Tepi de bambu", preco:"40,00",
 imagem:"img/catalogo/tepi-de-bambu.webp", sub:"Aplicador para dois",
 descricao:"Aplicador longo em bambu, usado entre duas pessoas."},

/* ---------- NARGUILÉ ---------- */
{cat:"narguile", marca:"Narguilé", nome:"Narguilé completo", preco:"320,00", de:"380,00",
 imagem:"img/catalogo/narguile-completo.webp", sub:"Vaso, stem, rosh e mangueira", destaque:true,
 descricao:"Aparelho completo, pronto para montar. Vaso de vidro e stem em alumínio."},

{cat:"narguile", marca:"Zomo", nome:"Essência para narguilé", preco:"25,00",
 imagem:"img/catalogo/essencia-para-narguile.webp", sub:"Pote com 50 g", novo:true,
 descricao:"Essência de melaço. Escolha o sabor na hora do pedido.",
 sabores:["Hortelã","Uva","Melancia","Maracujá","Blueberry"]},

{cat:"narguile", marca:"Carvão", nome:"Carvão de coco", preco:"30,00",
 imagem:"img/catalogo/carvao-de-coco.webp", sub:"Caixa com 1 kg",
 descricao:"Carvão prensado de casca de coco: acende rápido, dura mais e não solta cheiro."},

{cat:"narguile", marca:"Peças", nome:"Rosh de barro", preco:"35,00",
 imagem:"img/catalogo/rosh-de-barro.webp", sub:"Queimador tradicional",
 descricao:"Rosh de barro curado, segura melhor o calor e rende mais sessão."},

{cat:"narguile", marca:"Peças", nome:"Mangueira com piteira", preco:"45,00",
 imagem:"img/catalogo/mangueira-com-piteira.webp", sub:"Silicone lavável · 1,5 m",
 descricao:"Mangueira de silicone com piteira de alumínio, fácil de lavar."},

/* ---------- ACESSÓRIOS ---------- */
{cat:"acessorio", marca:"Isqueiros", nome:"Isqueiro recarregável", preco:"12,00",
 imagem:"img/catalogo/isqueiro-recarregavel.webp", sub:"Unidade · cores sortidas",
 descricao:"Isqueiro recarregável de bolso, o mais vendido do balcão."},

{cat:"acessorio", marca:"Isqueiros", nome:"Maçarico", preco:"48,00",
 imagem:"img/catalogo/macarico.webp", sub:"Chama regulável",
 descricao:"Maçarico de chama regulável, ideal para acender carvão."},

{cat:"acessorio", marca:"Acessórios", nome:"Dichavador de metal", preco:"35,00",
 imagem:"img/catalogo/dichavador-de-metal.webp", sub:"4 partes · com coletor",
 descricao:"Dichavador de alumínio com quatro partes, dentes afiados e coletor."},

{cat:"acessorio", marca:"Acessórios", nome:"Cinzeiro de vidro", preco:"18,00",
 imagem:"img/catalogo/cinzeiro-de-vidro.webp", sub:"Unidade · cores sortidas",
 descricao:"Cinzeiro de vidro grosso, pesado e fácil de lavar."},

{cat:"acessorio", marca:"Acessórios", nome:"Estojo de couro", preco:"25,00",
 imagem:"img/catalogo/estojo-de-couro.webp", sub:"Porta-seda, piteira e isqueiro",
 descricao:"Estojo compacto que leva seda, piteira, isqueiro e fumo em um lugar só."}

];
