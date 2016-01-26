/*
    Hi Alexandra!  I will be including feedback about your code in Javascript comments like this one.

    Overall, good job here!  A few overall comments:

    - Pay attention to your syntax.  Make sure every line of Javascript ends with a semi-colon.  Granted,
    it does work without the semi-colons in most browsers, but older browsers (ex. IE) get cranky if the
    syntax is not exactly correct.

    - Make sure your indenting is consistant.

    - Great organization of the code here!  I like how you have your functions grouped together and your
    click events grouped together.
*/

$( document ).ready(function() {
        console.log( "document loaded" );
   

/*
    All of these functions look great!  Just one style note - watch how many line breaks you put in
    between lines, etc.  Any number is fine, but stylistically, it is best to be consistent.
*/

function downPost() {

    // Great use of event.preventDefault().  
    // Don't forget to pass event as an argument to the function. As we found in class, some browsers require it.
	event.preventDefault();
	$('#show-this-on-click').slideDown()
	$('.readmore').hide()
	$('.readless').show()
	
	
}

function upPost() {

	event.preventDefault();
	$('#show-this-on-click').slideUp()
	$('.readless').hide()
	$('.readmore').show(500)  // Great find re: passing an argument to control the animation length!
}

function slideLearn() {

	event.preventDefault();
	$('#learnmoretext').slideDown()
	$('.learnmore').hide()


}

/* All of these click events look great! */

$('.readmore').click(downPost);
$('.readless').click(upPost);
$('.learnmore').click(slideLearn);

 });

	/*

	$('p', this).slideDown

  $('p', this).slideToggle();
  }

  $('p').hide();
  $('div').click(ReadMore);
}

$.slideDown() */
