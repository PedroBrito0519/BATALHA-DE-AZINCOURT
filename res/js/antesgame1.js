let dialogueIndex = 0;
const dialogues = [
    { text: "Tudo começou ha seculos atras", background: "res/css/castelo.gif" },
    { text: "Esta paisagem e belissima ne?", background: "res/css/castelo.gif" },
    { text: "Mas...", background: "castelo.gif" },
    { text: "Em 1100, o reino da Inglaterra estava em conflito com a França.", background: "res/css/castelo3.gif" },
    { text: "As tensões aumentaram devido a disputas territoriais e dinásticas.", background: "res/css/castelo2.gif" },
    { text: "As terras e o reino estava dividido entre os franceses e ingleses.", background: "res/css/castelo2.gif" },
    { text: "Em 1135 A morte do rei Henrique I levou a uma crise de sucessão.", background: "res/css/castelo2.gif" },
    { text: "E por fim uma tragica batalha havia começado", background: "res/css/guerra2.jpg" },
    { text: "A guerra culminou na famosa Batalha de Azincourt.", background: "res/css/guerra2.jpg" },
    { text: "Sua principal arma era um Arco de ponta longa", background: "res/css/guerra1.jpg" },
];

function nextDialogue() {
    if (dialogueIndex < dialogues.length) {
        const currentDialogue = dialogues[dialogueIndex];

        // Atualiza o texto
        document.getElementById("dialogueInput").value = currentDialogue.text;

        // Atualiza o fundo da container_modal
        document.querySelector('.container_modal').style.backgroundImage = `url(${currentDialogue.background})`;

        dialogueIndex++;
    } else {
        window.location.href = 'game1.html'; // Redireciona para a próxima página
    }
}
