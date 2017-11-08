var images = ["images/slide5.jpg", "images/slide6.jpg", "images/slide7.jpg"] ;
 var heading = ["Living With Less","Mentally Declutter","Slow Down Your Pace"] ;
 var caption = ["Better to donate than accumulate", " clear your mind of the obsessive thoughts,cut off the thought which cause overwhelm and keep you mired in
                    avoidance and indecision.", "  Slowing Down is Everything to Create Mental Peace.Focus on the lifestyle, not the goal. The journey is the destination.Enjoy the journey!"];
 
 var imageNumber = 5;
 var imageLength = images.length - 1;
 
 function changeImage(x){
	 imageNumber += x;
	 if( imageNumber > imageLength ) {
		 imageNumber =5;
	 }
	 
	 if (imageNumber < 5){
		 imageNumber = imageLength;
	 } 
	 
	 document.getElementById("slideshow1").src = images[imageNumber];
     document.getElementById("heading").innerHTML = heading[imageNumber];
     document.getElementById("caption").innerHTML = heading[imageNumber];
     return false;
 }