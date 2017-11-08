var images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.png", "images/slide4.jpg"] ;

var heading = ["Take Advantage of Local Parks","GO Hiking","Ride a Bike","Push-up and Pull-ups"] ;
 
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