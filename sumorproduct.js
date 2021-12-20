
function Sum() {
    let nbr = document.getElementById("nbr").value;
    var sum = 0;
    for (var i = 0; i <= nbr; i++) {
        sum += i;
    }
    document.getElementById("demo").innerHTML = sum;
}

function prod() {
    let nbr = document.getElementById("nbr").value;
    var sum = 1;
    for (var i = 1; i <= nbr; i++) {
        sum *= i;
    }
    document.getElementById("demo").innerHTML = sum;
}
