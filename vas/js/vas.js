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

    $(".export").on('click', function(event) {
        // CSV
        $form = document.getElementById('myForm')
        exportTableToCSV.call(this, $form, 'export.csv');
  
        
        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
      });

    
    
    $('.next_button').click(function(){


        var r = confirm("Did you send the values for this speaker? Please do it before doing the next one");

        if (r==true) {

            var username = document.getElementById('username').value;

            console.log(username);
            document.getElementById('myForm').reset();

            document.getElementById('username').setAttribute('value', username);


            var audio = document.getElementById('player');
            var source = document.getElementById('wavsource');


            //console.log(source.getAttribute('src'));
            //console.log(audio.src);

            var currentfile = parseInt(source.getAttribute('src').substr(4, 6));

            var newsource = 0;
            if (currentfile == 24) {
                newsource = 1;
            }
            else {
                newsource = currentfile + 1;
            }

            var newfile = 'aud/' + newsource + '.wav'
            //console.log('current: ' +currentfile);
            //console.log(newfile);
            source.setAttribute('src', newfile);
            audio.load();
            audio.play();


            document.getElementById("playing").setAttribute('value', newsource + '.wav');

        }

        else {

        }




    });




});

function exportTableToCSV($form, filename) {

    
    var str="";
    var namestr="";
    var valuestr="";
    var flds = $form.elements;
    var csvFld=null;
        for (fx=0; fx < flds.length; fx++) {
            var fld = flds[fx];
            if (fld.type == "button") { continue; }
            var fldName  = fld.getAttribute("name");
            var fldValue = fld.value;
            if ((fld.type=="radio") || (fld.type == "checkbox")) {
                if (!fld.checked) { continue; }
            }
            if (fld.type=="select") {
                if (!fld.selected) { continue;}
            }
            if (fld.type=="text") {
                csvFld = fld;
                continue;
            }
            //str += fld.getAttribute("name") + ":" + fld.value + ",";
            if (fx == flds.length-1){
                namestr += fld.getAttribute("name");
                valuestr += fld.value;

            }
            else{
                namestr += fld.getAttribute("name") + ",";
                valuestr += fld.value + ",";

            }
            
        }
        //str = str.replace(/,$/,"");
        str = namestr+"\r\n"+valuestr;
        console.log(str);
        if (csvFld != null) {
            //csvFld.value = str;
            csvData  = 'data:application/csv;charset=utf-8,' + str;

            $(this)
      .attr({
        'download': filename,
        'href': csvData,
        'target': '_blank'
      });

        }


  }