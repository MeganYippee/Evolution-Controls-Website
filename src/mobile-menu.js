function displayLinks() {
   var x = document.getElementById("nav-links-mobile");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "flex";
   }
}

function myFunction(x) {
   if (x.matches) {
      // If media query matches
      console.log(navLinks.getAttribute("id"));
   } else {
   }
}

const navLinks = document.getElementById("nav-links-mobile");
var x = window.matchMedia("(min-width: 600px)");

myFunction(x);

x.addEventListener("change", function () {
   myFunction(x);
});
