const passwordInput =document.querySelector(".pass-field input");
const eyeIcon =document.querySelector(".pass-field i");

eyeIcon.addEventListener("click",()=>{
    passwordInput.type = passwordInput.type =="password" ? "text":"password";

    eyeIcon.className=`fa-solid fa-eye${ passwordInput.type ==="password" ? "": "-slash"}`;
});