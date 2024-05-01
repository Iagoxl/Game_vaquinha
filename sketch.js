function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro(); 
  movimentaCarro();
  movimentaAtor();
  voltaPossicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}
