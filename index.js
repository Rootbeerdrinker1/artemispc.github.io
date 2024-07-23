var b = document.getElementById("contprebuilt");
var w = document.getElementById("contprebuiltwhite");

function blackwhitetoggle(){
    
    if (b.style.display == "flex") {
        w.style.display = "flex";
        b.style.display = "none";
        
    } else {
        b.style.display = "flex";
        w.style.display = "none";
        
    }
  } 