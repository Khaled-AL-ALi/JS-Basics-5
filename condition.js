function sayHello(){
    let name =document.getElementById("name").value;
    if (name == "Alice" || name== "Bob"){
    document.getElementById("demo").innerHTML="hello " + name;}
    else{ document.getElementById("demo").innerHTML="hello strenger";}

}