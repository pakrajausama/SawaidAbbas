 // Typewriting effect
 const text = "Explore my work, research, and publications. Dive into the world of GIS and remote sensing.";
 const typewriterElement = document.getElementById("typewriter");
 let index = 0;

 function typeWriter() {
     if (index < text.length) {
         typewriterElement.textContent += text.charAt(index);
         index++;
         setTimeout(typeWriter, 50);
     }
 }

 window.onload = typeWriter;