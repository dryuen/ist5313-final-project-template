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
	
	var counter = 0; // This variable keeps track of the number of correct answers
	
	if( answer1 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer2 == 1 )
	{
		counter = counter + 1;
	}	
	
	if( answer3 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer4 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer5 == 1 )
	{
		counter = counter + 1;
	}	
	
	if( answer6 == 2 )
	{
		counter = counter + 1;
	}
	
	if( answer7 == 3 )
	{
		counter = counter + 1;
	}
	
	if( answer8 == 2 )
	{
		counter = counter + 1;
	}	
	
	if( answer9 == 0 )
	{
		counter = counter + 1;
	}
	
	if( answer10 == 1 )
	{
		counter = counter + 1;
	}
	
	
    alert( "You got " + counter + " questions correct!" );

    var percentage = counter / 10;

    var grade = (percentage * 100);

    if(grade < 70) {
        alert( "Your score is " + (grade.toFixed(2)) + "%. You must score a 70% or higher to continue" );
    } else{
        alert( "Your score is " + grade + "%. Congratulations!" );
        $("#certificate-link").css("display", "block");
    }


}