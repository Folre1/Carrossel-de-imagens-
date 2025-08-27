let imgs = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];
let descricoes = [
    "Uma vasta planície verde se estende à frente, com colinas suaves e árvores dispersas, enquanto o vento sussurra entre a grama, criando um cenário tranquilo e misterioso.",
    "Gaius, o Cavaleiro de pedra, se ergue imponente na planície silenciosa. Sua enorme espada reflete a luz do sol enquanto cada passo ecoa pelo terreno, desafiando o jogador a escalar suas pernas e encontrar seu ponto fraco para derrotá-lo.",
    "No coração de uma planície desolada, Valus desperta. O gigante colossal ergue seu enorme porrete, fazendo o chão tremer a cada passo, enquanto o jogador precisa escalar suas pernas de pedra e atacar seus pontos fracos com coragem e precisão.",
    "Gaius, o Cavaleiro de pedra, se move com força e imponência pela planície. Sua espada colossal corta o ar, e cada passo ecoa pelo terreno. O jogador precisa escalar suas pernas maciças, evitar seus golpes devastadores e atacar seu ponto fraco com coragem e precisão.",
    "O colosso de aparência robusta e barba espessa se ergue imponente, lembrando uma figura lendária. Seus passos pesados fazem o chão tremer, enquanto o jogador precisa analisar cada movimento e escalar com cuidado para encontrar seu ponto fraco."
];

let contador = 0;

function mostrarImagem(i) {
    contador = i;
    document.getElementById("img").src = imgs[contador];
    document.getElementById("descricao").innerText = descricoes[contador];
}

document.getElementById("back").addEventListener("click", () => {
    contador--;
    if (contador < 0) {
        contador = imgs.length - 1;
    }
    mostrarImagem(contador);
});

document.getElementById("go").addEventListener("click", () => {
    contador++;
    if (contador >= imgs.length) {
        contador = 0;
    }
    mostrarImagem(contador);
});

document.getElementById("b1").addEventListener("click", () => mostrarImagem(0));
document.getElementById("b2").addEventListener("click", () => mostrarImagem(1));
document.getElementById("b3").addEventListener("click", () => mostrarImagem(2));
document.getElementById("b4").addEventListener("click", () => mostrarImagem(3));
document.getElementById("b5").addEventListener("click", () => mostrarImagem(4));

mostrarImagem(0);
