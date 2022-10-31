const local = document.getElementsByName("lokasi")
function addLocation (){
    for (var i = 0, length = local.length; i < length; i++) {
        if (local[i].checked) {
          console.log(local[i].value);
          break;
        }
      }
}

document.addEventListener("DOMContentLoaded",function(){
    addLocation()
})