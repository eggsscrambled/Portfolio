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
const screenshots = ["s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png"];
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
