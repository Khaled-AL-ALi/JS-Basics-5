
function sayHello() {
    var counter = 1;
    var table = [];
    for (var i = 1; i <= 12; i++) {
        table.push(counter + ':')
        for (var j = 1; j <= 12; j++) {
            table.push(j * i);
            table.slice(",");
        } 
        counter++;
      
    }
    document.getElementById("demo").innerHTML = table;
}


