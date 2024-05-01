//código do carro

let xCarros = [620, 620, 620, 620, 620,620];
let yCarros = [43, 100, 150,210, 270, 318]; 
let velocidadeCarros = [2.5, 2.8, 3.5, 5, 3.3, 2.4];
let comprimentoCarro = 50;
let alturaCarro = 30;

 
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
   for (let i = 0; i < imagemCarros.length; i ++){
  xCarros[i] -= velocidadeCarros[i];
   }
}

function voltaPossicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }  
  }
}

function passouTodaTela(xCarros){
 return xCarros < - 50;
  
}
