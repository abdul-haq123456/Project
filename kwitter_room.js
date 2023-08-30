
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCMO2jcgPr1nytXhNEZpP2iPIF76fpgZiY",
      authDomain: "project-9cd6a.firebaseapp.com",
      projectId: "project-9cd6a",
      storageBucket: "project-9cd6a.appspot.com",
      messagingSenderId: "103377476681",
      appId: "1:103377476681:web:ce2c721adb87273bd2f398"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location = "kwitter_room.html";
}