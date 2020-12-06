window.onload = function() {

    const pressed = [];
    const secretCode = 'konami';

    window.addEventListener("keyup", function(e){
        pressed.push(e.key);
        console.log(pressed);
        pressed.splice(-secretCode.lenght -1, pressed.length - secretCode.length);

        if(pressed.join('').includes(secretCode)){
            console.log("DING, DING!!!");
        }
    })
}