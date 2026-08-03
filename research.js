// Enhanced animations and interactions for research page
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
        setTimeout(typeWriter, 80);
      }
    }
    
    setTimeout(typeWriter, 800);
    
    // Animated counter for statistics
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element, target, duration = 2000) {
      let start = 0;
      const increment = target / (duration / 16);
      
      function updateCounter() {
        start += increment;
        if (start < target) {
          element.textContent = Math.floor(start);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      }
      
      updateCounter();
    }
    
    // Trigger counter animation when stats come into view
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          animateCounter(entry.target, target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
      statsObserver.observe(stat);
    });
    
    // Keyword tags interactive animation
    const keywordTags = document.querySelectorAll('.keyword-tag');
    
    keywordTags.forEach((tag, index) => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        tag.style.transition = 'all 0.5s ease';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
      }, (index * 100) + 1500);
      
      // Click animation
      tag.addEventListener('click', function() {
        this.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
          this.style.animation = '';
        }, 600);
      });
    });
    
    // Research list items progressive reveal
    const researchListItems = document.querySelectorAll('.research-list li');
    
    const listObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 150);
          listObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    researchListItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-30px)';
      item.style.transition = 'all 0.6s ease';
      listObserver.observe(item);
    });
    
    // Floating animation for section icons
    const sectionIcons = document.querySelectorAll('.section-icon');
    
    sectionIcons.forEach((icon, index) => {
      let floatDirection = 1;
      let floatOffset = index * 500; // Stagger the floating animation
      
      setInterval(() => {
        icon.style.transform = `translateY(${floatDirection * 5}px)`;
        floatDirection *= -1;
      }, 2000 + floatOffset);
    });
    
    // Interactive particle system for research sections
    const researchSections = document.querySelectorAll('.research-section');
    
    researchSections.forEach(section => {
      section.addEventListener('mouseenter', function() {
        createResearchParticles(this);
      });
    });
    
    function createResearchParticles(element) {
      const colors = ['#ff4444', '#ff6666', '#ff8888'];
      
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 6px;
          height: 6px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.9;
          z-index: 10;
        `;
        
        element.appendChild(particle);
        
        const x = Math.random() * element.offsetWidth;
        const y = Math.random() * element.offsetHeight;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const animation = particle.animate([
          {
            transform: 'translate(0, 0) scale(1)',
            opacity: 0.9
          },
          {
            transform: `translate(${(Math.random() - 0.5) * 150}px, ${(Math.random() - 0.5) * 150}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: 1500,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => particle.remove();
      }
    }
    
    // Mouse tracking effect for parallax
    document.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX / window.innerWidth) - 0.5;
      const mouseY = (e.clientY / window.innerHeight) - 0.5;
      
      researchSections.forEach((section, index) => {
        const intensity = (index % 2 === 0) ? 5 : -5;
        const x = mouseX * intensity;
        const y = mouseY * intensity;
        
        section.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
    
    // Text shimmer effect for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
      title.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(90deg, #fff 25%, #ff4444 50%, #fff 75%)';
        this.style.backgroundSize = '200% 100%';
        this.style.backgroundClip = 'text';
        this.style.webkitBackgroundClip = 'text';
        this.style.webkitTextFillColor = 'transparent';
        this.style.animation = 'shimmer 2s ease-in-out';
        
        setTimeout(() => {
          this.style.background = '';
          this.style.backgroundClip = '';
          this.style.webkitBackgroundClip = '';
          this.style.webkitTextFillColor = '';
          this.style.animation = '';
        }, 2000);
      });
    });
    
    // Dynamic stats card animation
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
      card.addEventListener('click', function() {
        this.style.animation = 'cardFlip 0.8s ease';
        
        setTimeout(() => {
          this.style.animation = '';
        }, 800);
      });
      
      // Staggered entrance animation
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, (index * 200) + 2000);
    });
    
    // Initialize stat cards as hidden
    statCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px) scale(0.8)';
      card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
    
    // Navigation interaction
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active-nav'));
        this.classList.add('active-nav');
        
        // Create navigation ripple
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 68, 68, 0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform-origin: center;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
    
    // Add dynamic CSS animations
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes cardFlip {
        0% { transform: rotateY(0deg); }
        50% { transform: rotateY(180deg); }
        100% { transform: rotateY(360deg); }
      }
      
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .nav-links a.active-nav {
        background: rgba(255, 68, 68, 0.2) !important;
        color: #ff4444 !important;
      }
    `;
    document.head.appendChild(dynamicStyles);
  });
