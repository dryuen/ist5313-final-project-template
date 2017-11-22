

function processQuiz()
{
	var answer1 = document.forms.quiz1.question1. value; 
	var answer2 = document.forms.quiz1.question2. value; 
	var answer3 = document.forms.quiz1.question3. value; 
	var answer4 = document.forms.quiz1.question4. value; 
	var answer5 = document.forms.quiz1.question5. value; 
	var answer6 = document.forms.quiz1.question6. value; 
	var answer7 = document.forms.quiz1.question7. value; 
	var answer8 = document.forms.quiz1.question8. value; 
	var answer9 = document.forms.quiz1.question9. value; 
	var answer10 = document.forms.quiz1.question10. value; 
	
	var counter = 0;
	
	if( answer 1 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer 2 == 1 )
	{
		counter = counter + 1;
	}	
	
	if( answer 3 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer 4 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer 5 == 1 )
	{
		counter = counter + 1;
	}	
	
	if( answer 6 == 2 )
	{
		counter = counter + 1;
	}
	
	if( answer 7 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer 8 == 2 )
	{
		counter = counter + 1;
	}	
	
	if( answer 9 == 0 )
	{
		counter = counter + 1;
	}
	
	if( answer 10 == 1 )
	{
		counter = counter + 1;
	}
	
alert ( "You got " + counter + " questions correct!");
	
var percentage = counter / 10;
var grade = (percentage * 100);


alert( "Your score is " + percentage + "%" );




}