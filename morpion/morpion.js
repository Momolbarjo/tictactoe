let Grille = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]

let joueur = 1

function reset(){
    Grille = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
            const cellElement = document.getElementById("cell" + i + j);
            cellElement.src = "carré.jpg";
        }
    }
    joueur = 1;
}

function verifier(){
    for( let i=0; i < 3 ; i++){
        if (Grille[i][0] !== -1 && Grille[i][0] === Grille[i][1] && Grille[i][1] === Grille[i][2]){
            return Grille[i][0]
        }
    }
    for( let j=0; j < 3 ; j++){
        if (Grille[0][j] !== -1 && Grille[0][j] === Grille[1][j] && Grille[1][j] === Grille[2][j]){
            return Grille[0][j]
        }
    }

    if( Grille[0][0] !== -1 && Grille[0][0] === Grille[1][1] && Grille[1][1] === Grille[2][2]){
        return Grille[0][0]
    }

    if( Grille[0][2] !== -1 && Grille[0][2] === Grille[1][1] && Grille[1][1] === Grille[2][0]){
        return Grille[0][2]
    }

    let nul = true;

    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
            if(Grille[i][j] === -1 ){
                nul = false;
                break;
            }            
        }
        if (nul === false){
            break;
        }
    }

    if (nul === true){
        return -1
    }

    return null;
}


function Selection(lignes,colonnes){

    const cellElement = document.getElementById("cell" + lignes + colonnes)


        if(Grille[lignes][colonnes] !== -1){
            alert("choix impossible")
            return
        }   
            if (joueur === 1) {
                Grille[lignes][colonnes] = 1
                cellElement.src = "croix.jpg"
                joueur = 2
            } else {
                Grille[lignes][colonnes] = 2
                cellElement.src = "cercle.png"
                joueur = 1
            }

    const  verif = verifier()

    if(verif === 1){
        setTimeout(function(){alert("gg joueur 1")},100)
    } else if(verif === 2){
        setTimeout(function(){alert("gg joueur 2")},100)
    } else if(verif === -1){
        setTimeout(function(){alert("égalité")},100)
    }
}



