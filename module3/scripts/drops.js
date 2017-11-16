function goFirst()
{
	if( document.getElementById( "xfirst" ).value == 1 )
	{
		// enable the second <select>
		document.getElementById( "xsecond" ).disabled = "";
		// disable the first <select> (totally optional)
		document.getElementById( "xfirst" ).disabled = "disabled";
	}
	
	
	// you can add an else statement to alert them that they are wrong
}


function goSecond()
{
	if( document.getElementById( "xsecond" ).value == 2 )
	{
		// enable the second <select>
		document.getElementById( "xthird" ).disabled = "";
		// disable the first <select> (totally optional)
		document.getElementById( "xsecond" ).disabled = "disabled";
	}
	// you can add an else statement to alert them that they are wrong
}


function goThird()
{
	if( document.getElementById( "xthird" ).value == 3 )
	{
		// enable the second <select>
		document.getElementById( "yfirst" ).disabled = "";
		// disable the first <select> (totally optional)
		document.getElementById( "xthird" ).disabled = "disabled";
		
		
	}
}
function goFourth()
{
	if( document.getElementById( "yfirst" ).value == 2 )
	{
		// enable the second <select>
		document.getElementById( "ysecond" ).disabled = "";
		// disable the first <select> (totally optional)
		document.getElementById( "yfirst" ).disabled = "disabled";
	}
	// you can add an else statement to alert them that they are wrong
}

function goFifth()
{
	if( document.getElementById( "ysecond" ).value == 1 )
	{
		// enable the second <select>
		document.getElementById( "ysecond" ).disabled = "disabled";
		// disable the first <select> (totally optional)
		document.getElementById( "yfirst" ).disabled = "disabled";
	}
	// you can add an else statement to alert them that they are wrong
	{
		alert( "Great Job, continue to Example 3!" );
	}
}

