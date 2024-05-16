function displayLinks() {
   var x = document.getElementById("nav-links-mobile");
   if (x.style.display === "flex") {
      x.style.display = "none";
   } else {
      x.style.display = "flex";
   }
}

function myFunction(x) {
   if (x.matches) {
      // If media query matches
      navLinksDesktop.style.display = "none";
   } else {
   }
}

const navLinksDesktop = document.getElementById("#nav-links-desktop");
var x = window.matchMedia("(min-width: 600px)");

myFunction(x);

x.addEventListener("change", function () {
   myFunction(x);
});
