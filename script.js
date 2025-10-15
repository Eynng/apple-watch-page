// const imagemVisualizacao = document.getElementById('visualizacao');
const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("#opcoes-produto h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

// console.log(imagemMiniatura0)

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];
// console.log(opcoesTamanho[0])

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;
// console.log(imagemVisualizacao)

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0); // 0, 1, 2, 3, 4

  numCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numCorSelecionada];

  console.log(nomeCor);
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0); // 0 ou 1 - 41 mm ou 45mm

  numTamanhoSelecionado = opcaoTamanhoSelecionado;

  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  console.log(tamanhoCaixa);

  //   console.log(opcaoTamanhoSelecionado)

  tituloProduto.innerText =
    "Pulseira loop esportiva azul-inverno para caixa de " + tamanhoCaixa;

  if (tamanhoCaixa === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  //   console.log(opcaoImagemSelecionada);

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}

// atualizarImagemSelecionada();
