
    

function blackwhitetoggle(){
    var b = document.getElementById("contprebuilt");
    var w = document.getElementById("contprebuiltwhite");
    
    if (b.style.display == "flex") {
        w.style.display = "flex";
        b.style.display = "none";
        
    } else {
        b.style.display = "flex";
        w.style.display = "none";
        
    }
  } 