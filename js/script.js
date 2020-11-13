
var sconto;
var prezzoFinale;

var btnGenera= document.getElementById("genera");
btnGenera.addEventListener("click",
  function(){
    var km = document.getElementById("km").value;
    console.log(km);

    var anni= document.getElementById("eta").value;
    console.log(anni);

    var prezzoAlKm= 0.21;
    var prezzo= km * prezzoAlKm;
    console.log(prezzo);


    if (anni == "minorenne" ) {
      sconto= ((prezzo * 20) / 100);
      console.log(sconto);
      prezzoFinale= prezzo - sconto;
      console.log(prezzoFinale);
      document.getElementById("offerta").innerHTML="sconto minorenni";
    }else if (anni == "over65") {
      sconto= ((prezzo * 40) / 100);
      console.log(sconto);
      prezzoFinale= prezzo - sconto;
      console.log(prezzoFinale);
      document.getElementById("offerta").innerHTML="sconto silver";
    }else{
      prezzoFinale = prezzo;
      console.log(prezzoFinale);
      document.getElementById("offerta").innerHTML="Offerta standard";
    }

    document.getElementById("prezzofinale").innerHTML= prezzoFinale.toPrecision (3) + ("€");

    var nomeUtente= document.getElementById("nome").value;
    document.getElementById("nomeBiglietto").innerHTML=nomeUtente;

    var cp=Math.floor(Math.random()*99999);
    document.getElementById("codice").innerHTML=cp;

    var vagone=Math.floor(Math.random()*10) + 1;
    document.getElementById("carrozza").innerHTML=vagone;

    var hidden= document.getElementById("stampa_biglietto");
    hidden.classList.remove("hidden_first");
    hidden.classList.add("show_after");


  }
)
var btnAnnulla= document.getElementById("annulla");
btnAnnulla.addEventListener("click",
  function(){
    document.getElementById("nome").value=" ";
    document.getElementById("km").value="";
    document.getElementById("eta").value="";
    document.getElementById("offerta").innerHTML="";
    document.getElementById("nomeBiglietto").innerHTML="";
    document.getElementById("codice").innerHTML="";
    document.getElementById("carrozza").innerHTML="";
    document.getElementById("prezzofinale").innerHTML="";
  }
)
