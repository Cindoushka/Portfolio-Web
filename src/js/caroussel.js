// let precedent = document.querySelector(".precedent")

// let suivant = document.querySelector(".suivant")

// let caroussel1 = document.querySelector(".firstcaroussel")

// let caroussel2 = document.querySelector(".secondcaroussel")

// let caroussel3 = document.querySelector(".lastcaroussel")


//     suivant.addEventListener("click", slideNext);

//     let currentSlide = 0

// function slideNext() {
//       caroussel1.style.transition = "0.9s linear";

//       caroussel2.style.transition = "0.9s linear";

//       caroussel3.style.transition = "0.9s linear";

//     let decalageCar = 104;
//     let decalage = 207;

//     if (currentSlide == 0 ) {
//     caroussel1.style.transform = `translateX(${-decalageCar}%)`
//     caroussel2.style.transform = `translateX(${-decalageCar}%)`
//     caroussel3.style.transform = `translateX(${-decalageCar}%)`

//     currentSlide ++

//     precedent.classList.remove("hiddenarrow")

//     } else {
//       caroussel1.style.transform = `translateX(${-decalage}%)`
//       caroussel2.style.transform = `translateX(${-decalage}%)`
//       caroussel3.style.transform = `translateX(${-decalage}%)`

//       suivant.classList.add("hiddenarrow")

//     }

// }

//     precedent.addEventListener("click", slidePrevious);


// function slidePrevious() {

//   caroussel1.style.transition = "0.9s linear";

//   caroussel2.style.transition = "0.9s linear";

//   caroussel3.style.transition = "0.9s linear";


// let decalageCar = 0;
// let decalage = 104;

// if (currentSlide == 1 ) {
// caroussel1.style.transform = `translateX(${-decalage}%)`
// caroussel2.style.transform = `translateX(${-decalage}%)`
// caroussel3.style.transform = `translateX(${-decalage}%)`
//       currentSlide --

//       precedent.classList.remove("hiddenarrow")
//       suivant.classList.remove("hiddenarrow")

// } else {
//   caroussel1.style.transform = `translateX(${-decalageCar}%)`
//   caroussel2.style.transform = `translateX(${-decalageCar}%)`
//   caroussel3.style.transform = `translateX(${-decalageCar}%)`

//   precedent.classList.add("hiddenarrow")
//   suivant.classList.remove("hiddenarrow")


// }

// }


let caroussel = document.querySelector('#caroussel');
let containers = Array.from(document.querySelectorAll('.conteneursite'));
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

suivant.addEventListener("click", slideNext);
precedent.addEventListener("click", slidePrev);

let currentSlide = 0;

function slidePrev() {

    if (currentSlide > 0) {
    currentSlide -= 1
    }
    if ((currentSlide > 0) && (currentSlide != (containers.length - 1))) {
        precedent.classList.remove("hiddenarrow")
    } else if (currentSlide == 0) {
        precedent.classList.add("hiddenarrow")
    } else if (currentSlide == containers.length - 1) {
        suivant.classList.add("hiddenarrow")
    }
    if (currentSlide < containers.length - 1) {
        suivant.classList.remove("hiddenarrow")
    }

    caroussel.style.transition = "1s linear";
    
    let slideWidth = - (containers[0].offsetWidth + 25);

    console.log(slideWidth)

    if (currentSlide >= 0) {
        containers.forEach(container => {
            container.style.transition = "1s linear";

            container.style.transform = `translateX(${slideWidth * currentSlide}px)`
    
        });
    }

   console.log(currentSlide)

}

function slideNext() {

    if (currentSlide < containers.length - 1) {
    currentSlide += 1
    }

    if ((currentSlide > 0) && (currentSlide != (containers.length - 1))) {
        precedent.classList.remove("hiddenarrow")
    } else if (currentSlide == 0) {
        precedent.classList.add("hiddenarrow")
    } else if (currentSlide == containers.length - 1) {
        suivant.classList.add("hiddenarrow")
    } 

    if (currentSlide != (containers.length - 1)) {
        suivant.classList.remove("hiddenarrow")
    }

    let slideWidth = - (containers[0].offsetWidth + 25);


    if (currentSlide < containers.length ) {
    containers.forEach(container => {
        container.style.transition = "1s linear";

        container.style.transform = `translateX(${slideWidth * currentSlide}px)`

        });
    } 
console.log(currentSlide)

}

