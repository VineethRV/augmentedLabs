var textElement = document.getElementsByClassName("hero-tagline")[0]; // Replace with your element's ID
var top=document.querySelector(".hero-title");
var text = " Augment technology, advance humanity.";
var index = 0;
var speed = 75; // Adjust speed as desired (lower is faster)
var isDeleting = false;
var blinkCount = 0;
var navCount= 0 ;
var nav_button=document.getElementsByClassName("nav-button")[0]
var nav_panel=document.getElementsByClassName("navigation")[0]
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
      textElement.textContent = textElement.textContent.substring(0,index-1)
      index--;
      if (index === 1) {
        isDeleting = false;
        setTimeout(typeWriter,speed*25)
        return 0;
      }
      setTimeout(typeWriter, speed);
    }
  }
function navi(){
  if (navCount%2==0){
    nav_button.style.marginTop="0%"
    nav_panel.style.marginTop="0%"
    nav_panel.style.transition="0.5s"
    nav_button.style.transition="0.5s"
    navCount++
  }
  else{
    nav_button.style.marginTop="100%"
    nav_panel.style.marginTop="-100%"
    navCount++
  }
}
typeWriter();