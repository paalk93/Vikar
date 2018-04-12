
  function progressBar() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

function pyramid(){
  for (var currentHeight = 0; currentHeight <= 10; currentHeight++){
    var thisLevel = "";
  for (var i = 0; i < 21; i++){
    if (i < 10 - currentHeight){
      thisLevel = thisLevel + " "
    }
    else if (i > 10 + currentHeight){
      thisLevel = thisLevel + " "
    }
    else{
      thisLevel = thisLevel +"#";
    }
  }
  console.log(thisLevel)
  }
}


var myList = ["Buy games", "Play games", "Win games"];

function consoleLog(){
for (var i = 0; i < myList.length; i++){
  console.log(myList[i]);
}
}

function removeList(){
  myList.splice(-1,1);
  printList()
}

function pushList(){
  myList.push(document.getElementById("list").value)
  printList()
}

function printList(){
  if(myList.length == 0){
    myList = ["Buy games", "Play games", "Win games"];
  }
  var listeContainer = document.getElementById('print');
  listeContainer.innerHTML = '';
  for (var i = 0; i < myList.length; i++){
    var listeItem = myList[i];
    //var element = document.createElement('li');
    //element.innerHTML = listeItem;
     listeContainer.innerHTML += '<li>' + listeItem + '</li>';
    //element.className = "notdone";
    //listeContainer.appendChild(element);

  }

//  consoleLog();
}
