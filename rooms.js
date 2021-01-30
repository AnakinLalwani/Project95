var firebaseConfig = {
    apiKey: "AIzaSyAhYnuQkj_dLuM8b_1dLTjopdQDYUPjY3w",
    authDomain: "bonfire-f30d6.firebaseapp.com",
    databaseURL: "https://bonfire-f30d6-default-rtdb.firebaseio.com",
    projectId: "bonfire-f30d6",
    storageBucket: "bonfire-f30d6.appspot.com",
    messagingSenderId: "561658342278",
    appId: "1:561658342278:web:db2989194f6348a33a5a07",
    measurementId: "G-W1E69WY8RK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //ADD YOUR FIREBASE LINKS HERE
  user_name = localStorage.getItem("username");
  function addroom() {
    room_name = document.getElementById("roomname").value; 
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding a room"
    });
    localStorage.setItem("Roomname", room_name);
    window.location = "chat_page.html";
  }
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names);
        row = "<div class = 'room_name' id="+Room_names+" onclick= 'redirectToRoomname(this.id)'> #" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  function redirectToRoomname(name) {
    console.log(name);
    localStorage.setItem("Roomname", name);
    window.location = "chat_page.html";
  }
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
  }
