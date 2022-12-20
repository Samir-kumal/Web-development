const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");





form.addEventListener("submit", e => {
    if (validateInputUsername() == false || validateInputEmail() == false || validateInputPassword() == false || validateInputPassword2() == false) {
        e.preventDefault();

    }

    // if (validateInputs() == false) {
    //     e.preventDefault();

    // }
    // ;

});


const setError = (element, message) => {   //here parameter are element and message
    const inputcontrol = element.parentElement;  // input control is a parent element
    const errorDisplay = inputcontrol.querySelector(".error"); // setting a variable who stores the value inside error div

    errorDisplay.innerText = message; // this will display whatever message we pass as a text
    inputcontrol.classList.add("error");
    inputcontrol.classList.remove("success");
}

const setSuccess = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = "";
    inputcontrol.classList.add("success");
    inputcontrol.classList.remove("error");

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputUsername = () => {
    const usernameValue = username.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required");
        return false;

    } else {
        setSuccess(username);
        return true;

    }
}
const validateInputEmail = () => {

    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "Email is required");
        return false;

    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
        return false;

    } else {
        setSuccess(email);
        return true;
    }
}
const validateInputPassword = () => {
    const passwordValue = password.value.trim();


    if (passwordValue === "") {
        setError(password, "Password is required");
        return false;

    } else if (passwordValue.length < 8) {
        setError(password, "Password must be atleast 8 characters");
        return false;

    } else if (passwordValue.length > 15) {
        setError(password, "Password must not exceed 15 characters");
        return false;

    } else {
        setSuccess(password);
        return true;

    }
}
const validateInputPassword2 = () => {
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();


    if (password2Value === "") {
        setError(password2, "Please confirm your password!");
        return false;

    } else if (password2Value !== passwordValue) {
        setError(password2, "Password doesnot match")
        return false;

    } else {
        setSuccess(password2);
        return true;

    }
}

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if (usernameValue === "") {
//         setError(username, "Username is required");
//         return false;

//     } else {
//         setSuccess(username);
//         // return true;

//     }
//     if (emailValue === "") {
//         setError(email, "Email is required");
//         return false;

//     } else if (!isValidEmail(emailValue)) {
//         setError(email, "Provide a valid email address");
//         return false;

//     } else {
//         setSuccess(email);
//         // return true;

//     }

//     if (passwordValue === "") {
//         setError(password, "Password is required");
//         return false;

//     } else if (passwordValue.length < 8) {
//         setError(password, "Password must be atleast 8 characters");
//         return false;

//     } else if (passwordValue.length > 15) {
//         setError(password, "Password must not exceed 15 characters");
//         return false;

//     } else {
//         setSuccess(password);
//         // return true; 

//     }

//     if (password2Value === "") {
//         setError(password2, "Please confirm your password!");
//         return false;

//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Password doesnot match")
//         return false;

//     } else {
//         setSuccess(password2);
//         return true;

//     }
// };