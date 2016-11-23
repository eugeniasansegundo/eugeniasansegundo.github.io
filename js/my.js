/**
 * Created by FVV on 18/09/2016.
 */

$(document).ready(function(){

    /*$('#home').click(function () {
        $('#home-content').toggle();
    });

    $('#research').click(function () {
        $('#text-content').show();
    });*/

    $('.publis-title').click(function(){
        $(this).siblings().toggle('slow');

    });

    $('.expand-button').click(function(){
            var src = ($(this).attr('src') === 'img/collapse-button.png')
            ? 'img/expand-button.png'
            : 'img/collapse-button.png';
        $(this).attr('src', src);
    });

    $('.wsite-menu-item-wrap').click(function(){
        /*navbar menu highlight*/
        $('.selected').fadeTo('slow', 0.5);
        $('.selected').css('text-decoration', 'none');
        $('.selected').removeClass("selected");
        $(this).toggleClass("selected");

        /*actual content being displayed*/
        var option = $(this).attr('id');
        var content_option = '#'+ option + "-content";
        $('.active').toggle();
        $('.active').removeClass("active");
        $(content_option).addClass("active");
        $(content_option).toggle();
        console.log(content_option);



    });

    $('.wsite-menu-item-wrap').mouseenter(function(){
        if ($(this).hasClass("selected")){
            /*do nothing*/
        }
        else {
            $(this).fadeTo('slow', 1);
            $(this).css('text-decoration', 'underline overline');
        }
    }) ;

    $('.wsite-menu-item-wrap').mouseleave(function(){
        if ($(this).hasClass("selected")){
            /*do nothing*/
        }
        else {
            $(this).fadeTo('slow', 0.5);
            $(this).css('text-decoration', 'none');
        }
    }) ;


    var words = [
        {text: "Lorem", weight: 13},
        {text: "Ipsum", weight: 10.5},
        {text: "Dolor", weight: 9.4},
        {text: "Sit", weight: 8},
        {text: "Amet", weight: 6.2},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
        /* ... */
    ];

    $('#keywords').jQCloud(words, {
        width: $('#keywords').width(),
        height: $('#keywords').height()
    });


});