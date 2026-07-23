/* =========================
   MENU HAMBURGER
========================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* =========================
   TUTUP MENU SAAT KLIK LINK
========================= */

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#084298";
        navbar.style.padding = "12px 8%";
    } else {
        navbar.style.background = "#0d6efd";
        navbar.style.padding = "15px 8%";
    }

});

/* =========================
   ANIMASI COUNTER STATISTIK
========================= */

const counters = document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

    const target = parseInt(
        counter.innerText.replace(/\./g, '')
    );

    let count = 0;

    const speed = target / 100;

    function updateCounter(){

        count += speed;

        if(count < target){

            counter.innerText =
                Math.floor(count).toLocaleString('id-ID');

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText =
                target.toLocaleString('id-ID');
        }
    }

    updateCounter();

});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#0d6efd";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* =========================
   ANIMASI FADE IN
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.1
});

document.querySelectorAll(
    ".stat-card, .news-card, .potential-card, .budget-card"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all 0.8s ease";

    observer.observe(item);

});
/* =========================
   DROPDOWN LAYANAN INFORMASI
========================= */

document.querySelectorAll(".dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.closest(".dropdown").classList.toggle("show");
    });

});

document.addEventListener("click", function (e) {

    document.querySelectorAll(".dropdown.show").forEach(dropdown => {

        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("show");
        }

    });

});