onkeydown = event => {
    switch (event.key) {
        case '1':
            display(1);
            break;
        case '2':
            display(2);
            break;
        case '3':
            display(3);
            break;
        case '4':
            display(4);
            break;
        case '5':
            display(5);
            break;
        case '6':
            display(6);
            break;
        case '7':
            display(7);
            break;
        case '8':
            display(8);
            break;
        case '9':
            display(9);
            break;
        case '0':
            display(0);
            break;
        case 'Backspace':
            rem();
            break;
    
    }
}
function display(newValue) {
    let v = document.getElementById("scr");
    v.innerHTML += newValue;
}
function rem() {
    var v = document.getElementById("scr");
    var v1 = v.innerHTML.split("");
    if (v1.length > 0) {
        v1.pop();
        v.innerHTML = v1.join("");
    }
}


