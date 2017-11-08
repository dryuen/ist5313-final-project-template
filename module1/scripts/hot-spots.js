
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Shar-dun-nay";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Saw-vin-yawn Blonk";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Pee-no Gree";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Rees-ling";
	}
	
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}

