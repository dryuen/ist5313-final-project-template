var images = ["images/slide5.jpg", "images/slide6.jpg", "images/slide7.jpg"] ;

var heading = ["Living With Less","Mentally Declutter","Slow Down Your Pace"] ;
 
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