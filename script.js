const images = [
    "images/sanrio1.jpeg",
    "images/sanrio2.jpeg",
    "images/sanrio3.png",
    "images/sanrio4.jpeg",
    "images/sanrio5.png",
    "images/sanrio6.png",
    "images/sanrio7.png",
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

    // Botão "Sim" fica maior
    yesBtn.style.transform = "scale(1.15)";

    nextImage();
});

// Botão "Sim" mostra mensagem de parabéns
yesBtn.addEventListener("click", () => {
    congratsMessage.classList.remove("hidden");
    buttonsDiv.style.display = "none";
    mainImage.style.display = "none";
    document.body.style.background = "#fff"; // Remove cor de fundo para o gif
    // Exibe o gif ocupando toda a tela
    congratsMessage.innerHTML = `
        <img src="images/yappi.gif" alt="Yappi GIF" style="margin-top:16px;max-width:100%;border-radius:12px;">
    `;
    congratsMessage.style.background = "none";
    congratsMessage.style.padding = "0";
    congratsMessage.style.margin = "0";
    congratsMessage.style.borderRadius = "0";
    congratsMessage.style.boxShadow = "none";
});

// Responsividade: reseta posição do botão "Não" ao redimensionar
window.addEventListener("resize", () => {
    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";
});

const inviteMsgs = [
    "Oi Giovanna! Tudo certo? 👋",
    "Estava pensando...",
    "Você gostaria de assistir Quarteto Fantástico comigo?",
    "Segunda-feira, no Buriti Shopping!",
    "O que acha?"
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
    } else {
        inviteStepDiv.classList.add("hidden");
        finalButtons.classList.remove("hidden");
        nextImage(); // Troca imagem na última mensagem também
    }
});

inviteMsg.textContent = inviteMsgs[0];