function displayLinks() {
   var x = document.getElementById("nav-links");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

function myFunction(x) {
   if (x.matches) {
      // If media query matches
      console.log(navLinks.getAttribute("id"));
   } else {
      document.body.style.backgroundColor = "pink";
   }
}

const navLinks = document.getElementById("nav-links");
var x = window.matchMedia("(min-width: 428px)");

myFunction(x);

x.addEventListener("change", function () {
   myFunction(x);
});
