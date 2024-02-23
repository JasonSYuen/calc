function num_input(num) {
    //console.log(num);
    display = display.concat("", num)
    //arr.push(num);
    show()
    //console.log(display);

    last = "num";
}

function operation_input(op) {
    document.getElementById("/").style.backgroundColor = "green";
    document.getElementById("x").style.backgroundColor = "green";
    document.getElementById("-").style.backgroundColor = "green";
    document.getElementById("+").style.backgroundColor = "green";
    if (op != "=" && op != "c") {

        document.getElementById(op).style.backgroundColor = "blue";
    }
    if (op == 'c') {
        display = "";
        last = "";
        isOp = false;
        isDecimal = false;
    }
    else if (last == "num") {
        //console.log(op);
        if (op == "=") {
            if (isOp == true) {
                calculate()
                console.log("a")
                last = "num"
                isDecimal = true;
            }
            else if (isOp == false) {
                stored();
                last = "num"
                isDecimal = true;

            }
            isOp = false;

        }
        else if (isOp == true) {
            calculate()
            display = display.concat(" ", op, " ")
            console.log("a")
            isDecimal = false;
            last = "op"
        }
        else {
            display = display.concat(" ", op, " ")
            isOp = true;
            //display()
            console.log("a")
            isDecimal = false;
            last = "op"
        }

        //console.log(count, ": count")
    }
    else if (last == "op" && op != "=") {

        display = display.slice(0, display.length - 3)
        display = display.concat(" ", op, " ")

    }
    show()
    console.log(isOp);
    console.log(last);

}

function dec_input(dec) {
    if (isDecimal == false) {
        console.log(dec);
        display = display.concat("", dec)
        show()
        isDecimal = true;
        last = "dec";
    }
}

function show() {
    document.getElementById("display").innerHTML = display
}

function calculate() {
    const arr = display.split(' ');
    if (arr[1] == "+") {
        n = (parseFloat(arr[0]) + parseFloat(arr[2])).toFixed(4)
    }
    else if (arr[1] == "-") {
        n = (parseFloat(arr[0]) - parseFloat(arr[2])).toFixed(4)
    }
    else if (arr[1] == "/") {
        n = (parseFloat(arr[0]) / parseFloat(arr[2])).toFixed(4)
    }
    else if (arr[1] == "x") {
        n = (parseFloat(arr[0]) * parseFloat(arr[2])).toFixed(4)
    }
    store = [0, arr[1], arr[2]];

    display = n.toString();

}

function stored() {
    const arr = display.split(' ');
    if (store[1] == "+") {
        n = (parseFloat(arr[0]) + parseFloat(store[2])).toFixed(4)
    }
    else if (store[1] == "-") {
        n = (parseFloat(arr[0]) - parseFloat(store[2])).toFixed(4)
    }
    else if (store[1] == "/") {
        n = (parseFloat(arr[0]) / parseFloat(store[2])).toFixed(4)
    }
    else if (store[1] == "x") {
        n = (parseFloat(arr[0]) * parseFloat(store[2])).toFixed(4)
    }

    display = n.toString();

}

var display = "";
var last = "";
var isDecimal = false;
var isOp = false;
var store = ["+", "0"];




