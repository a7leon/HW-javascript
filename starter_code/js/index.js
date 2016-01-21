

$( document ).ready(function() {
        console.log( "document loaded" );
   


function downPost() {

	event.preventDefault();
	$('#show-this-on-click').slideDown()
	$('.readmore').hide()
	$('.readless').show()
	
	
}

function upPost() {

	event.preventDefault();
	$('#show-this-on-click').slideUp()
	$('.readless').hide()
	$('.readmore').show(500)
}

function slideLearn() {

	event.preventDefault();
	$('#learnmoretext').slideDown()
	$('.learnmore').hide()


}

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
