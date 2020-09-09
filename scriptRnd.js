window.onload = choosePic;

var myPix = new Array("images/logWar1.png","images/logWar2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
