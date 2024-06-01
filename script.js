var textElement = document.getElementsByClassName("hero-tagline")[0]; // Replace with your element's ID
var top=document.querySelector("hero-title");
var text = " Augment technology, advance humanity.";
var index = 0;
var speed = 75; // Adjust speed as desired (lower is faster)
var isDeleting = false;
var blinkCount = 0;

function typeWriter() {
    if (index < text.length && !isDeleting) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } 
    else if (index === text.length && !isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter,speed*25)
      return 0;
    } 
    else if (isDeleting) {
      textElement.textContent = text.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
        setTimeout(typeWriter,speed*25)
        return 0;
      }
      setTimeout(typeWriter, speed);
    }
  }

typeWriter();