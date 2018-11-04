$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
            $(document).keyup(function(){

                valid = true ;
                if($("#nom").val() == "" ){
                    $("#nom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#nom").css("border-color","#48DE14");
                }
                if($("#prenom").val() == "" ){
                    $("#prenom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#prenom").css("border-color","#48DE14");
                }
                if($("#date").val() == "" ){
                    $("#date").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#date").css("border-color","#48DE14");
                }
                if($("#adresse").val() == "" ){
                    $("#adresse").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#adresse").css("border-color","#48DE14");
                }
                if($("#mail").val() == "" ){
                    $("#mail").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#mail").css("border-color","#48DE14");
                }

                return valid;

            });


    $("#envoyer").click(function(){

         if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#date").val() !== "" 
         && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
            
              $("#myModal").modal("show");
              $(".modal-title").html("Bienvenue");
                
        }

    });
    

});
