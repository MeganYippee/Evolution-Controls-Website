let menu = document.querySelector(".nav-bar");
menu.innerHTML = `
<div class="row menu">
         <a class="col menu-title" href="index.html">Home</a>
          <div class="col menu-title dropdown">
    <button class="dropbtn"> Products ▼
    </button>
    <div class="dropdown-content">
      <a href="#">Pro Series</a>
      <a href="#">Wireless Series</a>
      <a href="#">EC Motor Controls</a>
      <a href="#">HVAC Automation</a>
      <a href="#">Accessories and Cables</a>
      <a href="#">Sales Support</a>
    </div>
  </div> 
         <a class="col menu-title" href="new-products.html">New Products</a>
         <a class="col menu-title" href="datasheets.html">Datasheets</a>
         <a class="col menu-title" href="distributors.html">Distributors</a>
         <a class="col menu-title" href="tech-support.html">Tech Support</a>
         <span class="col menu-title dropdown">
    <a class="dropbtn">Applications ▼
    </a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
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
