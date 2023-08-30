// const nomeProduto = "Casaco Cinza";
// const marca = "Zara";
// const preco = 80;
// const nomeArquivoImagem = "prod1.jpg";

const catalogo = [
  {
    id: 1,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'prod1.jpg'
  },
  {
    id: 2,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod2.jpg'
  },
  {
    id: 3,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod3.jpg'
  },
  {
    id: 4,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod4.jpg'
  },
  {
    id: 5,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod5.jpg'
  },
  {
    id: 6,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod6.jpg'
  },
  {
    id: 7,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod7.jpg'
  },
  {
    id: 8,
    nome: 'Casaco Cinza',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'prod8.jpg'
  }

];

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div id="card-produto1">
<img src="./imgs/${produtoCatalogo.nomeArquivoImagem}" alt="Produto 1" style="height: 300px;">
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div> `

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}



