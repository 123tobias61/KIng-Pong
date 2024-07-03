let xBola = 50;
let yBola = 200;
let velocidadeX = 6;
let velocidadeY = 5;
let diametro = 20;
let raio = diametro / 2;
let pontos1 = 0;
let pontos2 = 0;
let win = "A vitória foi para o jogador 1";
let win2 = "A vitória foi para o jogador 2";

// VARIAVEIS DA RAQUETE
let larguraRaq = 10;
let alturaRaq = 80;
let xRaq1 = 15;
let yRaq1 = 200 - alturaRaq / 2;

let xRaq2 = 775;
let yRaq2 = 200 - alturaRaq / 2;

function preload() {
    trilha = loadSound("ultra-instinct-made-with-Voicemod.mp3");
    ponto = loadSound("kratos-que-dia-mais-lindo-made-with-voicemod_DL8oWNDj.mp3");
    raquetada = loadSound("explosion-42132.mp3");
    zawarudo = loadSound("za warudo.mp3")
}

function setup() {
    trilha.loop();
    trilha.setVolume(0.6);
    ponto.setVolume(0.6);
    raquetada.setVolume(1.5);
    createCanvas(800, 400);
}

function draw() {
    fill("255, 255, 255");
    background(90, 90, 132);
    rect(400, 0, 10, 400);
    rect(1, 0, 10, 400);
    rect(790, 0, 10, 400);
    rect(1, 1, 800, 10);
    rect(1, 390, 800, 10);
    movimentaBolinha();
    fill("red");
    rect(xRaq1, yRaq1, larguraRaq, alturaRaq);
    fill("black");
    rect(xRaq2, yRaq2, larguraRaq, alturaRaq);

    textAlign(CENTER);
    fill(245, 87, 53);
    rect(200, 20, 50);
    textSize(28);
    fill(0);
    text(pontos1, 225, 55);

    textAlign(CENTER);
    fill(245, 87, 53);
    rect(600, 20, 50);
    textSize(28);
    fill(0);
    text(pontos2, 625, 55);

    // Movimento das raquetes com restrição para não sair da tela
    if (keyIsDown(87) && yRaq1 > 0) {
        yRaq1 -= 5;
    }
    if (keyIsDown(83) && yRaq1 < height - alturaRaq) {
        yRaq1 += 5;
    }
    if (keyIsDown(UP_ARROW) && yRaq2 > 0) {
        yRaq2 -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && yRaq2 < height - alturaRaq) {
        yRaq2 += 5;
    }

    colisao = collideRectCircle(xRaq2, yRaq2, larguraRaq, alturaRaq, xBola, yBola, diametro);
    if (colisao == true) {
        raquetada.play();
        velocidadeX = velocidadeX * -1;
    }
}

function movimentaBolinha() {
    fill("orange");
    circle(xBola, yBola, diametro);
    xBola = xBola + velocidadeX;
    yBola = yBola + velocidadeY;

    if (xBola + raio >= 800 || xBola - raio <= 0) {
        velocidadeX = velocidadeX * -1;
    }
    if (yBola + raio >= 400 || yBola - raio <= 0) {
        velocidadeY = velocidadeY * -1;
    }

    if (xBola - raio < xRaq1 + larguraRaq) {
        if (yBola + raio > yRaq1 && yBola - raio < yRaq1 + alturaRaq) {
            velocidadeX = velocidadeX * -1;
            raquetada.play();
        }
    }
  
  /*POnTOS*/
    if (xBola + raio > 800) {
        ponto.play();
        pontos1 += 1;
        console.log(pontos1 + "x" + pontos2);
        xBola = 30;
        yBola = yRaq1 + alturaRaq/2;
        velocidadeX = velocidadeX * -1;
    }

    if (xBola - raio < 0) {
        ponto.play();
        pontos2 += 1;
        console.log(pontos1 + "x" + pontos2);
        xBola = 750;
        yBola = yRaq2 + alturaRaq/2;
        velocidadeX = velocidadeX * -1;
    }
  
    if (pontos1  >= 7){
     
      
      textAlign(CENTER);
      fill(245, 87, 53);
      rect(600, 165, 50, 0, 555, 444);
      background("rgb(111,109,109)")
      fill("255, 255, 255");
      rect(400, 0, 10, 400);
      rect(1, 0, 10, 400);
      rect(790, 0, 10, 400);
      rect(1, 1, 800, 10);
      rect(1, 390, 800, 10);
      textSize(58);
      fill(0);
      text(win, 400, 200);
      velocidadeX = 0;
      velocidadeY = 0;
      xBola = 420;
      yBola = 550;
      yRaq1 = 550;
      yRaq2 = 550
      trilha.pause()
      zawarudo.play()
     
    }
  
   if (pontos2  >= 7){
     
      textAlign(CENTER);
      fill(245, 87, 53);
      rect(600, 165, 50, 0, 555, 444);
      background("rgb(134,132,132)");
      fill("210,209,209");
      rect(400, 0, 10, 400);
      rect(1, 0, 10, 400);
      rect(790, 0, 10, 400);
      rect(1, 1, 800, 10);
      rect(1, 390, 800, 10);
      textSize(58);
      fill(0);
      text(win2, 400, 200);
      velocidadeX = 0;
      velocidadeY = 0;
      xBola = 420;
      yBola = 550;
      yRaq1 = 550;
      yRaq2 = 550;
      trilha.pause()
      zawarudo.play()
      rect(230, 0, 10, 230);
    }
  
  if (pontos1 >= 4 || pontos2 >= 4){
    alturaRaq = 60
    velocidadeX += 0.1;
    velocidadeY += 0.1;
  }
}

    


  
