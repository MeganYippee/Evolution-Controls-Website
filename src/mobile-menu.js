const mobileMenu = window.matchMedia("(max-width: 428px)");

function handleMobileChange(e) {
   if (e.matches) {
      console.log("Media Query Matched!");
   }
}

mobileMenu.addEventListener(handleMobileChange);

handleMobileChange(mobileMenu);
