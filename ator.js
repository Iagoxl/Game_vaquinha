//código do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
  
      xAtor -= 3;
  
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}


function verificaColisao(){
 // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
                     meusPontos -=1;
      }
    }
  }
}

function voltaParaPosicaoInicial(){
  yAtor = 368;
  xAtor = 100;
}

function incluiPontos(){
  fill(255,69,0);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 4, 25);
  }

function marcaPontos() {
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaParaPosicaoInicial();
  }
 }

function pontosMaiorQueZero(){
  return meusPontos > 0
  
}

function podeSeMover(){
  return yAtor < 366;
}
