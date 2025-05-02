import {Player} from './Player.js';
import Montanha from './Montanha.js';
import Spritesheet from './Spritesheet.js';
import Nuvem from './Nuvem.js';
import Input from './Input.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let ultimoTempo = 0;

// cria o Player
const player = new Player(250, 250);

// controle
Input.registraEvento();

// criando a nuvem
const nuvens = [
    new Nuvem(500, 399, 1), // Nuvem 1
    new Nuvem(600, 380, 2), // Nuvem 2, menor e mais rápida
    new Nuvem(650, 380, 0.8), // Nuvem 3, maior e mais lenta
    new Nuvem(700, 400, 1.5), // Nuvem 4, tamanho médio e velocidade moderada
    new Nuvem(800, 350, 1.2), // Nuvem 5, menor e mais rápida
    new Nuvem(450, 420, 1.1), // Nuvem 6, maior e velocidade média
    new Nuvem(550, 360, 1.7), // Nuvem 7, pequena e muito rápida
    new Nuvem(750, 410, 1), // Nuvem 8, tamanho grande e velocidade lenta
];

const nuvensFundo = [
    new Nuvem(630, 280, 0.5), // Nuvem 13, tamanho médio e velocidade moderada
    new Nuvem(660, 300, 0.4), // Nuvem 14, menor e mais lenta
    new Nuvem(690, 320, 0.3), // Nuvem 15, menor e bem lenta
    new Nuvem(720, 340, 0.2), // Nuvem 16, ainda menor e mais lenta
    new Nuvem(750, 360, 0.1),  // Nuvem 17, a menor e quase estacionária
    new Nuvem(770, 250, 0.4), // Nuvem 18, tamanho médio e velocidade suave
    new Nuvem(800, 270, 0.6), // Nuvem 19, tamanho médio e mais rápida
    new Nuvem(610, 240, 0.7)  // Nuvem 20, maior eNuvem
];

// tentando criar as montanhas FX: resolver bug de herança
const montanha = [
    new Montanha(700, 400, 351, 353, 1.2),
    new Montanha(300, 350, 400, 300, 0.9),
    new Montanha(700, 430, 351, 353, 1.7),
    new Montanha(300, 370, 400, 300, 0.4),

];

// montanhas do fundo
const montanhasFundo = [
    new Montanha(650, 250, 300, 250, 0.3), 
    new Montanha(400, 300, 350, 300, 1.2),
];

// carrega a musica minha solução
// TODO: Lidar com o problema de interação com o usuario e nao depender do navegador para renderizar o arquivo de audio

 //var audioTheme = new Audio('themeAudio.mp3');
 //audioTheme.play(Infinity);


// gradiente azul atual do demonio de gradiente
 
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, '#74C2F5'); // Azul vibrante (céu ensolarado)
gradient.addColorStop(0.7, '#B3DFFA'); // Azul claro suave (transição)
gradient.addColorStop(0.9, '#FFDAB9'); // Laranja pêssego suave
gradient.addColorStop(1, '#FFFFE0'); // Amarelo claro suave

function loop(tempoAtual) {
    
    // Calcula delta time em segundos
    const deltaTime = (tempoAtual - ultimoTempo) / 1000;
    ultimoTempo = tempoAtual;

    // Limpa o canvas
    // Aplica o gradiente ao fundo
    ctx.fillStyle = gradient; // Usa o gradiente definido fora do loop
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // montanhas do fundo
    montanhasFundo.forEach(montanhasFundo=>{
        montanhasFundo.update(deltaTime);
        montanhasFundo.draw(ctx);
    });

    //nuvens do fundo
    nuvensFundo.forEach(nuvensFundo =>{
        nuvensFundo.update(deltaTime)
        nuvensFundo.draw(ctx)
    });

    // Desenha o jogador

    player.update(deltaTime);
    player.draw(ctx);

    // desenhando montanha
    montanha.forEach(montanha => {
        montanha.update(deltaTime)
        montanha.draw(ctx)
    });

    //desenha nuvem da frente
    nuvens.forEach(nuvem => {
        nuvem.update(deltaTime)
        nuvem.draw(ctx)
    });


    // Chama o próximo frame
    requestAnimationFrame(loop);

}

//carrega os sprites
async function setup() {

    await Spritesheet.load();

    // Inicia o loop de animação
    requestAnimationFrame(loop);
}

setup();

