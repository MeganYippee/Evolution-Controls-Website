function displayLinks() {
   var x = document.getElementById("nav-links-mobile");
   if (x.style.display === "flex") {
      x.style.display = "none";
   } else {
      x.style.display = "flex";
   }
}

function reload() {
   if (y.matches) {
      window.location.reload();
   } else {
      preventDefault();
   }
}
var y = window.matchMedia("(min-width:601px)");

reload();
