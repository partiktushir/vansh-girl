// ==========================
// SOS BUTTON
// ==========================

function sendSOS() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showLocation, showError);

    } else {

        alert("Geolocation is not supported.");

    }

}

function showLocation(position) {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let map =
        "https://www.google.com/maps?q=" + lat + "," + lon;

    alert(
        "🚨 SOS Activated!\n\nYour Live Location:\n\n" + map
    );

    console.log("Latitude :", lat);
    console.log("Longitude :", lon);

}

function showError(error) {

    switch (error.code) {

        case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;

        case error.TIMEOUT:
            alert("Request timed out.");
            break;

        default:
            alert("Unknown Error.");
    }

}

// ==========================
// COUNTER ANIMATION
// ==========================

const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {

    const update = () => {

        const target = +num.getAttribute("data-target");

        const current = +num.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            num.innerText = current + increment;

            setTimeout(update, 30);

        } else {

            num.innerText = target;

        }

    };

    update();

});

// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    });

}

// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#ff2e63";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(255,46,99,.95)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const btn = document.querySelector(".hero button");

if (btn) {

    btn.addEventListener("click", function () {

        btn.style.transform = "scale(.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 150);

    });

}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

const items = document.querySelectorAll(".box,.feature,.count");

items.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "1s";

    observer.observe(item);

});