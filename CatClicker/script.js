const contador = [1, 1];

function putName(){
    const names = ["Grumpy" , "Orange"];
    document.getElementById("g").innerHTML = names[0];
    document.getElementById("o").innerHTML = names[1];
}

function getCatGrumpy(){
    const elem = document.getElementById("catGrumpy");
    elem.addEventListener('click', function(){
        document.getElementById("counter_o").innerHTML = contador[0];
        contador[0]=contador[0]+1;
    });
}

function getCatOrange(){
    const elem = document.getElementById("catOrange");
    elem.addEventListener('mouseover', function(){
        document.getElementById("counter_p").innerHTML = contador[1];
        contador[1]=contador[1]+1;
    });
}