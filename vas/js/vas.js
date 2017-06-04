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

    $('.refresh_button').click(function(){
        //$(this).siblings().toggle('slow');
        //$('#labial').set(50);
        //console.log($(this).attr("id").substr(8,25));

        $('#'+$(this).attr("id").substr(8,25)).val(50).slider("refresh");

    });



});