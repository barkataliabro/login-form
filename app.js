
let barkat = document.getElementById("submiteBtn");


submiteBtn.addEventListener("click", () => {
    var userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    // console.log("🚀 ~ submiteBtn.addEventListe  ner ~ userName:", userName)
    if (userName === "") {
        // console.log("🚀 ~ validateForm ~ userName:", userName)
        alert("Please enter the username");
    }
    else if (email === "") {
        alert("please enter the email address")
    }
    else if (password === "") {
        alert("Passwrod must be 8 letters")
    }
    else if (cpassword === "") {
        alert("please enter the match password")
    }
    else if (password !== cpassword) {
        alert("please enter the correct confiram password")
    }
    else {
        alert("Form submitted successfully.");
        localStorage.setItem("user", JSON.stringify({
            email,
            userName,
            password
        }))
        window.location.href = "login.html"
    }
})

