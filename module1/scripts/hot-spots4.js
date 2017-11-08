
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-3(-3)-2 and y<sub>2</sub>=2(-3)-2";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-3(-2)-2 and y<sub>2</sub>=2(-2)-2";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-3(-1)-2 and y<sub>2</sub>=2(-1)-2";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-3(0)-2 and y<sub>2</sub>=2(0)-2";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "y<sub>1</sub>=-3(1)-2 and y<sub>2</sub>=2(1)-2";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}