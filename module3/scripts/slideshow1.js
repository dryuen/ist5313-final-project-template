var images = ["images/myslide1.jpg", "images/myslide2.jpg", "images/myslide3.png"] ;
 var heading = ["Living With Less","Mentally Declutter","Slow Down Your Pace"] ;
 var caption = ["Better to donate than accumulate", "clear your mind of the obsessive thoughts,cut off the thought which cause overwhelm and keep you mired in
                    avoidance and indecision.", "Slowing Down is Everything to Create Mental Peace.Focus on the lifestyle, not the goal. The journey is the destination.Enjoy the journey!"];
 
 var imageNumber = 0;
 var imageLength = images.length - 1;
 
 function changeImage(x){
	 imageNumber += x;
	 if( imageNumber > imageLength ) {
		 imageNumber =0;
	 }
	 
	 if (imageNumber < 0){
		 imageNumber = imageLength;
	 } 
	 
	 document.getElementById("slideshow1").src = images[imageNumber];
     document.getElementById("heading").innerHTML = heading[imageNumber];
     document.getElementById("caption").innerHTML = heading[imageNumber];
     return false;
 }