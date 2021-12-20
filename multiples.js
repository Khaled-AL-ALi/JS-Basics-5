function sayHello() {
    let nbr = document.getElementById("nbr").value;
    var sum = 0;
    for (var i = 0; i <= nbr; i++) {
        if(i%3==0 || i%5==0){
            sum +=i
        }
    }
    document.getElementById("demo").innerHTML = sum;
}