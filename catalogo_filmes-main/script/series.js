const series = [{
    titulo: "Rick and Morty",
    imagem: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
    descricao: "as aventuras de Rick and Morty",
},
{
    titulo: "Castlevania",
    imagem: "https://images.justwatch.com/poster/10389423/s718/temporada-1.jpg",
    descricao: "Trevor Belmont, Allucard e Sypha Belnades versus Drácula",
},
{
    titulo: "Devil May Cry",
    imagem: "https://m.media-amazon.com/images/M/MV5BMWZiMTVmMjEtYjQ4MS00YzE4LThmMGYtYTE3ZjhhZmQ2NmMwXkEyXkFqcGc@._V1_.jpg",
    descricao: "Dante, um caçador de demônios meio-humano e meio-demônio",
},
{
    titulo: "Dorohedoro",
    imagem: "https://m.media-amazon.com/images/M/MV5BYzE2M2I0ZmYtYjMxYS00NzYzLWEzNmEtZjQ4ODhmMDNmN2MyXkEyXkFqcGc@._V1_.jpg",
    descricao: "Caiman, um homem com cabeça de réptil",
},
{
    titulo: "Black Mirror",
    imagem: "https://m.media-amazon.com/images/I/81UcD17TMrL._AC_UF1000,1000_QL80_.jpg",
    descricao: "sombrio da tecnologia, da sociedade e da natureza humana",
},
{
    titulo: "Love, Death and Robots",
    imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d558cd118213987.608594403b8ed.jpg",
    descricao: "mistura ficção científica, terror, comédia e fantasia",
}

]

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML
    lista.forEach(series => {
        listaSeries.innerHTML += `<div class="col-md-4">
          <div class="card card-serie h-100">
          <img src="${series.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${series.titulo}</h3>
          <p>${series.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${series.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da série",
        icon: "info"
    })
}