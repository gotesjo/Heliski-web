function showSlide(valdSlide){
    let allSlides = document.querySelectorAll(".slide");
    let  allDots = document.getElementsByClassName("dot");

    for(let i = 0; i<allSlides.length; i++){
        allSlides[i].style.display = "none";
    }

    for(let i =0; i<allDots.length; i++){
        allDots[i].classList.remove("active");
    }

    if(valdSlide>allSlides.length){
        valdSlide = 1  
    }

    if(valdSlide<1){
        valdSlide = allSlides.length;
    }
    
    index = valdSlide;
    allSlides[index-1].style.display ="block";
    allDots[index-1].classList.add = "active"
}

let index = 1;
showSlide(index);

function plusSlides(nästaSida) {
    showSlide(index + nästaSida)
}

function currentSlide(nuvarandeSida) {
    showSlide(nuvarandeSida);
  }
