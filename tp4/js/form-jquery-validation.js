
$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
     //ajout du compteur de nombre de caractéres pour chaque champ
            $(document).keyup(function(){

    var nombreCaractere = $("#nom").val().length;
    var msg = '|' + " " + nombreCaractere + ' Caractere(s)';
    $('#compteur1').text(msg);

    var nombreCaractere = $("#prenom").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur2').text(msg);

    var nombreCaractere = $("#dn").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur3').text(msg);

    var nombreCaractere = $("#adresse").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur4').text(msg);
    
    var nombreCaractere = $("#mail").val().length;
    var msg = '|' + " "+ nombreCaractere + ' Caractere(s)';
    $('#compteur5').text(msg);

    // validation des champs avec un minimum de 5 caractéres
    

                valid = true ;
                if($("#nom").val().length < 5 ){
                    $("#nom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#nom").css("border-color","#48DE14");
                }
                if($("#prenom").val().length < 5 ){
                    $("#prenom").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#prenom").css("border-color","#48DE14");
                }
                if($("#dn").val().length < 5 ){
                    $("#date").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#dn").css("border-color","#48DE14");
                }
                if($("#adresse").val().length < 5 ){
                    $("#adresse").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#adresse").css("border-color","#48DE14");
                }
                if($("#mail").val().length < 5 ){
                    $("#mail").css("border-color","#ff0000");
                    valid=false;
                }
                else{
                    $("#mail").css("border-color","#48DE14");
                }

                return valid;

            });


    $("#formulaire").submit(function (event) { 
        event.preventDefault();
        
    
         if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#dn").val() !== "" 
         && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
            
           
                
        }
        
    });
    

});