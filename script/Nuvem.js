import Parallax from "./Parallax.js";
import Spritesheet from "./Spritesheet.js"

export default class Nuvem extends Parallax{

    constructor(x, y, percentualTamanho) {

    super(x,y, 234, 151, percentualTamanho, 100)
    
    }

    draw(ctx) {
        Spritesheet.draw(ctx, 'nuvem.png', this.x, this.y, this.largura, this.altura);
    }

}