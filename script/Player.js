import Spritesheet from "./Spritesheet.js";
import Input from "./Input.js";
export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocidade = 300; // pixels por segundo
    }

    // Desenha o jogador
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(-Math.pow(this.y/ ctx.canvas.height,0.5),Math.pow(this.y/ ctx.canvas.height,0.5))
        Spritesheet.draw(ctx, 'goku.png', 0, 0,334,207);
        ctx.restore();
    }

    update(deltaTime) {
        // movimentação
        if (Input.indoDireita()) {
            this.x += this.velocidade * deltaTime;
        } else if (Input.indoEsquerda()) {
            this.x -= this.velocidade * deltaTime;
        } else if (Input.indoCima()) {
            this.y -= this.velocidade * deltaTime;
        } else if (Input.indoBaixo()) {
            this.y += this.velocidade * deltaTime;
        }

    }

}