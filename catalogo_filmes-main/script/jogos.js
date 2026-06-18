const jogos = [{
    titulo: "Ultrakill",
    imagem: "https://i.pinimg.com/736x/c1/0f/03/c10f03d9bddcb0948ec5c7d147877864.jpg",
    descricao: "um FPS frenético, ultraviolento e retrô que mistura a velocidade de jogos clássicos como Quake e Doom com o sistema de pontuação e combos de hack-and-slash",
},
{
    titulo: "Friday Night Funkin'",
    imagem: "https://play-lh.googleusercontent.com/eH7CbOlUv_4ysRxicJbncfdfK3nsA_YtIpu8cvPRi2rRvXAQOLwXhoNybAwHptYIpbY",
    descricao: "Jogo de ritmo",
},
{
    titulo: "Hollow Night",
    imagem: "https://i.pinimg.com/736x/31/2f/30/312f3058eabeffcd4da12fc063074b01.jpg",
    descricao: "O cavaleiro das sombras",
},
{
    titulo: "Undertale",
    imagem: "https://i.pinimg.com/736x/6e/ab/8e/6eab8e3543fe3668d2068e36562e97d3.jpg",
    descricao: "Escolha uma rota, e veja seu final",
},
{
    titulo: "Zelda: Majora's Mask",
    imagem: "https://i.pinimg.com/736x/48/cd/56/48cd5647144c11976ab93435ad749c3d.jpg",
    descricao: "Colete as mascaras e lute contra Majora",
},
{
    titulo: "Castlevania",
    imagem: "https://i.pinimg.com/736x/69/16/aa/6916aa77380a499dc7888b2ffedfb265.jpg",
    descricao: "jogo antigo e maneiro",
}

]

const listaJogos = document.getElementById("listaJogos");

function mostrarJogos(lista) {
    listaJogos.innerHTML
    lista.forEach(jogos => {
        listaJogos.innerHTML += `<div class="col-md-4">
          <div class="card card-jogo h-100">
          <img src="${jogos.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${jogos.titulo}</h3>
          <p>${jogos.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${jogos.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarJogos(jogos)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da série",
        icon: "info"
    })
}