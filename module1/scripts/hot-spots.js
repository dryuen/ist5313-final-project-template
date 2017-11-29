
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "un-essential";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "essential";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "un-essential";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "essential";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}