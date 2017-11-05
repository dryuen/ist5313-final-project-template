
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Add or subtract terms that either share the same variable and same exponent or are constants";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Multiply a term outside of a parenthesis to each term inside the parenthesis";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Add the same term to both sides of an equation";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Subtract the same term from both sides of an equation";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "Multiply the same term to both sides of an equation";
	}
	else if( number == 6 )
	{
		document.getElementById( "output-text" ).innerHTML = "Divide the same term from both sides of an equation";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}