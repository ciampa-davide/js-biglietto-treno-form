
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


    if (età == "minorenne" ) {
      sconto= ((prezzo * 20) / 100);
      console.log(sconto);
      prezzoFinale= prezzo - sconto;
      console.log(prezzoFinale);
    }else if (età > "over65") {
      sconto= ((prezzo * 40) / 100);
      console.log(sconto);
      prezzoFinale= prezzo - sconto;
      console.log(prezzoFinale);
    }else{
      prezzoFinale = prezzo;
      console.log(prezzoFinale);
    }
    document.getElementById("treno").innerHTML= prezzoFinale.toPrecision (3);
  }
)
