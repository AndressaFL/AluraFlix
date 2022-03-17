/* ======= filmes ========*/

var filmes = [
  "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
  "http://www.cinesystem.com.br/filmes/images/poster/homem-aranha-sem-volta-para-casa.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg",
  "https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000"
];

var listaNomeFilme = [
  "Harry Potter",
  "Spider Man",
  "Shrek",
  "Avatar",
  "A cabana"
];

var tamanhoFilmes = filmes.length;

for (var i = 0; i < tamanhoFilmes; i++) {
  var imagesFilme = document.getElementById("listaFilme");
  var foto = "<div class='filme'><img  src=" + filmes[i] + " class='images' />";
  var nome = "<label>" + listaNomeFilme[i] + "</label></div>";
  imagesFilme.innerHTML = imagesFilme.innerHTML + foto + nome;
}

/*=====séries======*/

var series = [
  "https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg",
  "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/01/19/735240336-dead61e84711f0889.jpeg",
  "http://bancodeseries.tv.br/images/posters/2661.jpg",
  "https://br.web.img3.acsta.net/pictures/19/01/03/10/55/2296345.jpg",
  "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg"
];

var listaNomeSerie = [
  "La Casa de Papel",
  "The Walking Dead",
  "Lost",
  "Sex Education",
  "Stranger Things"
];

var tamanhoSerie = series.length;

for (var i = 0; i < tamanhoSerie; i++) {
  var imagesSerie = document.getElementById("listaSerie");
  var foto = "<div class='serie'><img  src=" + series[i] + " class='images'>";
  var nome = "<label>" + listaNomeSerie[i] + "</label></div>";
  imagesSerie.innerHTML = imagesSerie.innerHTML + foto + nome;
}

/*===== adicionar link ======*/

function add(s) {
  var link = document.getElementById("link").value; //pega o link digitado no input
  var entradaNome = document.getElementById("entradaNome").value;

  if (link.endsWith(".jpg")) {
    //condição para validar a img
    switch (s) {
      case 1: //caso clique no botão filmes
        var foto =
          "<div class='filme'><img  src=" + link + " class='images' />";
        var nome = "<label>" + entradaNome + "</label></div>";
        imagesFilme.innerHTML = imagesFilme.innerHTML + foto + nome;
        break;

      case 2: //caso clique no botão series
        var foto = "<div class='serie'><img  src=" + link + " class='images'>";
        var nome = "<label>" + entradaNome + "</label></div>";
        imagesSerie.innerHTML = imagesSerie.innerHTML + foto + nome;
    }
  } else {
    alert("[ERRO] Insira um link válido!");
  }
  document.getElementById("link").value = "";
}

