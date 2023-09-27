let nameError = document.getElementById('name-error');
let teleError = document.getElementById('tele-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');

const validateName = () => {
    let name = document.getElementById('name').value;
    name = name.trim();

    if(name.length == 0){
        nameError.innerHTML = 'Måste ha ett namn';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Måste innehålla för och efternamn';
        return false;
    }
    
    nameError.innerHTML = '<span class="material-icons">done</span>';
    return true;
};

const validatePhone = () => {
    let tele = document.getElementById('tele').value;
    tele = tele.trim();

    if(tele.length == 0){
        teleError.innerHTML = 'Telefonnumret måste vara längre';

        return false;
    }

    if (tele. length !== 10){
        teleError. innerHTML = 'Telefonnumret ska vara 10 siffor';
        return false;
        }

    if(!tele.match(/^[0-9]{10}$/)){
        teleError.innerHTML = 'Måste vara siffor';
        return false;
    }

    teleError.innerHTML = '<span class="material-icons">done</span>';
    return true;
};

const validateEmail = () => {
    let email = document.getElementById('email').value;
    email = email.trim();

    if(email.length == 0){
        emailError.innerHTML = 'Måste innehålla ett email';
        return false;
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML = 'vänligen mata in en godkänd email';
        return false;
    }
    
    emailError.innerHTML = '<span class="material-icons">done</span>';
    return true;
};

const validateMessage = () => {
    let message = document.getElementById('message').value;
    message = message.trim();

    if(message.length < 10){
        messageError.innerHTML = 'Måste innehålla ett meddelande';
        return false;
    }
    
    messageError.innerHTML = '<span class="material-icons">done</span>';
    return true;
};

validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        alert('Formuläret är inte ifyllt korrekt');
        return false;
    } else {
        alert('Ditt meddelande är skickat till oss!');
    }
}


clearFormError = () => {
    messageError.innerHTML = '';
    teleError.innerHTML = '';
    nameError.innerHTML = '';
    emailError.innerHTML = '';

}

//Hämta formuläret
let form = document.getElementById("contactform");

// Hämta modal
let modal = document.getElementById("contact-wrapper");

// Hämta knapp
let btn = document.getElementById("support-button");

// GÖr spanknapp till kryss
let span = document.getElementsByClassName("close")[0];

// När man klickar på ? för öppna modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// När man klickar på X för stänga modal 
span.onclick = function() {
  modal.style.display = "none";
  form.reset();
  clearFormError();
}

// När man klickar utanför modal för stänga modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Animation för Gudie section  */
 const visaSection= () =>{
    const section = document.querySelectorAll(".full-height-section")
    for(let i = 0; i<section.length; i++){
        const windowHeight = window.innerHeight;
        const elementTop = section[i].getBoundingClientRect().top;
        const elementVisable = 150;

        if(elementTop<windowHeight - elementVisable){
            if(section[i].classList.contains('fadeBtm')){
                section[i].classList.add('fade-btm');
            }
        }
        else{
            section[i].classList.remove('fade-btm');
        }
    }
}
window.addEventListener("scroll",visaSection); 

/* Animation för section 2 - section 5 */
let optionsscroll = {
    root: null,
    rootMargin: "0px 100px 0px 100px ",
    threshold: 0.65
  };

const observerLeft = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        } else {
            entry.target.classList.remove('showLeft');
        }
    });
},optionsscroll);

const hiddenElements = document.querySelectorAll('.hidLeft');
hiddenElements.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('showRight');
        }
    });
},optionsscroll);

const hiddenElements2 = document.querySelectorAll('.hidRight');
hiddenElements2.forEach((el) => observerRight.observe(el));