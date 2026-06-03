const notFineBtn = document.getElementById("notFineBtn");
const fineBtn = document.getElementById("fineBtn");

notFineBtn.addEventListener("mouseover", () => {

    const maxX = 300;
    const maxY = 150;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    notFineBtn.style.left = randomX + "px";
    notFineBtn.style.top = randomY + "px";
});

fineBtn.addEventListener("click", () => {
    alert("Great! Glad to hear you're fine 😊");
});