let nextEl = document.getElementById("next-el");
let stitchEl = document.getElementById("stitch-el");
let increaseS = 0;
let decreaseS = 0;
let singleS = 0;
let entry = "";

function single() {
    decreaseS=0
    increaseS = 0

    if(singleS != 0){
        removespace();
        singleS += 1;
        entry = entry.split(" ");
        let length = entry.length;
        console.log(entry);
        if (length<2){
            entry = "";
        }else{
            entry = entry.slice(0,length-2).join(" ");
        }
        addspace()
        entry += singleS + " SS";
        
        
    } else {
        singleS += 1;
        entry += singleS + " SS"   ;
        
    }
    addspace();
    stitchEl.textContent = entry
}

function increasing(){
    singleS = 0
    decreaseS = 0

    

    if(increaseS != 0){
        removespace();
        increaseS += 1
        entry = entry.split(" ")
        console.log(entry)
        let length = entry.length
        if (length<2){
            entry = " "
        }else{
            entry = entry.slice(0,length-2).join(" ")
        }
        addspace();
        entry += increaseS + " IncS"
        
        
    } else {
        increaseS += 1
        entry += + increaseS + " IncS"   
        
    }

    addspace();
    stitchEl.textContent = entry
}

function decreasing(){

    singleS = 0
    increaseS = 0

    

    if(decreaseS != 0){
        removespace();
        decreaseS += 1
        entry = entry.split(" ")
        console.log(entry)
        let length = entry.length
        if (length<2){
            entry = " "
        }else{
            entry = entry.slice(0,length-2).join(" ")
        }
        addspace();
        entry += decreaseS + " DecS"
        
        
    } else {
        decreaseS += 1
        entry += + decreaseS + " DecS"   
        
    }

    addspace();
    stitchEl.textContent = entry

}

function next() {
    let countStr = "- " + entry;
    nextEl.innerHTML += countStr + "<br />";
    stitchEl.textContent = 0
    entry = ""
    increaseS = 0
    singleS = 0
    decreaseS = 0
}

function removespace(){
    entry = entry.split(" ");
    let length = entry.length;
    entry = entry.slice(0,length-1).join(" ")
}

function addspace(){
    entry += " "
}