$(function(){

    $('.sp-flow-content-item').click(function(){
        if ($(this).find('.sp-flow-content-item-text').hasClass('open')){
            $(this).find('.sp-flow-content-item-text').removeClass('open');
            $(this).find('.sp-flow-content-item-text').slideUp();
            $(this).find('.fa-angle-up').hide();
            $(this).find('.fa-angle-down').show();
        } else{
            $(this).find('.sp-flow-content-item-text').addClass('open');
            $(this).find('.sp-flow-content-item-text').slideDown();
            $(this).find('.fa-angle-up').show();
            $(this).find('.fa-angle-down').hide();

          }
    });

    $('.question-content-items').click(function(){
        if ($(this).find('.question-content-items-answer').hasClass('open')){
            $(this).find('.question-content-items-answer').removeClass('open');
            $(this).find('.question-content-items-answer').slideUp();
            $(this).find('.fa-angle-up').hide();
            $(this).find('.fa-angle-down').show();
        } else{
            $(this).find('.question-content-items-answer').addClass('open');
            $(this).find('.question-content-items-answer').slideDown();
            $(this).find('.fa-angle-up').show();
            $(this).find('.fa-angle-down').hide();

          }
    });



    
    $('#pageTop').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('#pageTop').fadeIn();
        } else{
            $('#pageTop').fadeOut();
        }
    });

    $('#pageTop').click(function(){
        $('body,html').animate({
            scrollTop: 0},500);
            return false;

    });
});
