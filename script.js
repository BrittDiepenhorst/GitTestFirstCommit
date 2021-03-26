let toggleNavStatus = false;

const toggleNav = function () {
    const getNavInside = document.querySelector(".nav-inside");
    const getNavInsideUl = document.querySelector(".nav-inside ul");
    const getNavInsideLinks = document.querySelectorAll(".nav-inside a");


    if (toggleNavStatus === false) {
        getNavInsideUl.style.visibility = "visible";
        getNavInside.style.width = "250px";

        let arrayLength = getNavInsideLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavInsideLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getNavInside.style.width = "50px";

        let arrayLength = getNavInsideLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavInsideLinks[i].style.opacity = "0";
        }

        getNavInsideUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

const buttonToggleNav = document.querySelector(".btn-toggle-nav");
buttonToggleNav.addEventListener("click", toggleNav);

const body = document.querySelector("body");

const greyBackground = document.querySelector(".color-home");
const redBackground = document.querySelector(".color-red");
const orangeBackground = document.querySelector(".color-orange");
const purpleBackground = document.querySelector(".color-purple");
const greenBackground = document.querySelector(".color-green");

const makeGrey = () => {
    body.classList.add("color-home");
    body.classList.remove("color-red", "color-orange", "color-purple", "color-green");
    document.querySelector("#p").textContent = "Lightgrey";
};

greyBackground.addEventListener("click", () => {
    makeGrey();
    toggleNav();
});

const makeRed = () => {
    body.classList.add("color-red");
    body.classList.remove("color-home", "color-orange", "color-purple", "color-green");
    document.querySelector("#p").textContent = "Red";
};

redBackground.addEventListener("click", () => {
    makeRed();
    toggleNav();
});

const makeOrange = () => {
    body.classList.add("color-orange");
    body.classList.remove("color-red", "color-home", "color-purple", "color-green");
    document.querySelector("#p").textContent = "Orange";
}

orangeBackground.addEventListener("click", () => {
    makeOrange();
    toggleNav()
});

const makePurple = () => {
    body.classList.add("color-purple");
    body.classList.remove("color-orange", "color-red", "color-home", "color-green");
    document.querySelector("#p").textContent = "Purple";
}

purpleBackground.addEventListener("click", () => {
    makePurple();
    toggleNav();
});

const makeGreen = () => {
    body.classList.add("color-green");
    body.classList.remove("color-purple", "color-orange", "color-red", "color-home");
    document.querySelector("#p").textContent = "Green";
}

greenBackground.addEventListener("click", () => {
    makeGreen();
    toggleNav();
});

buttonToggleNav.addEventListener("mouseover", toggleNav);

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == "49") {
        makeGrey();
    } else if (key.keyCode == "50") {
        makeRed();
    } else if (key.keyCode == "51") {
        makeOrange();
    } else if (key.keyCode == "52") {
        makePurple();
    } else if (key.keyCode == "53") {
        makeGreen();
    }
}