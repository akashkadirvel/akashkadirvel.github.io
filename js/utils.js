function buttonChange(clsName = "", btnValue = "", disabled = false){
    document.getElementsByClassName(clsName)[0].innerHTML = btnValue;
    document.getElementsByClassName(clsName)[0].innerText = btnValue;
    document.getElementsByClassName(clsName)[0].disabled = disabled;
}

function validateEntryUser() {
    var u = getCurrentUser();
    // console.log(u);
    // u.then( (i) => {
    // })
    console.log("validateentryuser", u);
    if(!u){
        // window.location.href = "./login.html";
        console.log("redirected");
        return ;
    }
    return ;
}

function validateLoggedUser() {
    var u = getCurrentUser();
    console.log("validateloggeduser",u);
    // u.then( (i) => {
    // })
    if(u){
        window.location.href = "./entries.html";
        return ;
    }
    return ;
}

function validateEntry(){
    var name = document.getElementsByName("fname")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
  
    if(email == "")
        alert("Email ID Required");
    else if(phone == "")
        alert("Phone Number required.");
    else if(name == "")
        alert("Name Required");
    else{
        buttonChange("send", "sending...", true);
        writeUserData(name, email, phone, message);
    }
        
}

function validateLogin() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if(email == "")
        alert("Email ID Required");
    else if(password == "")
        alert("Phone Number required.");
    else {
        buttonChange("login-btn", "validating...", true);
        login(email, password);
    }
}

function toggleAccordion(elementId = ""){
    let d = document.getElementById(elementId).style.display;

    if(d == "" || d == "none"){
        document.getElementById(elementId).style.display = "block";
        document.getElementsByClassName("fa-"+elementId)[0].style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById(elementId).style.display = "none";
        document.getElementsByClassName("fa-"+elementId)[0].style.transform = "rotate(0deg)";
    }
}