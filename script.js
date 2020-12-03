window.onload = function() {

    let keyPress = [];

    window.addEventListener("keyup", function(e){
        if(e.key === "ArrowUp"){
            keyPress.push(e.key);
        }
        if(e.key === "ArrowDown"){
            keyPress.push(e.key);
        }
        if(e.key === "ArrowRight"){
            keyPress.push(e.key);
        }
        if(e.key === "ArrowLeft"){
            keyPress.push(e.key);
        }
    })
}