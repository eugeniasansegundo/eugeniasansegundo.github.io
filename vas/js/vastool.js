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
        //console.log($(this).attr("id").substr(8,25));

        $('#'+$(this).attr("id").substr(8,25)).val(50).slider("refresh");

    });


    $('.next_button').click(function(){

        var inp = document.getElementById("get-files");
        
        if (currentid<inp.files.length-1){

            var r = confirm("Did you add a value for all the features for this speaker? Please do it before doing the next one");
            
            if (r==true) {
            
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


            var username = document.getElementById('username').value;

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
            alert("You have already finished evaluating all the files!! Here you have your results:"+results);

            //TO DO SERIALIZE TO CSV FUNCTION
            //https://stackoverflow.com/questions/45034346/html-form-into-csv-files-with-js-and-jquery
            
        }

        
    });


    $(document).on('change','#get-files' , function(){ 
    
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

