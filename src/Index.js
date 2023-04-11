let menu = document.querySelector(".menu");
menu.innerHTML = `
        <img
            class="menuLogo"
            src="src/photos/New+Logo.png"
            alt="Evolution Controls Logo"
         />
         <a class="col menu-title" href="index.html">Home</a>
         <a class="col menu-title" href="products.html">Products</a>
         <a class="col menu-title" href="new-products.html">New Products</a>
         <a class="col menu-title" href="datasheets.html">Datasheets</a>
         <a class="col menu-title" href="distributors.html">Distributors</a>
         <a class="col menu-title" href="tech-support.html">Tech Support</a>
         <a class="col menu-title" href="applications.html">Applications</a>`;

let footer = document.querySelector(`.footer`);
footer.innerHTML = ` <p>
            © Evolution Controls Inc. Poway, CA, USA <br />
            Last update: December 2022 <br />
            Tech Support: (858) 748-7359 <br />
            Comments: sales@gotoevo.com
         </p>`;
