class Input {

    constructor(){
        this.teclasPressionadas = new Set();
        
       
    }

    indoDireita(){
        return this.teclasPressionadas.has("d") || this.teclasPressionadas.has("ArrowRight");
    }
    indoEsquerda() {
        return this.teclasPressionadas.has("a") || this.teclasPressionadas.has("ArrowLeft");
    }
    indoCima() {
        return this.teclasPressionadas.has("w") || this.teclasPressionadas.has("ArrowUp");
    }
    indoBaixo() {
        return this.teclasPressionadas.has("s") || this.teclasPressionadas.has("ArrowDown");
    }

    registraEvento(){

        document.addEventListener('keydown', (tecla) => {
            this.teclasPressionadas.add(tecla.key);
        });

        document.addEventListener('keyup', (tecla) => {
            this.teclasPressionadas.delete(tecla.key);
        });
    }
    
}

const instance = new Input();
export default instance;