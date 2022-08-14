const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".main-nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

   
