
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-2(0)+1 and y<sub>2</sub>=3(0)-9";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-2(1)+1 and y<sub>2</sub>=3(1)-9";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-2(2)+1 and y<sub>2</sub>=3(2)-9";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-2(3)+1 and y<sub>2</sub>=3(3)-9";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-2(4)+1 and y<sub>2</sub>=3(4)-9";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}