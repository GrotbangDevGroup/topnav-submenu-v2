const nav_button = document.querySelector("#nav-button");
const nav_element = document.querySelector(".nav");
const nav_links = document.querySelectorAll(".nav-li > .nav-link");

nav_links.forEach((element)  => {
    const submenu = element.nextElementSibling;
    let isOnSubmenu = false;

    if (submenu) {
        const submenu_icon = document.createElement("i");
        submenu_icon.className = "submenu-icon fa fa-circle-down";

        element.removeAttribute("href");
        element.appendChild(submenu_icon);
        element.addEventListener("mouseover", () => {
            if (submenu.style.display == "flex") {
                submenu.style.display = "none";
                submenu_icon.className = "submenu-icon fa fa-circle-down";
            } else {
                submenu.style.display = "flex";
                submenu_icon.className = "submenu-icon fa fa-circle-up";
            }
        });
        element.addEventListener("mouseout", () => {
            setTimeout(() => {
                submenu.style.display = "none"
            }, 250);
        });
        submenu.addEventListener("mouseover", () => {
            submenu.style.display = "flex";
            console.log("Teste");
        });

    }
});

nav_button.addEventListener("click", () => {
    const button_bar = document.querySelector(".button-bar");

    if (nav_element.style.display == "flex") {
        nav_element.style.display = "none";
        button_bar.className = "button-bar"
    } else {
        nav_element.style.display = "flex";
        button_bar.classList.add("show");
    }
});