const words = [
    {text: "Website Developer", article: "a"},
    {text: "Database Designer", article: "a"},
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  function type() {
    if (count === words.length) count = 0;
    
    const currentWord = words[count];
    currentText = currentWord.text;
    
    // Update article
    document.querySelector(".article").textContent = currentWord.article;
    
    letter = currentText.slice(0, ++index);
    document.querySelector(".typewriter").textContent = letter;
  
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000); // Pause at end of word
    } else {
      setTimeout(type, 100); // Typing speed
    }
  }
  
  // Start the typewriter effect
  type();
  
  // Add scroll effect to navigation
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0.9)';
    }
  });