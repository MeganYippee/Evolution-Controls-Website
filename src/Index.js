let menu = document.querySelector(".nav-bar");
menu.innerHTML = `
<div class="row menu">
<img
         class=" col menuLogo"
         src="src/photos/New+Logo.png"
         alt="Evolution Controls Logo"
      />
         <a class="col menu-title" href="index.html">HOME</a>
          <div class="col menu-title dropdown">
    <button class="dropbtn"> PRODUCTS ▼
    </button>
    <div class="dropdown-content">
      <a href="#">PRO SERIES</a>
      <a href="#">WIRELESS SERIES</a>
      <a href="#">EC MOTOR CONTROLS</a>
      <a href="#">HVAC AUTOMATION</a>
      <a href="#">ACCESSROIES AND CABLES</a>
      <a href="#">SALES SUPPORT</a>
    </div>
  </div> 
         <a class="col menu-title" href="new-products.html">NEW PRODUCTS</a>
         <a class="col menu-title" href="datasheets.html">DATASHEETS</a>
         <a class="col menu-title" href="distributors.html">DISTRIBUTORS</a>
         <a class="col menu-title" href="tech-support.html">TECH SUPPORT</a>
         <span class="col menu-title dropdown">
    <a class="dropbtn">APPLICATIONS ▼
    </a>
    <div class="dropdown-content">
      <a href="#">APPLICATIONS</a>
      <a href="#">GUIDE SPECS</a>
    </div>
  </span>
  </div> `;

let footer = document.querySelector(`.footer`);
footer.innerHTML = ` <p>
            © Evolution Controls Inc. Poway, CA, USA <br />
            Last update: December 2022 <br />
            Tech Support: (858) 748-7359 <br />
            Comments: sales@gotoevo.com
         </p>`;
