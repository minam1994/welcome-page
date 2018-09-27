var date = new Date(); 
var hour = date.getHours();
var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
var time = hour + ":" + minutes;

var month = date.getUTCMonth() + 1;
var day = date.getUTCDate();
var year = date.getUTCFullYear();
var newDate = day + "." + month + "." + year + ".";


var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var user = prompt("What is your name?");
var username = user.charAt(0).toUpperCase() + user.slice(1);

var imageMorning = "url('images/morning.jpg')";
var imageAfternoon = "url('images/afternoon.jpg')";
var imageEvening = "url('images/evening.jpg')";
var imageNight = "url('images/night.jpg')";


if (hour > 4 && hour < 13){
	h1.textContent = "Good Morning, " + username + "!";
    document.body.style.backgroundImage = imageMorning;
} else if (hour > 12 && hour < 19){
	h1.textContent = "Good Afternoon, " + username + "!";
    document.body.style.backgroundImage = imageAfternoon;
} else if (hour > 18 && hour < 23){
	h1.textContent = "Good Evening, " + username + "!";
    document.body.style.backgroundImage = imageEvening;
} else {
	h1.textContent = "Good Night, " + username + "!";
    document.body.style.backgroundImage = imageNight;
}

h2.textContent = newDate + " - " + time;