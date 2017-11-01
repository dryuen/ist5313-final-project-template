// This function is only called when the user/learner clicks on the submit button
// on the HTML page. The purpose of this function is to process the form; that is,
// grade the quiz.
function processQuiz()
{
    var answer1 = document.forms.quiz0.question1.value;
    var answer2 = document.forms.quiz0.question2.value;
    var answer3 = document.forms.quiz0.question3.value;

    var counter = 0;		// This variable keeps track of the number of correct answers

    if( answer1 == 0 )
    {
        counter = counter + 1;
    }

    if( answer2 == 2 )
    {
        counter = counter + 1;
    }

    if( answer3 == 0 )
    {
        counter = counter + 1;
    }

    alert( "You got " + counter + " questions correct!" );

    var percentage = counter / 3;

    var grade = percentage * 100;

    if(grade < 70) {
        alert( "Your score is " + grade + "%. You must score a 70% or higher to continue" );
    } else{
        alert( "Your score is " + grade + "%. Congratulations!" );
        $("#certificate-link").css("display", "block");
    }


}

