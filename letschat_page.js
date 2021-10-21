var firebaseConfig = {
    apiKey: "AIzaSyCP6h_b6Z7njUUcS26jDZtyO1bijg5zr34",
    authDomain: "lets-chat-app-cadd4.firebaseapp.com",
    projectId: "lets-chat-app-cadd4",
    storageBucket: "lets-chat-app-cadd4.appspot.com",
    messagingSenderId: "662484316947",
    appId: "1:662484316947:web:ea044f5408aee13760e0e6"
  };
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push(
       {
             name:user_name,
             message:msg,
             like:0
       }
 );
document.getElementById("msg").value="";

}