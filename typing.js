// script to type text
var text = 'string';

// text is split up to letters
$.each(text.split(''), function(i, letter){

    // add 100*i ms delay to each letter 
    setTimeout(function(){

        // add the letter to the container
        $('html element').html($('html element').html() + letter);

    }, 100*i);
});