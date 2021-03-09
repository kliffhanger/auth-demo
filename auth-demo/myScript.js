let state = false;
let password = document.getElementById('floatPassword');
let lowerUpperCase = document.querySelector('.uppercaseDetect i');
let number = document.querySelector('.numberDetect i ');
let specialChar = document.querySelector('.characterDetect i');
let passC = document.getElementById('passC');

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')


// let checker = document.querySelector('input[name="toggle"]:checked').value;
// function toggleCheck(){
//     if(checker != "1"){
//         document.getElementsById('loginForm').remove();
//     }
// }

// toggle of hid password
function myFunction(show){
    show.classList.toggle('bi-eye-slash-fill');
}

function toggle(){
    if(state){
        password.setAttribute("type", "password");
        state = false;
    }
    else{
        password.setAttribute("type","text");
        state = true;
    }
}

//password strength check
password.addEventListener('keyup', function(){
    let pass = password.value;
    checkStrength(pass);
    StrengthChecker(pass);
})

function checkStrength(password){
    //check uppercse
    if(password.match(/(.*[A-Z])/)){
        lowerUpperCase.classList.remove('bi-circle');
        lowerUpperCase.classList.add('bi-circle-fill');
        lowerUpperCase.style.color="green";
        document.querySelector('.uppercaseDetect').style.color = "green";
    }
    else{
 
        lowerUpperCase.classList.add('bi-circle');
        lowerUpperCase.classList.remove('bi-circle-fill');
        lowerUpperCase.style.color="black";
        document.querySelector('.uppercaseDetect').style.color = "black";
    }
    //check for numerical
    if(password.match(/[0-9]/)){
        number.classList.remove('bi-circle');
        number.classList.add('bi-circle-fill');
        number.style.color="green";
        document.querySelector('.numberDetect').style.color = "green";
    }
    else{
        number.classList.add('bi-circle');
        number.classList.remove('bi-circle-fill');
        number.style.color="black";
        document.querySelector('.numberDetect').style.color = "black";
    }
    //check for special character
    if(password.match(/([^A-Za-z0-9])/)){
        specialChar.classList.remove('bi-circle');
        specialChar.classList.add('bi-circle-fill');
        specialChar.style.color="green";
        document.querySelector('.characterDetect').style.color = "green";
    }
    else{
        specialChar.classList.add('bi-circle');
        specialChar.classList.remove('bi-circle-fill');
        specialChar.style.color="black";
        document.querySelector('.characterDetect').style.color = "black";
    }
    
}

//display in word format- password strength
function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        passC.style.color = "green"
        passC.textContent = 'thats my boy'
    } else if(mediumPassword.test(PasswordParameter)){
        passC.style.color = 'yellow'
        passC.textContent = 'seems good, we suggest to make it stronger'
    } else{
        passC.style.color = 'red'
        passC.textContent = 'come on you can do better then that'
    }
}