var firebaseConfig = {
  "apiKey": "AIzaSyD3kt82sKYtSaqUfBZxjS6YhZbwXTBHlsA",
  "authDomain": "portfolio-akashkadirvel.firebaseapp.com",
  "databaseURL": "https://portfolio-akashkadirvel.firebaseio.com",
  "projectId": "portfolio-akashkadirvel",
  "storageBucket": "portfolio-akashkadirvel.appspot.com",
  "messagingSenderId": "231713012681",
  "appId": "1:231713012681:web:fa9b75a97b850121c30618",
  "measurementId": "G-ZGPTR0N2R2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.database();

function writeUserData(name = "", email = "", phone = "", message = "") {
  db.ref().push({
    name,
    email,
    phone,
    message,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  }, (error) => {
    if (error) {
      alert(error, ": failed")
    } else {
      $('#myModal').modal("show");
    }
  });
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
  else
    writeUserData(name, email, phone, message);
}