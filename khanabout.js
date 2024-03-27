const mobile_navbar = document.querySelector(".iconic");
const nav_header = document.querySelector(".icon");
 
const togglenavbar = () => {
     nav_header.classList.toggle("active");
}

mobile_navbar.addEventListener("click" , ()=> togglenavbar());
