console.log("succes geladen/ chargé avec succès/ successfully loaded");

// opdracht gegevens
/*
var bedrijfsnaam = "Bryan-academie";
var straatnaam = "pikachu";
var straatnummer = "1";
var postcode = "3000";
var gemeente = "Leuven";
var btwplichtig = true;
var websiteadres = "www.itenzo.be";
var mailadres = "vsa.bryan@gmail.com";



// script voor modal bedrijf
function modalbedrijf() {
  var modalland = document.getElementById("modalbedrijfname").value;
  var modalnummer = document.getElementById("modalstraatnummer").value;
  var modalpostcode = document.getElementById("modalpostcode").value;
  var modalstraat = document.getElementById("modalstraatname").value;
  var modalgemeente = document.getElementById("modalgemeente").value;
  if (modalland === bedrijfsnaam && modalnummer === straatnummer && modalpostcode === postcode && modalstraat === straatnaam && modalgemeente === gemeente){
    toastr.success("login successfull");
    
  } else if( modalland == length == '0') {
    toastr.warning("probleem met gegevens")

  } else {
    toastr.error("the secret password , the bedrijf name of de straat name is niet goed","ERROR")
  }
}








// script modal btwnummer
function modalbtwnummer() {
  var modalbtwland = document.getElementById("modalbtwland").value
  var modalbtwnummer = document.getElementById("modalbtwnumbers").value

    switch (true) {

      case (modalbtwland === "België" && modalbtwnummer.length == 10 ) :
        toastr.success("perfect");
       document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " +  "BE" + " " + modalbtwnummer;
        break;
        
      case (modalbtwland === "Oostenrijk" && modalbtwnummer.length == 8) : 
        toastr.success("perfect");
        document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " + "AT" + " " + modalbtwnummer.toUpperCase();
        break;

      case (modalbtwland === "Estland" && modalbtwnummer.length == 9) : 
        toastr.success("perfect");
        document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " + "EE" + " " + modalbtwnummer;
        break;
     
      case (modalbtwland === "Italië" && modalbtwnummer.length == 11) : 
        toastr.success("perfect");
        document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " + "IT" + " " + modalbtwnummer;
        break;

      case (modalbtwland === "Open this select menu" && modalbtwnummer.length == 0) :
        toastr.warning(" Je hebt niet ingevuld en gekozen");
        document.getElementById("showbtw").innerHTML = "Er is een probleem met je gegevens";
        break;

      case (modalbtwland === "Open this select menu" && modalbtwnummer.length > 0) :
        toastr.warning(" Je hebt niet de land gekozen");
        document.getElementById("showbtw").innerHTML = "Er is een probleem met je gegevens";
        break;

      case (modalbtwland !== "" && modalbtwnummer.length == 0) :
        toastr.warning(" Je hebt niet de btw-nummer ingevuld");
        document.getElementById("showbtw").innerHTML = "Er is een probleem met je gegevens";
        break;

      default:
        toastr.error("probleme met de gegevens");
        document.getElementById("showbtw").innerHTML = "Er is een probleem met je gegevens";

    }
}


*/



var bedrijf= {
     naam:"VSA",
     straat : "Grote Markt",
     huisnummer : "1",
     postcode : "3000",
     gemeente : "Leuven"
};
var naamHTML = document.getElementById('modalbedrijfname');
var straatHTML = document.getElementById('modalstraatname');
var huisnummerHTML = document.getElementById('modalstraatnummer');
var postcodeHTML = document.getElementById('modalpostcode');
var gemeenteHTML = document.getElementById('modalgemeente');

function updatemodalBedrijfsgegeven(){
    naamHTML.value = bedrijf.naam;
    straatHTML.value = bedrijf.straat;
    huisnummerHTML.value = bedrijf.huisnummer;
    postcodeHTML.value = bedrijf.postcode;
    gemeenteHTML.value = bedrijf.gemeente;
}

function updateBedrijfsgegeven() {
bedrijf.naam = naamHTML.value;
console.log("De nieuw naam " + bedrijf.naam)
}



