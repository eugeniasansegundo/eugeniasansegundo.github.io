/**
 * Created by FVV on 18/09/2016.
 */

$(document).ready(function(){

    var currentid =0;
    var inp = document.getElementById("get-files");
    var audiofiles=null;
    var results = "";


    
    $('.refresh_button').click(function(){
        //$(this).siblings().toggle('slow');
        //$('#labial').set(50);
		//console.log($(this).attr("id"));
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

        var inp = document.getElementById("get-files");
        
        if (currentid<inp.files.length-1){

        var encoded = "&#191;Has evaluado los 10 ajustes de este hablante? Hazlo antes de pasar al siguiente hablante";
        var decoded = $("<div/>").html(encoded).text();
		
            var r = confirm(decoded);
            
            if (r==true) {

            $form = document.getElementById('myForm')
            exportTableToCSV.call(this, $form, 'export.csv');
            
            console.log("Total files: "+ inp.files.length);
            console.log("Previous id: "+ currentid);
            console.log("Previous id: "+ currentid + " - File:"+inp.files[currentid].name);
            currentid++;
            console.log("Playing next id: " + currentid + " - File:"+inp.files[currentid].name);
        
            var audio = document.getElementById('player');
            audio.src = URL.createObjectURL(inp.files[currentid]);
            audio.load();
            audio.play();
            document.getElementById("playing").setAttribute('value', inp.files[currentid].name);


            //var username = document.getElementById('username').value;

            //Old reset code - Not needed
            //document.getElementById('myForm').reset();
            //document.getElementById('username').setAttribute('value', username);
            //we reset all the sliders


            $('#voice_type').val(50).slider("refresh");
            $('#laryngeal_tension').val(50).slider("refresh");
            $('#vocal_tract_tension').val(50).slider("refresh");
            $('#laryngeal').val(50).slider("refresh");
            $('#pharyngeal').val(50).slider("refresh");
            $('#velo').val(50).slider("refresh");
            $('#dorsal').val(50).slider("refresh");
            $('#apical').val(50).slider("refresh");
            $('#mandibular').val(50).slider("refresh");
            $('#labial').val(50).slider("refresh");

            results += $("form").serialize();
            console.log(results);

            
            }
    
            else {
                    //Do nothing
            }
        }
        else{

            alert("Has terminado!"+results);

            //TO DO SERIALIZE TO CSV FUNCTION
            //https://stackoverflow.com/questions/45034346/html-form-into-csv-files-with-js-and-jquery
            
        }

        
    });


    $(document).on('change','#get-files' , function(){ 
    
        var inp = document.getElementById("get-files");

        console.log("file input changed");
        if (inp.files.length>0)
        {
        console.log(inp.files.length+ " files uploaded");
        console.log(inp.files[0]);
        audiofiles=inp.files;
        
        var audio = document.getElementById('player');
        var source = document.getElementById('wavsource');
        audio.src = URL.createObjectURL(audiofiles[0]);
        audio.load();
        audio.play();
        document.getElementById("playing").setAttribute('value', audiofiles[0].name);
        
        }
        
    
    
    });


});

function hideInputFields()
{

console.log(document.getElementsByClassName('ui-slider-input')[0].style.visibility);

    if(document.getElementsByClassName('ui-slider-input')[0].style.visibility=='visible' || document.getElementsByClassName('ui-slider-input')[0].style.visibility=='')
    {
    document.getElementsByClassName('ui-slider-input')[0].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[1].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[2].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[3].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[4].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[5].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[6].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[7].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[8].style.visibility='hidden';
    document.getElementsByClassName('ui-slider-input')[9].style.visibility='hidden';
	
	return;
    }

    else(document.getElementsByClassName('ui-slider-input')[0].style.visibility=='hidden')
    {
    document.getElementsByClassName('ui-slider-input')[0].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[1].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[2].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[3].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[4].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[5].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[6].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[7].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[8].style.visibility='visible';
    document.getElementsByClassName('ui-slider-input')[9].style.visibility='visible';
    }

}

function exportTableToCSV($form, filename) {

    
    var str="";
    var namestr="";
    var valuestr="";
    var flds = $form.elements;
    var csvFld=null;
    var playing = flds["playing"].value;
    namestr="playing,";
    valuestr=playing+ ",";
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
