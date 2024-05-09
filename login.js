
var Email = document.getElementById("Email");
var password = document.getElementById("password");
var login = document.getElementById("login")
var submiteBtn = document.getElementById("submiteBtn")

let userDetail = JSON.parse(localStorage.getItem("user"))
console.log(userDetail)
login.addEventListener("click", () => {


    if (Email.value !== userDetail.email) {
        alert("please right the eamil")
    }
    else if (password.value !== userDetail.password) {
        alert("please right the password");
    } else {
        alert("you are logged in")
        window.location.href = "./homepage.html"
    }

})
submiteBtn.addEventListener("click", () => {
    console.log("working");
    window.location.href = "index.html"
  
})




