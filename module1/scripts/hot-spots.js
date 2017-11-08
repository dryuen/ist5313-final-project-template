
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=2(0)-3 and y<sub>2</sub>=-4(0)+21";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=2(1)-3 and y<sub>2</sub>=-4(1)+21";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=2(2)-3 and y<sub>2</sub>=-4(2)+21";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=2(3)-3 and y<sub>2</sub>=-4(3)+21";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=2(4)-3 and y<sub>2</sub>=-4(4)+21";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}