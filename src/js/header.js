$(document).ready(function(){
    // $('#header').css('background', 'none');
    $('.nav-link').css('color','rgb(199, 199, 199)');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#header').css('background', 'rgb(225, 225, 225)');
            $('.nav-link').css('color','black');
        } else {
            $('#header').css('background', 'none');
            $('.nav-link').css('color','rgb(199, 199, 199)');
        }
        
    });
}
);