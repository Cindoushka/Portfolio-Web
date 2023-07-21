window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll(".section");
    var navItems = document.querySelectorAll(".nav-link");
  
    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        navItems.forEach(function(navItem) {
          navItem.classList.remove("active");
        });
        navItems[index].classList.add("active");
      }
    });
  });

  // window.addEventListener("wheel", function(event) {
  //   event.preventDefault(); // Empêche le défilement automatique
  
  //   var sections = document.querySelectorAll(".section");
  //   var windowHeight = window.innerHeight;
  //   var currentSectionIndex = -1;
  
  //   // Trouver l'index de la section actuellement visible
  //   sections.forEach(function(section, index) {
  //     var rect = section.getBoundingClientRect();
  //     if (rect.top >= 0 && rect.top <= windowHeight) {
  //       currentSectionIndex = index;
  //     }
  //   });
  
  //   // Vérifier la direction du défilement (vers le haut ou vers le bas)
  //   if (event.deltaY < 0 && currentSectionIndex > 0) {
  //     // Défilement vers la section précédente
  //     var prevSectionOffset = sections[currentSectionIndex - 1].offsetTop;
  //     window.scrollTo({ top: prevSectionOffset, behavior: "smooth" });
  //   } else if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
  //     // Défilement vers la section suivante
  //     var nextSectionOffset = sections[currentSectionIndex + 1].offsetTop;
  //     window.scrollTo({ top: nextSectionOffset, behavior: "smooth" });
  //   }
  // });