// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const submitBtn = document.querySelector(".submit-btn");
  
    // Form submission handler with validation
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Field validation
      if (!name || !email || !subject || !message) {
        alert("All fields are required.");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("pghann@gmail.com");
        return;
      }
  
      // Simulate success (can be removed if submitting to FormSubmit)
      setTimeout(() => {
        successMessage.style.display = "block";
        contactForm.reset();
  
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      }, 1000);
    });
  
    // Animate contact methods
    const contactMethods = document.querySelectorAll(".contact-method");
    contactMethods.forEach((method, index) => {
      method.style.animationDelay = `${0.2 * index}s`;
      method.style.animation = "fadeInUp 0.8s ease-out both";
    });
  
    // Social icons hover effect
    const socialIcons = document.querySelectorAll(".social-icon");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.1) rotate(5deg)";
      });
      icon.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1) rotate(0deg)";
      });
    });
  
    // Navbar scroll background
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.95)";
      } else {
        nav.style.background = "rgba(0, 0, 0, 0.9)";
      }
    });
  
    // Submit button click animation
    submitBtn.addEventListener("click", function () {
      this.style.transform = "translateY(0) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-2px) scale(1)";
      }, 150);
    });
  });
  