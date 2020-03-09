console.log("succes geladen/ chargé avec succès/ successfully loaded");

// opdracht gegevens

var bedrijfsnaam = "Bryan-academie";
var straatnaam = "pikachu";
var straatnummer = "1";
var postcode = "3000";
var gemeente = "Leuven";
var btwplichtig = true;
var websiteadres = "www.itenzo.be";
var mailadres = "vsa.bryan@gmail.com";
var bedrijfadress = bedrijfsnaam + " " + straatnaam + " " + straatnummer + " " + postcode + " " + gemeente;

function myfuntion () {
    return bedrijfadress
}
document.getElementById("mijngegevens").innerHTML = myfuntion()

// opdracht btw cijfersGrote Markt

function bedrijfcode() {
var bedrijfslandcode = "be";
var landcodeuppercase  = bedrijfslandcode.toUpperCase();
var btwcijfers = "0999999999";
var btwnummer = landcodeuppercase + btwcijfers;
document.getElementById("btwnummer").innerHTML = " de BWT-nummer is :"+ " " + btwnummer;
}
bedrijfcode();

// opdracht datum

var vraagdatum = new Date();
var vaandag = vraagdatum.getDate() 
+ "/" + (vraagdatum.getMonth() + 1)
 + "/" + (vraagdatum.getFullYear());
 function toonDatum() {
     return vaandag
 }
 
 

 // opdracht array en switch
 var toonmonth = new Array ("January","februari","Maart","April","Mei","Juni","juli","Augustus","September",
 "Oktober","November","December") ;
            
 var month
 switch (vraagdatum.getMonth()) {
    case 0:
     month = toonmonth[0];
        break;
      case 1:
     month =  toonmonth[1];
        break;
      case 2:
     month =  toonmonth[2];
        break;
      case 3:
     month =  toonmonth[3];
        break;
      case 4:
     month =  toonmonth[4];
        break;
      case 5:
     month =  toonmonth[5];
        break;
      case  6:
     month =  toonmonth[6];
        break;
      case  7:
     month =  toonmonth[7];
        break;
      case  8:
     month =  toonmonth[8];
         break;
      case  9:
     month = toonmonth[9];
      break;
      case  10:
     month = toonmonth[10];
      break;
      case  11:
     month = toonmonth[11]; 
     break;
     default : "Sorry ik ben dom :) ";
    }




 // console log switch

 var day ;
 switch (new Date().getDay()) {
    case 0:
      day = "Zondag";
      break;
    case 1:
      day = "Maandag";
      break;
    case 2:
      day = "Dinsdag";
      break;
    case 3:
      day = "Woensdag";
      break;
    case 4:
      day = "Donderdag";
      break;
    case 5:
      day = "Vrijdag";
      break;
    case  6:
      day = "Zaterdag";
      break;
    default : "Sorry ik ben dom :) ";
  }

 console.log("eerste dag van de week: " + day);

document.getElementById("datumvandag").innerHTML = "Vandaag is " + day  + " " + vraagdatum.getDate()  
  + " "  + month + " " + vraagdatum.getFullYear();




  // landcodefunction()
  function landcodefunction () {
    var landcode = document.getElementById("mylandcode").value;
    document.getElementById("chooselandcode").innerHTML = "De landcode is " + landcode ;
    console.log("de landcode is " + landcode)

  }


  // teste
function landcodekies() {
  if (document.getElementById("btwland").value === "Belgium") {
    toastr.success("good gedaan");

  } else if (document.getElementById("btwland").value === "Oostenrijk") { 
    toastr.success("good gedaan");

  } else { toastr.error("niet good")
  

  }
  
} 

// script voor modal bedrijf
function modalbedrijf() {
  var modalland = document.getElementById("modalbedrijfname").value;
  var modalnummer = document.getElementById("modalstraatnummer").value;
  var modalpizza = document.getElementById("modalpizza-slice").value;
  var modalstraat = document.getElementById("modalstraatname").value;
  var modalgemeente = document.getElementById("modalgemeente").value;
  if (modalland === bedrijfsnaam && modalnummer === straatnummer && modalpizza === "chocopizza" && modalstraat === straatnaam && modalgemeente === gemeente){
    toastr.success("login successfull")
  } else if( modalland == length == '0') {
    toastr.warning("bim")

  } else {
    toastr.error("the secret password , the bedrijf name of de straat name is niet goed","ERROR")
  }
}



function modalbtwnummer() {
  var modalbtwland = document.getElementById("modalbtwland").value
  var modalbtwnummer = document.getElementById("modalbtwnummer").value

    switch (true) {

      case (modalbtwland === "België" && modalbtwnummer.length == 10 ) :
        toastr.success("perfect");
       document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " +  "BE" + " " + modalbtwnummer;
        break;
        
      case (modalbtwland === "Oostenrijk" && modalbtwnummer.length == 8) : /*8cijfers */
        toastr.success("perfect");
        document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " + "AT" + " " + modalbtwnummer.toUpperCase();
        break;

      case (modalbtwland === "Estland" && modalbtwnummer.length == 9) : /*9cijfers */
        toastr.success("perfect");
        document.getElementById("showbtw").innerHTML = " the btw-nummer is" + " " + "EE" + " " + modalbtwnummer;
        break;
     
      case (modalbtwland === "Italië" && modalbtwnummer.length == 11) : /* 11cijfers*/ 
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





