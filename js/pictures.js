var temp;
var actuel;
var precedent;

document.observe("dom:loaded", function() {
    // set up basic event handlers
    var pictures = $$("#pictures img");
    for (var i = 0; i < pictures.length; i++) {
        pictures[i].observe("dblclick", pictureClick);
    }
    $("left").observe("click", goLeft);
    $("right").observe("click", goRight);
    
    // finish me
    
    new Effect.Scale(pictures[0],200);
    pictures[0].shake();
    temp = pictures[0];

    Sortable.create('pictures',{tag :"img"});
    
});

// called when any picture is clicked
function pictureClick() {
    $("mainimage").src = this.src.replace("_thumb", "");

    if(temp != this){
        new Effect.Scale(temp,50);
        new Effect.Scale(this,200);
        new Effect.Shake('mainimage');
    }

    temp = this;
    
}

// called when Left arrow is clicked
function goLeft() {
    precedent = temp.previous();
    $("mainimage").src = precedent.src.replace("_thumb", "");
    new Effect.Scale(precedent,200);
    new Effect.Scale(precedent.next(),50);
    new Effect.Shake('mainimage');
    temp = precedent
}


// called when Right arrow is clicked
function goRight() {
    suivant = temp.next();
    $("mainimage").src = suivant.src.replace("_thumb", "");
    new Effect.Scale(suivant,200);
    new Effect.Scale(suivant.previous(),50);
    new Effect.Shake('mainimage');
    temp = suivant;
    
}
