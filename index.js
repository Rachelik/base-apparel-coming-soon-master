var form = document.getElementById("signup");
console.log("hello");
var valid = true;
form.addEventListener("submit", function (e) {
    var inputEmail = document.getElementById("input-address-id");
    var inputEmailErr = document.getElementById("input-email-err");
    if (!inputEmail.validity.valid) {
        valid = false;
        inputEmailErr.classList.add("input-err-invisible");
        inputEmailErr.innerHTML = "Please provide a valid email";
    }
    else {
        inputEmail.classList.remove("error");
        document.getElementById("input-email-err").classList.remove("input-err-invisible");
    }
    if (!valid) {
        e.preventDefault();
    }
});

