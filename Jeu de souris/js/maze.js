var gagnant = 1;

window.onload = function() {
    $("boundary1").onmouseover = changeColor;
    var couleur = $$(".boundary"); 
    for (var i = 0; i < couleur.length; i++) {
        couleur[i].onmouseover = changeColor;
        }

    $("end").onmouseover = fin;

    $("start").onclick = start;
}

function changeColor() {
    var couleur = $$(".boundary"); 
    for (var i = 0; i < couleur.length; i++) {
        couleur[i].addClassName("youlost");
        }
    gagnant = 0;
}

function fin(){
    $("status").innerHTML = "test";

    if(gagnant == 1){
        $("status").innerHTML = "You win! :]";
    }
    else{
        $("status").innerHTML = "Sorry, you lost. :[";
    }
}

function start(){
    var couleur = $$(".boundary"); 
    for (var i = 0; i < couleur.length; i++) {
        couleur[i].removeClassName("youlost");
        }
    gagnant = 1;
    $("status").innerHTML = 'Move your mouse over the "S" to begin.';
}