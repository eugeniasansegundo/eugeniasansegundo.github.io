/**
 * Created by FVV on 18/09/2016.
 */

$(document).ready(function(){

    $('#home').click(function () {
        $('#home-content').toggle();
    });

    $('#research').click(function () {
        $('#text-content').show();
        /*$('#research-content').show();*/

    });

    $('.wsite-menu-item-wrap').click(function(){
        $('.selected').removeClass("selected");
        $(this).toggleClass("selected");


    });

    $('.wsite-menu-item-wrap').mouseenter(function(){
        if ($(this).hasClass("selected")){
            /*do nothing*/
        }
        else {
            $(this).fadeTo('fast', 1);
            $(this).css('text-decoration', 'underline overline');
        }
    }) ;

    $('.wsite-menu-item-wrap').mouseleave(function(){
        if ($(this).hasClass("selected")){
            /*do nothing*/
        }
        else {
            $(this).fadeTo('fast', 0.5);
            $(this).css('text-decoration', 'none');
        }
    }) ;


});