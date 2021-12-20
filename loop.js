function sayHello() {
    let nbr = document.getElementById("nbr").value;
    var sum = 0;
    for (var i = 0; i <= nbr; i++) {
        sum += i;
    }
    document.getElementById("demo").innerHTML = sum;
}