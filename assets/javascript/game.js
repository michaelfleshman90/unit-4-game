var game = {
    characterSelected: "",
    enemyFighter: "",
    playerFighter: function() {
        for (i=0; i < 4; i++) {
            $("#character" + i).on("click", function() {
                if (game.characterSelected == "") {
                    game.characterSelected = $(this).attr("id").toString();
                    $(this).appendTo("#attackArea");
                    $(this).unBind("click");
                    
                } else if (game.enemyFighter == "") {
                    game.enemyFighter = $(this).attr("id").toString();
                    $(this).appendTo("#defenderArea");
                    $(this).unBind("click");
                }
            });
        }
    },
    attack: function() {
        $("#attackButton").on("click", function() {
            if(game.characterSelected != "" && game.enemyFighter != "") {
                
            }
    });

    },
    
    obiWanKenobi: {
        healthPoints: 150,
        attackPower: Math.pow(3, 5),
        counterAttackPower: 25,

    },
    yoda: {
        healthPoints: 160,
        attackPower: Math.pow(4, 5),
        counterAttackPower: 35,
        
    },
    darthMaul: {
        healthPoints: 170,
        attackPower: Math.pow(3, 6),
        counterAttackPower: 30,
        
    },
    countDuku: {
        healthPoints: 130,
        attackPower: Math.pow(2, 3),
        counterAttackPower: 15,
        
    }
}


$(document).ready(function() {
    game.playerFighter(); 
});




