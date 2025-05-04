
function toggleMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  }
  
 
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide-img');
  
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 3000);
  

document.querySelectorAll('.card-flip').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.card-inner'), { rotateY: 180, duration: 0.6 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.card-inner'), { rotateY: 0, duration: 0.6 });
    });
  });


document.addEventListener("DOMContentLoaded", function () {

    gsap.from("h2, h5, p, .nav-link", {
      opacity: 0,
      y: 20, 
      duration: 1,
      stagger: 0.2, 
      ease: "power3.out"
    });
  
  
    gsap.from(".btn-pink", {
      opacity: 0,
      y: 30, 
      duration: 1,
      delay: 1, 
      ease: "power3.out"
    });
  
    
    gsap.from("#about h2, #about p", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  
   
    gsap.from("#cards h2", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });
    gsap.from(".card-container", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      delay: 0.5, 
      ease: "power3.out"
    });
  
   
    gsap.from("#contact h2, #contact form", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      ease: "power3.out"
    });
  });
  


window.onload = function() {
    setTimeout(function() {
 
      document.getElementById("popup").classList.remove("d-none");
  

      gsap.from("#gaming-img", { opacity: 0, scale: 0.5, duration: 1 });
      gsap.from("#popup-text", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    }, 3000);
  };
  

  function toggleMode() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
  }
  
  
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("d-none");
  });
  