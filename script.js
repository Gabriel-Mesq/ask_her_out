const images = [
    "images/sanrio1.jpeg",
    "images/sanrio2.jpeg",
    "images/sanrio3.PNG",
    "images/sanrio4.jpeg",
    "images/sanrio5.PNG",
    "images/sanrio6.PNG",
    "images/sanrio7.PNG",
];

let currentImage = 0;

const mainImage = document.getElementById("main-image");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const congratsMessage = document.getElementById("congrats-message");
const buttonsDiv = document.querySelector(".buttons");

// Troca a imagem ao clicar em qualquer botão
function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    mainImage.src = images[currentImage];
}

let yesScale = 1.0; // Escala inicial do botão "Sim"

// Botão "Não" se move para posição aleatória
noBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    // Tamanho do botão
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Margem para não sair da tela
    const maxLeft = containerRect.width - btnWidth - 10;
    const maxTop = containerRect.height - btnHeight - 10;

    // Posição aleatória
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;

    // Botão "Sim" cresce a cada clique em "Não"
    yesScale += 0.10;
    yesBtn.style.transform = `scale(${yesScale})`;

    nextImage();
});

// Botão "Sim" mostra mensagem de parabéns
yesBtn.addEventListener("click", () => {
    // Remove tudo da tela e mostra só o gif grande
    document.body.style.background = "#fff";
    document.querySelector('.container').style.display = "none";
    // Cria um elemento para o gif ocupando toda a tela
    const fullGif = document.createElement("div");
    fullGif.style.position = "fixed";
    fullGif.style.top = "0";
    fullGif.style.left = "0";
    fullGif.style.width = "100vw";
    fullGif.style.height = "100vh";
    fullGif.style.background = "#fff";
    fullGif.style.display = "flex";
    fullGif.style.justifyContent = "center";
    fullGif.style.alignItems = "center";
    fullGif.style.zIndex = "9999";
    fullGif.innerHTML = `
        <img src="images/yappi.gif" 
             alt="Yappi GIF" 
             style="width:100vw;max-width:100vw;height:100vh;max-height:100vh;object-fit:cover;">
    `;
    document.body.appendChild(fullGif);
});

// Responsividade: reseta posição do botão "Não" ao redimensionar
window.addEventListener("resize", () => {
    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";
});

const inviteMsgs = [
    "Oi Giovanna! Tudo certo? 👋",
    "Você gostaria de assistir Quarteto Fantástico comigo?",
    "Segunda-feira, no Buriti Shopping!",
    "Garanto que vai ser divertido 😄",
    "Aceita?!"
];

let inviteStep = 0;
const inviteMsg = document.getElementById("invite-msg");
const nextMsgBtn = document.getElementById("next-msg-btn");
const inviteStepDiv = document.getElementById("invite-step");
const finalButtons = document.getElementById("final-buttons");

// Avança mensagem ao clicar em "Próximo" e troca imagem
nextMsgBtn.addEventListener("click", () => {
    inviteStep++;
    if (inviteStep < inviteMsgs.length) {
        inviteMsg.textContent = inviteMsgs[inviteStep];
        nextImage(); // Troca imagem a cada clique em "Próximo"
        // Quando chegar na última mensagem, mostra os botões Sim/Não
        if (inviteStep === inviteMsgs.length - 1) {
            nextMsgBtn.classList.add("hidden");
            finalButtons.classList.remove("hidden");
        }
    } else {
        // Não faz nada, já está na última mensagem
    }
});

inviteMsg.textContent = inviteMsgs[0];
finalButtons.classList.add("hidden"); // Garante que começa escondido