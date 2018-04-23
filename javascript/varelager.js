 var vareLager = [
 {"id":1,"varenavn":"Tastatur","pris": 399,"antall":25},
 {"id":2,"varenavn":"Mus","pris":159,"antall":34},
 {"id":3,"varenavn":"Skjerm","pris":1999,"antall":17},
 {"id":4,"varenavn":"Musmatte","pris":49,"antall":73},
 {"id":5,"varenavn":"RedBull","pris":19,"antall":137}
 ]


function push(){
  var nyttObjekt = {
    "id":Number(document.getElementById("id").value),
    "varenavn": document.getElementById("varenavn").value,
    "pris": Number(document.getElementById("pris").value),
    "antall": Number(document.getElementById("antall").value),
  };
  vareLager.push(nyttObjekt)
  printTable();
}

function printTable(){
  var vareLagerContainer = document.getElementById('print');
  vareLagerContainer.innerHTML = '';

  for (var i = 0; i < vareLager.length; i++) {
    var vareObjekt = vareLager[i];

    var rad = document.createElement("tr");
    var id = document.createElement("td");
    var varenavn = document.createElement("td");
    var pris = document.createElement("td");
    var antall = document.createElement("td");
    var knapper = document.createElement("td");

    rad.appendChild(id);
    rad.appendChild(varenavn);
    rad.appendChild(pris);
    rad.appendChild(antall);
    rad.appendChild(knapper);

    id.innerText = vareObjekt.id;
    varenavn.innerText = vareObjekt.varenavn;
    pris.innerText = vareObjekt.pris;
    antall.innerText = vareObjekt.antall;
    vareLagerContainer.appendChild(rad);
  }
}

thId.addEventListener("click",sortId)
thNavn.addEventListener("click",sortNavn)
thPris.addEventListener("click",sortPris)
thAntall.addEventListener("click",sortAntall);

function sortAntall(){
  vareLager.sort(function (a, b) {
    if (a.antall > b.antall) {
      return 1;
    }
    else if (a.antall < b.antall) {
       return -1;
    }
      return 0;
     });
     printTable()
}
function sortPris(){
  vareLager.sort(function (a, b) {
    if (a.pris > b.pris) {
      return 1;
    }
    else if (a.pris < b.pris) {
       return -1;
    }
      return 0;
     });
     printTable()
}
function sortNavn(){
  vareLager.sort(function (a, b) {
    if (a.varenavn > b.varenavn) {
      return 1;
    }
    else if (a.varenavn < b.varenavn) {
       return -1;
    }
      return 0;
     });
     printTable()
}
function sortId(){
  vareLager.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    else if (a.id < b.id) {
       return -1;
    }
      return 0;
     });
     printTable()
}



function colorChange (){
  document.getElementsByClassName("bg-primary")[0].classList.add("bg-secondary");
  document.getElementsByClassName("bg-secondary")[0].classList.remove("bg-primary")
  //var element = document.querySelector("body");
  //element.className ="bg-secondary";
}
printTable();
