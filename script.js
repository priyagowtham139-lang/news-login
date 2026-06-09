const navLinks = document.querySelectorAll(".nav-link");
const homepage = document.getElementById("homepage");
const errorPage = document.getElementById("error-page");
const backHome = document.getElementById("back-home");
const homeLinks = document.querySelectorAll(".home-link");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Helper to close mobile menu
function closeMobileMenu() {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
    }
}

// Show 404 for all navigation links except Home
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        closeMobileMenu();

        homepage.style.display = "none";
        errorPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Home buttons (Header and Footer)
homeLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        closeMobileMenu();

        homepage.style.display = "block";
        errorPage.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Back Home button
backHome.addEventListener("click", function() {
    homepage.style.display = "block";
    errorPage.style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close-modal");
const loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    loginModal.style.display="flex";
});

closeModal.addEventListener("click", ()=>{
    loginModal.style.display="none";
});

window.addEventListener("click",(e)=>{
    if(e.target===loginModal){
        loginModal.style.display="none";
    }
});

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(email==="admin@stackly.com" && password==="admin123"){
        window.location.href="admin-dashboard.html";
    }else{
        alert("Invalid Login");
    }
});
function togglePassword(inputId, icon) {

    const input =
        document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        icon.innerHTML = "🙈";
    } else {
        input.type = "password";
        icon.innerHTML = "👁";
    }
}