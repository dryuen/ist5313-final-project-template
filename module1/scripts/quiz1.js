	/*
	 
	// this function can't be here. It is in the scripts.js
	// oScorm is a variable that's only visibile in scripts.js
	function reportScores()
	{	
		oScorm.set("cmi.core.score.raw", score );
		oScorm.set("cmi.core.score.min", 0 );
		oScorm.set("cmi.core.score.max", 100 );
		
		oScorm.set("cmi.core.lesson_status", "passed")
		
		oScorm.save();
	}
	
	*/
	
	
function processQuiz()
{
	var answer1 = document.forms.quiz1.question1.value;
	var answer2 = document.forms.quiz1.question2.value;
	var answer3 = document.forms.quiz1.question3.value;
	var answer4 = document.forms.quiz1.question4.value;
		
	var score = 0;
			
	if( answer1 == 2 )
	{
		score = score + 25;
	}
			
	if( answer2 == 3 )
	{
		score = score + 25;
	}

	if( answer3 == 1 )
	{
		score = score + 25;
	}

	if( answer4 == 0 )
	{
		score = score + 25;
	}

	if( score >= 70)
	{
	
		document.getElementById( "certificate-link" ).style.display = "inline";
		
	}
	
	
	alert( "You scored " + score )
	parent.reportScores ( score );
	
	
}