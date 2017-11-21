function processQuiz()
{
	var answer 1 = docunment.forms.quiz1.question1. value; 
	var answer 2 = docunment.forms.quiz1.question2. value; 
	var answer 3 = docunment.forms.quiz1.question3. value; 
	var answer 4 = docunment.forms.quiz1.question4. value; 
	var answer 5 = docunment.forms.quiz1.question5. value; 
	var answer 6 = docunment.forms.quiz1.question6. value; 
	var answer 7 = docunment.forms.quiz1.question7. value; 
	var answer 8 = docunment.forms.quiz1.question8. value; 
	var answer 9 = docunment.forms.quiz1.question9. value; 
	var answer 10 = docunment.forms.quiz1.question10. value; 
	
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
	
}

var percentage = counter / 10;
alert( "Your score is " + percentage + "%" );

alert ( "You got " + counter + " questions correct!");

sessionStorage.setItem( "somekey", "topic7" );
var value = sessionStorage.getItem( "topic7" );