/* =========================
   INTRO
========================= */

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", function () {

    intro.classList.add("hide");

    setTimeout(function () {

        mainContent.classList.add("visible");

    }, 500);

});


/* =========================
   ENVELOPE
========================= */

const envelopeContainer =
    document.getElementById("envelope");

const envelope =
    envelopeContainer.querySelector(".envelope");


envelopeContainer.addEventListener("click", function () {

    envelope.classList.toggle("open");

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".love-content, .memory-card, .final-content"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   CLICK HEARTS
========================= */

document.addEventListener("click", function (event) {

    if (
        event.target.closest("button") ||
        event.target.closest(".envelope-container")
    ) {
        return;
    }


    const heart =
        document.createElement("span");


    heart.innerHTML = "♥";


    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "99999";

    heart.style.fontSize =
        Math.random() * 10 + 15 + "px";

    heart.style.color =
        "#ef91a6";

    heart.style.animation =
        "heartClick 1.2s ease forwards";


    document.body.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 1200);

});


/* =========================
   HEART ANIMATION
========================= */

const heartStyle =
    document.createElement("style");


heartStyle.innerHTML = `

@keyframes heartClick {

    0% {

        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(0.5);

    }

    100% {

        opacity: 0;

        transform:
            translate(-50%, -130px)
            scale(1.5);

    }

}

`;


document.head.appendChild(heartStyle);