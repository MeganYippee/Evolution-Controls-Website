const mobileMenu = window.matchMedia("(max-width: 428px)");

mobileMenu.addEventListener(handleMobileChange);

function handleMobileChange(e) {
   if (e.matches) {
      console.log("Media Query Matched!");
   }
}

handleMobileChange(mobileMenu);
