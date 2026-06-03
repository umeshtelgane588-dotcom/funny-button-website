const notFineBtn = document.getElementById("notFineBtn");
const fineBtn = document.getElementById("fineBtn");
const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {

    const rect = notFineBtn.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - buttonCenterX,
        e.clientY - buttonCenterY
    );

    if (distance < 120) {

        const padding = 20;

        const maxX =
            container.clientWidth -
            notFineBtn.offsetWidth -
            padding;

        const maxY =
            container.clientHeight -
            notFineBtn.offsetHeight -
            padding;

        const randomX =
            Math.random() * (maxX - padding) +
            padding;

        const randomY =
            Math.random() * (maxY - padding) +
            padding;

        notFineBtn.style.left = randomX + "px";
        notFineBtn.style.top = randomY + "px";
    }
});

fineBtn.addEventListener("click", () => {

    document.body.innerHTML = `
    
    <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:white;
        text-align:center;
        font-family:Arial;
    ">
    
        <h1 style="
            font-size:65px;
            margin-bottom:20px;
        ">
            🎉 I Knew You Were Fine! 🎉
        </h1>

        <h2 style="
            margin-bottom:15px;
        ">
            Thanks for confirming 😎
        </h2>

        <h3>
            Have an amazing day! 🚀
        </h3>

    </div>
    
    `;
});
