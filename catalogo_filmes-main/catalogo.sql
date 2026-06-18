create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table jogos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;
select * from series;
select * from jogos;

insert into filmes (titulo, imagem, descricao)
values
("Vingadores", "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg", "Os maiores heróis da terra unidos"),
("Meu amigo Totoro", "https://static.wikia.nocookie.net/dublagem/images/f/f6/Meu_Amigo_Totoro.jpg/revision/latest?cb=20241127000905&path-prefix=pt-br", "Uma jornada de inocência e magia"),
("Homem Aranha", "https://upload.wikimedia.org/wikipedia/pt/5/53/The_Amazing_Spider-Man_Poster.jpg", "O amigo da visinhança"),
("Super Mario Bros", "https://www.universalpics.com.br/tl_files/content/movies/super_mario_bros/posters/01.jpg", "Os irmãos encanadores Mario e Luigi"),
("Pokémon: Mewtwo contra-ataca", "https://play-lh.googleusercontent.com/piOEZWvgVx8-xj3K8uwdpVZ_ttnicstSKDnKrRxnLLOKEIGiHjmYqZxCsjnGj85Uu0cQmRHRgz4StOUzAiA", "O primeiro filme de pokémon remasterizado em CGI"),
("Ponyo", "https://m.media-amazon.com/images/M/MV5BMTkwYjBhOWItOWM1ZC00N2MyLTg2ZGQtNWYxNjE3ZDk4YmQ1XkEyXkFqcGc@._V1_.jpg", "Uma Amizade que Veio do Mar");

insert into series (titulo, imagem, descricao)
values
("Rick and Morty", "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg", "as aventuras de Rick and Morty"),
("Castlevania", "https://images.justwatch.com/poster/10389423/s718/temporada-1.jpg", "Trevor Belmont, Allucard e Sypha Belnades versus Drácula"),
("Devil May Cry", "https://m.media-amazon.com/images/M/MV5BMWZiMTVmMjEtYjQ4MS00YzE4LThmMGYtYTE3ZjhhZmQ2NmMwXkEyXkFqcGc@._V1_.jpg", "Dante, um caçador de demônios meio-humano e meio-demônio"),
("Dorohedoro", "https://m.media-amazon.com/images/M/MV5BYzE2M2I0ZmYtYjMxYS00NzYzLWEzNmEtZjQ4ODhmMDNmN2MyXkEyXkFqcGc@._V1_.jpg", "Caiman, um homem com cabeça de réptil"),
("Black Mirror", "https://m.media-amazon.com/images/I/81UcD17TMrL._AC_UF1000,1000_QL80_.jpg", "sombrio da tecnologia, da sociedade e da natureza humana"),
("Love, Death and Robots", "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d558cd118213987.608594403b8ed.jpg", "mistura ficção científica, terror, comédia e fantasia");

insert into jogos (titulo, imagem, descricao)
values
("Ultrakill", "https://i.pinimg.com/736x/c1/0f/03/c10f03d9bddcb0948ec5c7d147877864.jpg", "um FPS frenético, ultraviolento e retrô que mistura a velocidade de jogos clássicos como Quake e Doom com o sistema de pontuação e combos de hack-and-slash"),
("Friday Night Funkin'", "https://play-lh.googleusercontent.com/eH7CbOlUv_4ysRxicJbncfdfK3nsA_YtIpu8cvPRi2rRvXAQOLwXhoNybAwHptYIpbY", "Jogo de ritmo"),
("Hollow Night", "https://i.pinimg.com/736x/31/2f/30/312f3058eabeffcd4da12fc063074b01.jpg", "O cavaleiro das sombras"),
("Undertale", "https://i.pinimg.com/736x/6e/ab/8e/6eab8e3543fe3668d2068e36562e97d3.jpg", "Escolha uma rota, e veja seu final"),
("Zelda: Majora's Mask", "https://i.pinimg.com/736x/48/cd/56/48cd5647144c11976ab93435ad749c3d.jpg", "Colete as mascaras e lute contra Majora"),
("Castlevania", "https://i.pinimg.com/736x/69/16/aa/6916aa77380a499dc7888b2ffedfb265.jpg", "jogo antigo e maneiro");

