var images = ["images/minimalSVG.svg", "images/starSVG.svg", "images/starSVG.svg"] ;

var heading = ["Living With Less","Mentally Declutter","Slow Down Your Pace"] ;

var caption = ["There are few obvious benefits for living with Less such as: a more organized household and more money to be found, but there are also a few deep, life-changing benefits such as: creating a calm, peaceful mind.", "Mental clutter can include all of the following: worrying about the future, ruminating about the past, keeping a mental to-do list, complaints, and so on. Frequently perform a mental declutter to clear your head and make you feel relief.", "A slower-paced life means taking time to enjoy whatever you’re doing. Slowing down is a conscious choice, and not always an easy one, but it leads to a greater appreciation for life and a greater level of happiness."] ;
 
var imageNumber = 0;
 var imageLength = images.length - 1;
 
 function changeImage(x){
	 imageNumber += x;
	 if( imageNumber > imageLength ) {
		 imageNumber = 0;
	 }
	 
	 if (imageNumber < 0){
		 imageNumber = imageLength;
	 } 
	 
	 document.getElementById("slideshow").src = images[imageNumber];
     document.getElementById("heading").innerHTML = heading[imageNumber];
     document.getElementById("slideshow-caption").innerHTML = caption[imageNumber];
     return false;
 }