function goFirst()
{
	if( document.getElementById( "xfirst" ).value == 1 )
	{
		// enable the second <select>
		document.getElementById( "xsecond" ).disabled = "";
		// disable the first <select> (totally optional)
		document.getElementById( "xfirst" ).disabled = "disabled";
	}