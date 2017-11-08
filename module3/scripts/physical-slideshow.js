

var images = ["images/parkSVG.svg", "images/hikingSVG.svg", "images/bikeSVG.svg", "images/exerciseSVG.svg"] ;

var heading = ["Take Advantage of Local Parks","Go Hiking","Ride a Bike","Exercise"] ;
 
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
     return false;
 }