var contador = 1;


function putName(){
    const names = ["Grumpy" , "Orange"];
    document.getElementById("g").innerHTML = names[0];
    document.getElementById("o").innerHTML = names[1];
}

function getCats(){
    const elem = document.getElementsByClassName("cat");
    Array.from(elem).forEach(function(element) {
        element.addEventListener('click', count);
    });
}
    
function count(){
    document.getElementById("counter").innerHTML = contador;
    contador ++;
}

