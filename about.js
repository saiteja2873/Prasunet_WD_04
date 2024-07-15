var button = document.getElementById("night1");
        button.addEventListener("click", switchCSS);

        function switchCSS() {
            var stylesheet = document.getElementById("themeStylesheet");

            if (stylesheet.getAttribute("href") === "about.css") {
                stylesheet.setAttribute("href", "about2.css");
            } else {
                stylesheet.setAttribute("href", "about.css");
            }
        }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        }