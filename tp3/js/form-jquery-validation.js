$( document).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );

     
     var rules = {

        nom:{
             required: true
         },
         messages: {
            nom: {
                required: "vous devez entrée votre nom"
            }
        },
        prenom:{
            required: true
        },
        messages: {
            prenom: {
                required: "vous devez entrée votre prénom"
            }
        },
        date:{
            required: true
        },
        messages: {
            date: {
                required: "vous devez entrée votre date de naissance"
            }
        },
        adresse:{
            required: true
        },
        messages: {
            adresse: {
                required: "vous devez entrée votre adresse"
            }
        },
        mail:{
            required: true
        },
        messages: {
            mail: {
                required: "vous devez entrée un mail valide "
            }
        },
        
        
     }

     
 });