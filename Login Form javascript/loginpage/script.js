var user_email = document.getElementById("email").value;
var user_password = document.getElementById("password").value;
var password = "wasd";
var email = "kumalsameer124@gmail.com";
var attempt = 3;

form.addEventListener("submit", e => {
    if (validate() == false) {
        // e.preventDefault();

    }


});

const setErrorEmail = (element, message) => {
    const inputgroup = element.parentElement;
    const errorDisplay = inputgroup.querySelector(".error");

    errorDisplay.innerText = message;
    inputgroup.classList.add("error");
    inputcontrol.classList.remove("success");
}
const setErrorPassword = (element, message) => {
    const inputgroup = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = message;
    inputgroup.classList.add("error");
    inputcontrol.classList.remove("success");
}

const setSuccessEmail = element => {
    const inputgroup = element.parentElement;
    const errorDisplay = inputgroup.querySelector(".error");

    errorDisplay.innerText = "valid email";
    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");

}
const setSuccessPassword = element => {
    const inputgroup = element.parentElement;
    const errorDisplay = inputgroup.querySelector(".error");

    errorDisplay.innerText = "";
    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");

}


function validate_Email() {
    var user_email = document.getElementById("email").value;
    var email = "kumalsameer124@gmail.com";


    if (user_email === "") {
        setErrorEmail(email, "Email is required");
        return false;
    } 
    else if (!Check_email(emailValue)){
            setErrorEmail(email, "Provide a valid email address");
            return false;
    }

    }

function validate_Password(){
    var user_password = document.getElementById("email").value.trim();
    var password = "wasdwasd";


    if (user_password === "") {
        setErrorPassword(password, "Password is required");
        return false;
    } 
    else if (user_password !== password){
            setErrorEmail(password, "Incorrect password");
            return false;
    }   

    }

    
        // attempt--;
        //disabling access to login
        // if (attempt == 0) {
        //     document.getElementById("email").disabled = true;
        //     document.getElementById("password").disabled = true;
        //     document.getElementById("login").disabled = true;
        //     return false;
        // }
    

function Check_email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

};



function Check_password() {
    if (user_password != password) {
        if (user_password.length == 0) {
            document.getElementById("group_1").classList.add("error");

        }
    }
}


