const mobileMenu = window.matchMedia("(max-width: 428px)");

if (mobileMenu.matches) {
   let menu = document.querySelector("");
   console.log("Media Query Matched!");
}

// Get HTML head element
let head = document.getElementsByTagName("HEAD")[0];

// Create new link Element
let link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";

link.type = "text/css";

link.href = "style.css";
