// -- -- -- -- -- -- -- -- [ OVERLAY: SHOW AND HIDE ] -- -- -- -- -- -- -- --

const button = document.getElementById("MyNameButton");
const startpage = document.getElementById("sp");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const overlay = document.getElementById("overlay");
const main = document.querySelector("main");
const SPNav = document.getElementsByClassName("StartPageNavigation");

overlay.classList.add("HideOverlay");
main.classList.add("hidden");

function SwitchToMain() {
    overlay.classList.remove("HideOverlay");
    overlay.classList.add("ShowOverlay");
    

    setTimeout(function() {
        overlay.classList.add("HideOverlay");
        overlay.classList.remove("ShowOverlay");

        /* HIDE CONTENT */
        if ( startpage.style.display != "none" ) {
            startpage.classList.add("hidden");
            slider1.classList.add("hidden");
            slider2.classList.add("hidden");
            main.classList.remove("hidden");
        }

    }, 1100);
}

button.addEventListener("click", SwitchToMain);
for (let i = 0; i < SPNav.length; i++) {
    SPNav[i].addEventListener("click", function() {
        SwitchToMain();
        
        setTimeout(() => {
            const targetElement = document.getElementById( this.getAttribute('href').split('#')[1] );
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 1101);
    });
}

// -- -- -- -- -- -- -- -- [ IMAGE SLIDER: BUTTONS ] -- -- -- -- -- -- -- --

const slider = document.getElementById("imgslider");
const sliderforward = document.getElementById("slider-forward");
const sliderbackward = document.getElementById("slider-backward");

sliderforward.addEventListener("click", function() {
    slider.scrollBy( { left: 300, behavior: "smooth" } );
});

sliderbackward.addEventListener("click", function() {
    slider.scrollBy( { left: -300, behavior: "smooth" } );
});

// -- -- -- -- -- -- -- -- [ CONTACT ] -- -- -- -- -- -- -- --

const contactMessage = document.getElementById("message");
const contactHeading = document.querySelector("#ContactDiv h1"); // Targeting the h1 within ContactDiv


contactMessage.addEventListener("focus", function() {
    contactHeading.textContent = "{ Getting In Touch }";
});

contactMessage.addEventListener("blur", function() {
    if ( contactMessage.value == "" ) {
        contactHeading.textContent = "{ Get In Touch }";
    }
});

/* COPYRIGHT */
const year = new Date().getFullYear();
document.getElementById("Copyright").textContent += ` ${year}`;