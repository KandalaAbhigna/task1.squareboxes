function showBoxes() {
    var x = parseInt(document.getElementById("numberInput").value);
  
    if (isNaN(x) || x < 1) {
      alert("Please enter a valid whole number greater than 0.");
      return;
    }
  
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
  
    page1.style.display = "none";
    page2.style.display = "block";
  
    var container = document.getElementById("boxContainer");
    container.innerHTML = "";
  
    var numCols = Math.ceil(Math.sqrt(x));
    
   
   
    const height=900;
     const width=1200;
    let s =Math.ceil(Math.sqrt((height*width)/x));
    console.log("side",s);
    let count=0;

    /*for (var i = 0; i < x; i++) {
      var box = document.createElement("div");
      box.className = "box";
      container.appendChild(box);
    }*/
    for (var i = 0; i < x; i++) {
      var box = document.createElement("div");
      if(x===1){
      box.className = "box1";
      container.appendChild(box);
      break;
      }
      else{
        var box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
        box.setAttribute('id', 'boxes'+i)
        document.getElementById('boxes'+i).style.width= s;

        document.getElementById('boxes'+i).style.width= s+'px';
      
         console.log("width",document.getElementById('boxes'+i).style.width= s+'px')

      
        
        // if(count==numCols){
        //   count=0;
        //   console.log("\n");
        // }
        // else{
        //   count=+1;
        //   container.appendChild(box);
        //   box.setAttribute('id', 'boxes'+i)
        //  document.getElementById('boxes'+i).style.width= s+'px';
        // console.log("width",document.getElementById('boxes'+i).style.width= s+'px')
        // document.getElementById('boxes'+i).style.height= s+'px';
        // console.log("height",document.getElementById('boxes'+i).style.height= s+'px')
//         }
        
        continue;
    
                
       
        // start
        

        // document.getElementById('boxes'+i).style.width= s;
        // console.log("width",document.getElementById('boxes'+i).style.width= s)

        // document.getElementById('boxes'+i).style.height=s;
// end


        // document.getElementById('boxes'+i).style.height=height*width;
        // document.getElementById('boxes'+i).style.width=height*width;

      
        
      }

    }

     container.style.gridTemplateColumns = "repeat(" + numCols + ", 1fr)";
      container.style.gridTemplateRows = "repeat(" + numRows + ", 1fr)";

    
  }
  