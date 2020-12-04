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
    var track = "contact-form";

    if(email == "")
        alert("Email ID Required");
    else if(phone == "")
        alert("Phone Number required.");
    else if(name == "")
        alert("Name Required");
    else{
        buttonChange("send", "sending...", true);
        writeUserData(name, email, phone, message, track);
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

function renderLists( data = {}){
    var jkkk = "";
    if(data != null){
        var keys = Object.keys(data);
        if(keys.length != 0){
            for(var i = 0; i < keys.length;  i++){
                let keyA = 'accordion-'+i;
                var kk = "";
                kk += "<div class=\"accordion\" ><div class=\"list\" ><div class=\"user-contact-name\"><i class=\"fa fa-user\"></i>";
                kk += "<h5>"+( data[keys[i]].name || "NA" )+"</h5></div><div class=\"user-contact\"><div class=\"contact-right\">";
                kk += "<a href=\"tel:"+data[keys[i]].phone+"\"><i class=\"fa fa-phone\"></i>"+( data[keys[i]].phone || "NA" )+"</a></div>";
                kk += "<div class=\"contact-right\"><a href=\"mailto:"+ data[keys[i]].email+"\"><i class=\"fa fa-envelope\"></i>"+( data[keys[i]].email || "NA" )+"</a></div>";
                kk += "</div><div class=\"user-contact-arrow\"><div onclick=\"deleteData(\'"+keys[i]+"\');\"><i class=\"fa fa-trash \"></i></div>"
                kk += "<div class = \"arrow\" onclick=\"toggleAccordion(\'"+keyA+"\');\"><i class=\"fa fa-chevron-down fa-"+keyA+"\"></i></div></div></div>";
                kk += "<div class=\"panel\" id =\""+keyA+"\">"
                kk +=   "<div class=\"list\"><div><h6><b>Posted At: </b></h6><p>"+( new Date(data[keys[i]].timestamp) || "NA" ) +"</p></div>"
                kk +=   "<div><h6><b>Track from: </b></h6><p>"+( data[keys[i]].track || "NA" ) +"</p></div></div>"
                kk +=   "<div class=\"message\"><h6><b>Message</b></h6><p>"+( data[keys[i]].message || "NA" ) +"</p></div></div></div>";
                jkkk += kk;
            }
        }
    }
    else
        jkkk += "<div class=\"no-data\">No User Entries</div>";
    document.getElementById("lists").innerHTML = jkkk;
}