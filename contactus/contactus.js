const button = document.getElementById("btn")
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const  emailData = document.getElementById("email")
var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var emailCondition=false

var  nameCondtiotion = false


button.addEventListener("click",(event)=>{
    event.preventDefault()
    if(nameCondtiotion && emailCondition){
            alert("Thank you for registering")
            window.location.href = "../index.html";

        }else{
            alert("Please fill all the fields")
            console.log(nameCondtiotion);
        }

})



nameInput.addEventListener("input", function() {

  if (!/^([A-Za-z.-]+\s*)+$/.test(nameInput.value)|| nameInput.value.length<3) {
 
    nameError.textContent = "Please enter a valid name.";
    nameError.style.display = "block";
    nameCondtiotion=false
  }
  else{
    nameError.style.display = "none";
    nameCondtiotion=true
  } 

});

emailData.addEventListener("input", function() {
    if (!email.test(emailData.value)) {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.display = "block";
      nameCondtiotion=false
    } else {
      emailError.style.display = "none";
      emailCondition=true
    }
  });
