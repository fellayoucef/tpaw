$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
            $(document).keyup(function(){

                valid = true ;
                if($("#nom").val() == "" ){
                    $("#nom").addClass("is-invalid");
                    valid=false;
                }
                else{
                    $("#nom").addClass("is-valid");
                }
                if($("#prenom").val() == "" ){
                    $("#prenom").addClass("is-invalid");
                    valid=false;
                }
                else{
                    $("#prenom").addClass("is-valid");
                }
                if($("#date").val() == "" ){
                    $("#date").addClass("is-invalid");
                    valid=false;
                }
                else{
                    $("#date").addClass("is-valid");
                }
                if($("#adresse").val() == "" ){
                    $("#adresse").addClass("is-invalid");
                    valid=false;
                }
                else{
                    $("#adresse").addClass("is-valid");
                }
                if($("#mail").val() == "" ){
                    $("#mail").addClass("is-invalid");
                    valid=false;
                }
                else{
                    $("#mail").addClass("is-valid");
                }

                return valid;

            });


    $("#formulaire").submit(function(event){
event.preventDefault();
         if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#date").val() !== "" 
         && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
            
              $("#myModal").modal("show");
              $(".modal-body").html('\<a href="https://www.google.com/maps/place/Paris/@48.8587741,2.2069771,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219"\>\<img src="staticmap.png" \>\<\/a\>');
              
              $(".modal-title").text("Bienvenue" );
                
        }

    });
    
    

});
