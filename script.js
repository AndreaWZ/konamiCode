window.onload = function() {

    const pressed = [];
    const secretCode = 'konami';

    window.addEventListener("keyup", function(e){
        pressed.push(e.key);
        pressed.splice(-secretCode.lenght -1, pressed.length - secretCode.length);

        if(pressed.join('').includes(secretCode)){
            cornify_add();
        }
    })
}