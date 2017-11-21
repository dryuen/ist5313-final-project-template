function processQuiz()
{
	var answer 1 = docunment.forms.quiz1.questions1. value; 3
	var answer 2 = docunment.forms.quiz1.questions2. value; 1
	var answer 3 = docunment.forms.quiz1.questions3. value; 3
	var answer 4 = docunment.forms.quiz1.questions4. value; 3
	var answer 5 = docunment.forms.quiz1.questions5. value; 1
	var answer 6 = docunment.forms.quiz1.questions6. value; 2
	var answer 7 = docunment.forms.quiz1.questions7. value; 3
	var answer 8 = docunment.forms.quiz1.questions8. value; 2
	var answer 9 = docunment.forms.quiz1.questions9. value; 0
	var answer 10 = docunment.forms.quiz1.questions10. value; 1
	
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

// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores()
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}


var visitTopic1 = 0;
var visitTopic2 = 0;
var visitTopic3 = 0;
var visitTopic4 = 0;
var visitTopic5 = 0;
var visitTopic6 = 0;


function visitTopic1()
{
}
sessionStorage.setItem( "topic1", "visited" );

function visitTopic2()
{
}
sessionStorage.setItem( "topic2", "visited" );

function visitTopic3()
{
}
sessionStorage.setItem( "topic3", "visited" );

function visitTopic4()
{
}
sessionStorage.setItem( "topic4", "visited" );

function visitTopic5()
{
}
sessionStorage.setItem( "topic5", "visited" );

function visitTopic6()
{
}
sessionStorage.setItem( "topic6", "visited" );
