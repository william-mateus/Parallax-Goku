import Spritesheet from "./Spritesheet.js";
export default class Montanha {

    constructor(x, y, largura, altura, velocidade) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade;
    }

    draw(ctx) {
        Spritesheet.draw(ctx, 'montanha1.png', this.x, this.y, this.largura, this.altura);
    }


    update() {
        this.x -= this.velocidade;

        // Reinicia posição quando sair da tela
        if (this.x + this.largura < 0) {
            this.x = canvas.width;
        }
    }
}