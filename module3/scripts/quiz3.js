function processQuiz()
{
	var answer1 = document.forms.quiz1.question1.value;
	var answer2 = document.forms.quiz1.question2.value;
	var answer3 = document.forms.quiz1.question3.value;
	var answer4 = document.forms.quiz1.question4.value;
		
	var score = 0;
			
	if( answer1 == 1 )
	{
		score = score + 25;
	}
			
	if( answer2 == 1 )
	{
		score = score + 25;
	}

	if( answer3 == 0 )
	{
		score = score + 25;
	}

	if( answer4 == 2 )
	{
		score = score + 25;
	}

	alert( "You scored " + score )
	parent.reportScores ( score );
	
}