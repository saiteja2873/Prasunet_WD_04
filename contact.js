var button = document.getElementById("night1");
        button.addEventListener("click", switchCSS);

        function switchCSS() {
            var stylesheet = document.getElementById("themeStylesheet");

            if (stylesheet.getAttribute("href") === "contact.css") {
                stylesheet.setAttribute("href", "contact2.css");
            } else {
                stylesheet.setAttribute("href", "contact2.css");
            }
        }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        }

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const form = document.querySelector("form");
    if (form) {
        console.log("Form found");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message Sent!");
            form.reset();
        });
    } else {
        console.log("Form not found");
    }
});