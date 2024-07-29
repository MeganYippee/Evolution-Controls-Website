function displayLinks() {
   var x = document.getElementById("nav-links-mobile");
   if (x.style.display === "flex") {
      x.style.display = "none";
   } else {
      x.style.display = "flex";
   }
}
