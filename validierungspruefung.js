
//let registrationButton = document.getElementById("registration")
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (evt){
   let email = document.getElementById("email").value;
   let emailUngueltig = document.getElementById("ungueltigeEmail").value;
   let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
   
   if(email.match(!regexEmail))
   {
      event.preventDefault();
      emailUngueltig.innerHTML = "Email-Adresse Ungültig. Bitte prüfen!"
      emailUngueltig.style.color = "#ff0000";
      emailUngueltig.style.visibility ="visible";
      
      
   }
})


 /*registrationButton.addEventListener("click", function(){
    EmailValidation();
 })

 function EmailValidation(){
    let email = document.getElementById("email").value;
    console.log(email);
 }*/