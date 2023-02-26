// declare variables 
let menu = document.querySelector(".menu");
let scrollUp = document.querySelector(".scrollUp");
let closeImg = document.querySelector(".close");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menu.onclick = () =>{
    navbar.classList.toggle("active")
}
closeImg.onclick = () =>{
    navbar.classList.remove("active")
}

window.onscroll = () =>{
    if (window.scrollY > 150){
        scrollUp.classList.add("active");
        navbar.classList.remove("active");
        header.classList.add("sticky");
    }else{
        scrollUp.classList.remove("active");
        header.classList.remove("sticky");
    }
}

// / when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".hero .header .container .navbar .nav li a");
Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".hero .header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});