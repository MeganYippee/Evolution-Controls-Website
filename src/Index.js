let navBar = document.querySelector(".nav-bar");
navBar.innerHTML = `
<div class="row menu">
<img
         class="col menuLogo"
         src="src/photos/New+Logo.png"
         alt="Evolution Controls Logo"
      />
         <a class="col menu-title" href="index.html">HOME</a>
          <div class="col menu-title dropdown">
    <button class="dropbtn"> PRODUCTS ▼
    </button>
    <div class="dropdown-content">
      <a href="products-sub-pages/pro-series.html">PRO SERIES</a>
      <a href="products-sub-pages/wireless-series.html">WIRELESS SERIES</a>
      <a href="products-sub-pages/ec-motor-controls.html">EC MOTOR CONTROLS</a>
      <a href="products-sub-pages/hvac-automation">HVAC AUTOMATION</a>
      <a href="products-sub-pages/accessories-cables.html">ACCESSORIES AND CABLES</a>
      <a href="products-sub-pages/sales-support.html">SALES SUPPORT</a>
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
      <a href="applications-sub-pages/applications.html">APPLICATIONS</a>
      <a href="applications-sub-pages/guide-specs.html">GUIDE SPECS</a>
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
