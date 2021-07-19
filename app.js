const form= document.querySelector("#formName");
const name= document.querySelector("#name");
const email= document.querySelector("#email");
const phone= document.querySelector("#phone");

form.addEventListener("submit",()=>{
    alert(`Name: ${name.value } Email: ${ email.value} Phone: ${ phone.value}`)
})