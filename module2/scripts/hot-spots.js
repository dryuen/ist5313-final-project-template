
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Check out the color and clarity.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Swirl the wine slow and easy. The more droplets of wine on the glass=higher alcohol content.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Bring the wine up to the nose and take in the aroma.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Sip the wine and let it roll on the tongue. Note any flavors that may stand out.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}