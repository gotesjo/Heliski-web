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

// Get the modal
let modal = document.getElementById("contact-wrapper");

// Get the button that opens the modal
let btn = document.getElementById("support-button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  form.reset();
  clearFormError();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
