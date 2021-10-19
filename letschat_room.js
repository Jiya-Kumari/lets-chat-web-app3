const firebaseConfig = {
    apiKey: "AIzaSyCP6h_b6Z7njUUcS26jDZtyO1bijg5zr34",
    authDomain: "lets-chat-app-cadd4.firebaseapp.com",
    projectId: "lets-chat-app-cadd4",
    storageBucket: "lets-chat-app-cadd4.appspot.com",
    messagingSenderId: "662484316947",
    appId: "1:662484316947:web:ea044f5408aee13760e0e6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}