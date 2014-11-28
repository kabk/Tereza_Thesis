console.log('Hello ');

//slow scroling



$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);
    return false;
});