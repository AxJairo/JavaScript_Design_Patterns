function count(){
    var contador = 1;
    const elem = document.getElementById("cat");
    elem.addEventListener("click", function(){
    document.getElementById("counter").innerHTML = contador;
    contador ++;
    }, false);
};