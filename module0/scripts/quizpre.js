// This function is only called when the user/learner clicks on the submit button
// on the HTML page. The purpose of this function is to process the form; that is,
// grade the quiz.
function processQuiz()
{
    var a1 = parseInt(document.forms.quizpre.question1.value);
    var a2 = parseInt(document.forms.quizpre.question2.value);
    var a3 = parseInt(document.forms.quizpre.question3.value);
    var a4 = parseInt(document.forms.quizpre.question4.value);
    var a5 = parseInt(document.forms.quizpre.question5.value);
    var a6 = parseInt(document.forms.quizpre.question6.value);
    var a7 = parseInt(document.forms.quizpre.question7.value);
    var a8 = parseInt(document.forms.quizpre.question8.value);
    var a9 = parseInt(document.forms.quizpre.question9.value);
    var a10 = parseInt(document.forms.quizpre.question10.value);
    var a11 = parseInt(document.forms.quizpre.question11.value);

    var score = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11;


    alert( "Your score: " + score );


    if(score < 5) {
        $("#results1").css("display", "block");

    } else if(score >=5 && score <= 10){
        $("#results2").css("display", "block");

    } else if(score > 10){
        $("#results3").css("display", "block");

    }

    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox


}

