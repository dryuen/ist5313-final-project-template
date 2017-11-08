// This function is only called when the user/learner clicks on the submit button
// on the HTML page. The purpose of this function is to process the form; that is,
// grade the quiz.
function processQuiz()
{
    var answer1 = document.forms.quiz2.question1.value;
    var answer2 = document.forms.quiz2.question2.value;
    var answer3 = document.forms.quiz2.question3.value;
    var answer4 = document.forms.quiz2.question4.value;
    var answer5 = document.forms.quiz2.question5.value;

    var counter = 0;		// This variable keeps track of the number of correct answers

    if( answer1 == 2 )
    {
        counter = counter + 1;
    }

    if( answer2 == 1 )
    {
        counter = counter + 1;
    }

    if( answer3 == 2 )
    {
        counter = counter + 1;
    }
    if( answer4 == 1 )
    {
        counter = counter + 1;
    }
    if( answer5 == 0 )
    {
        counter = counter + 1;
    }
    alert( "You got " + counter + " questions correct!" );

    var percentage = counter / 5;

    var grade = (percentage * 100);

    if(grade < 70) {
        alert( "Your score is " + grade + "%. You must score a 70% or higher to continue" );
    } else{
        alert( "Your score is " + (grade.toFixed(2)) + "%. Congratulations!" );
        $("#certificate-link").css("display", "block");
    }


}

