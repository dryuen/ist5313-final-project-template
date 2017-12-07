function processQuiz()
	{
		var answer1 = document.forms.quiz3.question1.value;
		var answer2 = document.forms.quiz3.question2.value;
		var answer3 = document.forms.quiz3.question3.value;
		var answer4 = document.forms.quiz3.question4.value;
			
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

		if( score >= 70)
		{
		
			document.getElementById( "certificate-link" ).style.display = "inline";
		}
		
		alert( "You scored " + score )
		parent.reportScores ( score );

		
		
	}