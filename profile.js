 // Enhanced animations and interactions
 document.addEventListener('DOMContentLoaded', function() {
      
    // Typing animation for page title
    const pageTitle = document.querySelector('.page-title');
    const titleText = pageTitle.textContent;
    pageTitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
      if (i < titleText.length) {
        pageTitle.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    setTimeout(typeWriter, 1000);
    
    // Animated counter for achievements
    const achievementCards = document.querySelectorAll('.achievement-card');
    let achievementCounter = 0;
    
    function animateAchievements() {
      achievementCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px) scale(0.8)';
          
          setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 100);
        }, index * 200);
      });
    }
    
    setTimeout(animateAchievements, 2000);
    
    // Expertise tags animation with stagger effect
    const expertiseTags = document.querySelectorAll('.expertise-tag');
    
    function animateExpertiseTags() {
      expertiseTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
          tag.style.transition = 'all 0.5s ease';
          tag.style.opacity = '1';
          tag.style.transform = 'translateX(0)';
        }, index * 100);
      });
    }
    
    setTimeout(animateExpertiseTags, 2500);
    
    // Profile list items reveal animation
    const profileListItems = document.querySelectorAll('.profile-list li');
    
    function animateListItems() {
      profileListItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
          item.style.transition = 'all 0.4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 150);
      });
    }
    
    setTimeout(animateListItems, 3000);
    
    // Floating animation for section icons
    const sectionIcons = document.querySelectorAll('.section-icon');
    
    sectionIcons.forEach(icon => {
      let floatDirection = 1;
      setInterval(() => {
        icon.style.transform = `translateY(${floatDirection * 3}px)`;
        floatDirection *= -1;
      }, 2000);
    });
    
    // Interactive particle effect on hover for profile sections
    const profileSections = document.querySelectorAll('.profile-section');
    
    profileSections.forEach(section => {
      section.addEventListener('mouseenter', function() {
        createParticleEffect(this);
      });
    });
    
    function createParticleEffect(element) {
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ff4444;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.8;
          z-index: 1;
        `;
        
        element.appendChild(particle);
        
        const x = Math.random() * element.offsetWidth;
        const y = Math.random() * element.offsetHeight;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const animation = particle.animate([
          {
            transform: 'translate(0, 0) scale(1)',
            opacity: 0.8
          },
          {
            transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: 1000,
          easing: 'ease-out'
        });
        
        animation.onfinish = () => particle.remove();
      }
    }
    
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'pulseGlow 2s ease-in-out';
        }
      });
    }, observerOptions);
    
    profileSections.forEach(section => {
      observer.observe(section);
    });
    
    // Add pulse glow animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
        }
        50% {
          box-shadow: 0 0 20px rgba(255, 68, 68, 0.6), 0 0 30px rgba(255, 68, 68, 0.4);
        }
      }
      
      @keyframes textShimmer {
        0% {
          background-position: -200% center;
        }
        100% {
          background-position: 200% center;
        }
      }
      
      .shimmer-text {
        background: linear-gradient(90deg, #fff 25%, #ff4444 50%, #fff 75%);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textShimmer 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    // Mouse movement parallax effect
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      profileSections.forEach((section, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        section.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
    
    // Text shimmer effect on section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
      title.addEventListener('mouseenter', function() {
        this.classList.add('shimmer-text');
        setTimeout(() => {
          this.classList.remove('shimmer-text');
        }, 3000);
      });
    });
    
    // Expertise tags interactive animation
    expertiseTags.forEach(tag => {
      tag.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
          this.style.animation = 'bounce 0.6s ease';
        }, 10);
      });
    });
    
    // Add bounce animation
    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0) scale(1);
        }
        40% {
          transform: translateY(-10px) scale(1.1);
        }
        60% {
          transform: translateY(-5px) scale(1.05);
        }
      }
    `;
    document.head.appendChild(bounceStyle);
    
    // Navigation link active state animation
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active-nav'));
        
        // Add active class to clicked link
        this.classList.add('active-nav');
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
    
    // Add navigation styles
    const navStyle = document.createElement('style');
    navStyle.textContent = `
      .nav-links a.active-nav {
        background: rgba(255, 68, 68, 0.2) !important;
        color: #ff4444 !important;
      }
      
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 68, 68, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes rippleEffect {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(navStyle);
    
  });