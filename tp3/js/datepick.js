$(document).ready(function(){

var d = new Date();
var mois = d.getMonth()+1;
var jour = d.getDate();
var année = d.getFullYear();
var jourcourant = jour + '/' + mois + '/' + année;

    $("#dn").datepicker({dateFomat: 'dd/mm/yy',
    maxDate: 'jourcourant'

});
});