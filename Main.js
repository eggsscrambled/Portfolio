const text = document.getElementById("missionStatement");
const paragraph = document.getElementById("goal");

const text1 = document.getElementById("aiHeading");
const paragraph1 = document.getElementById("AI");

const text2 = document.getElementById("skillsHeading");
const paragraph2 = document.getElementById("skillsDescription");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        text.classList.add("show");
    }
    else{
        text.classList.remove("show");
    }

    if (window.scrollY > 350) {
        paragraph.classList.add("show");
    }
    else{
        paragraph.classList.remove("show");
    }

    if (window.scrollY > 650) {
        text1.classList.add("show");
        paragraph1.classList.add("show");
    }
    else{
        text1.classList.remove("show");
        paragraph1.classList.remove("show");
    }

    if (window.scrollY > 950) {
        text2.classList.add("show");
        paragraph2.classList.add("show");
    }
    else{
        text2.classList.remove("show");
        paragraph2.classList.remove("show");
    }

});
