const storyTextElement = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const sceneImage = document.getElementById('scene-image');

// Estrutura das cenas com texto, imagem e opções
const scenes = {
    start: {
        text: "Você está nas praias ensolaradas do Rio de Janeiro. O som das ondas acalma seus pensamentos, mas um pressentimento estranho surge. Ao olhar para o horizonte, você vê uma trilha que leva para o coração da Floresta da Tijuca. Ao mesmo tempo, ouve a movimentação animada da cidade. Qual caminho você escolherá?",
        image: "images/rio_praia.jpg",
        choices: [
            { text: "Explorar a floresta", nextScene: "floresta" },
            { text: "Visitar o centro da cidade", nextScene: "cidade" }
        ]
    },
    floresta: {
        text: "A densa Floresta da Tijuca envolve você em uma atmosfera de mistério. O som das folhas sendo movidas pelo vento ecoa pelos caminhos. De repente, à sua frente, um grupo de criaturas fantásticas aparece, entre elas, seres que parecem saídos de lendas antigas. Um deles, uma criatura imponente com olhos brilhantes, avança lentamente. O que você faz?",
        image: "images/floresta.jpg",
        choices: [
            { text: "Fugir pela trilha oculta", nextScene: "fuga" },
            { text: "Enfrentar as criaturas com coragem", nextScene: "luta" }
        ]
    },
    cidade: {
        text: "O centro da cidade está vibrante como sempre. As ruas são uma mistura de cultura moderna e traços antigos da história do Brasil. Ao caminhar pelas calçadas, você se depara com uma construção que parece não pertencer ao nosso mundo: um grande portal mágico, com runas brilhando ao redor. O que você fará?",
        image: "images/cidade_portal.jpg",
        choices: [
            { text: "Entrar no portal", nextScene: "portal" },
            { text: "Explorar a cidade", nextScene: "continuar" }
        ]
    },
    fuga: {
        text: "Você corre pela trilha oculta e, após algum tempo, encontra uma caverna onde há um antigo tesouro. Fim da aventura!",
        image: "images/caverna.jpg",
        choices: [
            { text: "Recomeçar sua aventura", nextScene: "start" }
        ]
    },
    luta: {
        text: "Você enfrenta as criaturas com coragem e se torna o herói da floresta. Fim da aventura!",
        image: "images/heroi.jpg",
        choices: [
            { text: "Recomeçar sua aventura", nextScene: "start" }
        ]
    },
    portal: {
        text: "Você atravessa o portal e se encontra em um mundo fantástico. Fim da aventura!",
        image: "images/portal.jpg",
        choices: [
            { text: "Recomeçar sua aventura", nextScene: "start" }
        ]
    },
    continuar: {
        text: "Você continua explorando a cidade e descobre um segredo antigo. Fim da aventura!",
        image: "images/cidade_segredo.jpg",
        choices: [
            { text: "Recomeçar sua aventura", nextScene: "start" }
        ]
    }
};

// Função para carregar uma cena
function loadScene(sceneKey) {
    const scene = scenes[sceneKey];

    if (!scene) {
        console.error(`Cena não encontrada: ${sceneKey}`);
        return;
    }

    storyTextElement.textContent = scene.text;
    sceneImage.src = scene.image;

    // Limpar as opções anteriores
    choicesContainer.innerHTML = '';

    // Criar botões para cada escolha
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => loadScene(choice.nextScene));
        choicesContainer.appendChild(button);
    });
}

// Carregar a cena inicial
loadScene('start');
