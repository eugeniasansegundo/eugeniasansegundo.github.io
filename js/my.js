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

    $('.wsite-menu-item-wrap').mouseenter(function(){
        $(this).fadeTo('fast',1);
    })
    ;

});