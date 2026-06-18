const filmes = [{
    titulo: "Vingadores",
    imagem: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg",
    descricao: "Os maiores heróis da terra unidos",
},
{
    titulo: "Meu amigo Totoro",
    imagem: "https://static.wikia.nocookie.net/dublagem/images/f/f6/Meu_Amigo_Totoro.jpg/revision/latest?cb=20241127000905&path-prefix=pt-br",
    descricao: "Uma jornada de inocência e magia",
},
{
    titulo: "Homem Aranha",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/53/The_Amazing_Spider-Man_Poster.jpg",
    descricao: "O amigo da visinhança",
},
{
    titulo: "Super Mario Bros",
    imagem: "https://www.universalpics.com.br/tl_files/content/movies/super_mario_bros/posters/01.jpg",
    descricao: "Os irmãos encanadores Mario e Luigi",
},
{
    titulo: "Pokémon: Mewtwo contra-ataca",
    imagem: "https://play-lh.googleusercontent.com/piOEZWvgVx8-xj3K8uwdpVZ_ttnicstSKDnKrRxnLLOKEIGiHjmYqZxCsjnGj85Uu0cQmRHRgz4StOUzAiA",
    descricao: "O primeiro filme de pokémon remasterizado em CGI",
},
{
    titulo: "Ponyo",
    imagem: "https://m.media-amazon.com/images/M/MV5BMTkwYjBhOWItOWM1ZC00N2MyLTg2ZGQtNWYxNjE3ZDk4YmQ1XkEyXkFqcGc@._V1_.jpg",
    descricao: "Uma Amizade que Veio do Mar",
}

]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML
    lista.forEach(filme => {
        listaFilmes.innerHTML += `<div class="col-md-4">
          <div class="card card-filme h-100">
          <img src="${filme.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}