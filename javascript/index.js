
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
