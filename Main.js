const revealElements = [
    document.getElementById("missionStatement"),
    document.getElementById("goal"),
    document.getElementById("AI"),
    document.getElementById("aiHeading"),
    document.getElementById("skillsHeading"),
    document.getElementById("skillsDescription")
];

function getDocumentTop(element) {
    let top = 0;
    let currentElement = element;

    while (currentElement) {
        top += currentElement.offsetTop;
        currentElement = currentElement.offsetParent;
    }

    return top;
}

function updateScrollReveal() {
    const revealLine = window.scrollY + window.innerHeight * 0.8;

    revealElements.forEach((element) => {
        if (getDocumentTop(element) < revealLine) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", updateScrollReveal, { passive: true });
window.addEventListener("resize", updateScrollReveal);
updateScrollReveal();

const screenshotImage = document.getElementById("sqrpicImage");
const previousScreenshotButton = document.getElementById("sqrpicPrevious");
const nextScreenshotButton = document.getElementById("sqrpicNext");
const screenshots = [
    "SquareUp/s1.png",
    "SquareUp/s2.png",
    "SquareUp/s3.png",
    "SquareUp/s4.png",
    "SquareUp/s5.png",
    "SquareUp/s6.png"
];
let currentScreenshot = 0;

if (screenshotImage && previousScreenshotButton && nextScreenshotButton) {
    function showScreenshot(index) {
        currentScreenshot = (index + screenshots.length) % screenshots.length;
        screenshotImage.src = screenshots[currentScreenshot];
        screenshotImage.alt = `Square Up screenshot ${currentScreenshot + 1} of ${screenshots.length}`;
    }

    previousScreenshotButton.addEventListener("click", () => {
        showScreenshot(currentScreenshot - 1);
    });

    nextScreenshotButton.addEventListener("click", () => {
        showScreenshot(currentScreenshot + 1);
    });
}

const squareUpSection = document.querySelector(".squareup");
const squareCursor = squareUpSection?.querySelector(".squareCursor");

if (squareUpSection && squareCursor) {
    squareUpSection.addEventListener("pointermove", (event) => {
        if (event.pointerType === "mouse") {
            const isOverBlackoutProtocol =
                event.target instanceof Element && event.target.closest(".BO");

            if (isOverBlackoutProtocol) {
                squareUpSection.classList.remove("has-custom-cursor");
                return;
            }

            squareUpSection.classList.add("has-custom-cursor");
            squareCursor.style.left = `${event.clientX}px`;
            squareCursor.style.top = `${event.clientY}px`;
        }
    });

    squareUpSection.addEventListener("pointerleave", () => {
        squareUpSection.classList.remove("has-custom-cursor");
    });
}
