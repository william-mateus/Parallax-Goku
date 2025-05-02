import Spritesheet from "./Spritesheet.js";
export default class Parallax {
   
    constructor(x, y, largura, altura,percentualTamanho, velocidade) {
        this.x = x;
        this.y = y;
        this.largura = largura*percentualTamanho;
        this.altura = altura*percentualTamanho;
        this.percentualTamanho = percentualTamanho;
        this.velocidade = velocidade;
    }

    draw(ctx) {

    }
    
    update(deltaTime) {
        this.x -= deltaTime *  this.percentualTamanho*this.velocidade;

        // Reinicia posição quando sair da tela
        if (this.x + this.largura < 0) { 
            this.x = canvas.width;
        }
    }
}