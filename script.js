let alarmTime = "";
let uploadedImage = "";

document.getElementById("imageUpload").addEventListener("change",function(){

let file = this.files[0];

if(file){

uploadedImage = URL.createObjectURL(file);

}

});

function setAlarm(){

alarmTime = document.getElementById("alarmTime").value;

document.getElementById("status").innerText =
"Alarm set for " + alarmTime;

}

setInterval(function(){

let now = new Date();

let currentTime =
now.getHours().toString().padStart(2,'0') + ":" +
now.getMinutes().toString().padStart(2,'0');

if(currentTime === alarmTime){

document.getElementById("alarmSound").play();

let img = document.getElementById("alarmImage");

img.src = uploadedImage;

img.style.display = "block";

document.getElementById("status").innerText =
"⏰ Alarm Ringing!";

}

},1000);