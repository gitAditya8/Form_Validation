console.log("Form Validation Project")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
validFirstName = false;
validLastName = false;
validEmail = false;
validPhone = false;

// console.log(firstName,lastName,email,phone)
firstName.addEventListener("blur",()=>{
    console.log("First name is blurred.")
    // validate first name here
    let regex = /^[A-Z]([0-9a-zA-Z]){1,10}$/
    let str = firstName.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("Your first name is valid.")
        firstName.classList.remove("is-invalid")
        validFirstName = true
    }
    else{
        console.log("Inavlid First Name")    
        firstName.classList.add("is-invalid")
        validFirstName = false;
    }
})

lastName.addEventListener("blur",()=>{
    console.log("Last name is blurred.")
    // validate last name here
    let regex = /^[A-Z]([0-9a-zA-Z]){1,10}$/
    let str = lastName.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("Your last name is valid.")
        lastName.classList.remove("is-invalid")
        validLastName = true
    }
    else{
        console.log("Inavlid Last Name")
        lastName.classList.add("is-invalid")
        validLastName = false;
    }
})

email.addEventListener("blur",()=>{
    console.log("Email is blurred.")
    // validate email here
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("Your email is valid.")
        email.classList.remove("is-invalid")
        validEmail = true
    }
    else{
        console.log("Inavlid email")
        email.classList.add("is-invalid")
        validEmail = false;
    }
})

phone.addEventListener("blur",()=>{
    console.log("Phone is blurred.")
    // validate phone here
    let regex = /([0-9]){10}$/
    let str = phone.value
    console.log(regex, str)
    if(regex.test(str)){
        console.log("Your contact number is valid.")
        phone.classList.remove("is-invalid")
        validPhone = true
    }
    else{
        console.log("Inavlid Contact Number")
        phone.classList.add("is-invalid")
        validPhone = false;
    }
})

let submit = document.getElementById("submit")
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    if(validFirstName && validLastName && validEmail && validPhone){
        console.log("Form is submitted.")
        // submit your form here
        let failure = document.getElementById("failure")
        let success = document.getElementById("success")
        success.classList.add("show")
        // failure.classList.remove("show")
        $("#failure").hide();
        $("#success").show();
    }
    else{
        let failure = document.getElementById("failure")
        let success = document.getElementById("success")
        failure.classList.add("show")
        // success.classList.remove("show")
        $("#success").hide();
        $("#failure").show();
    }
})