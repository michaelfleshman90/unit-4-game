var game = {
    characterSelected: "",
    enemyFighter: "",
    enemyCounterAttack: 0,
    enemyHealthId: "",
    enemyHealth: 0,
    characterHealth: 0,
    characterHealthId: "",
    characterName: "",
    characterAttack: 0,
    characterBaseAttack: 0,
    wins: 0,
    loses: 0,
    enemysDefeated: 0,
    obiWanKenobi: {
        name: "Obi-Wan-Kenobi",
        healthPoints: 90,
        baseAttack: 15,
        attackPower: 9,
        counterAttackPower: 20,

    },
    yoda: {
        name: "Yoda",
        healthPoints: 120,
        baseAttack: 12,
        attackPower: 25,
        counterAttackPower: 20,
        
    },
    darthMaul: {
        name: "Darth Maul",
        healthPoints: 100,
        baseAttack: 20,
        attackPower: 10,
        counterAttackPower: 25,
        
    },
    countDuku: {
        name: "Count Duku",
        healthPoints: 80,
        baseAttack: 10,
        attackPower: 6,
        counterAttackPower: 15,
        
    },
    playerFighter: function() {
        for (i=0; i < 4; i++) {
            $("#character" + i).on("click", function() {
                if (game.characterSelected == "") {
                    game.characterSelected = $(this).attr("id");
                    game.addPlayer();
                    $(this).appendTo("#attackArea");
                    $(this).off("click");
                    game.attack();
                } else if (game.enemyFighter == "") {
                    game.enemyFighter = $(this).attr("id");
                    game.addEnemy();
                    $(this).appendTo("#defenderArea");
                    $("#" + game.enemyFighter).off("click");
                }
            });
            
        }
    },
    addPlayer: function() {
        switch (game.characterSelected) {
            case "character0":
                game.characterName = game.obiWanKenobi.name;
                game.characterHealthId = "#health0";
                game.characterHealth = game.obiWanKenobi.healthPoints;
                game.characterAttack = game.obiWanKenobi.baseAttack;
                game.characterAttackPower = game.obiWanKenobi.attackPower;
            break;
            case "character1":
                game.characterName = game.yoda.name;
                game.characterHealthId = "#health1";
                game.characterHealth = game.yoda.healthPoints;
                game.characterAttack = game.yoda.baseAttack;
                game.characterAttackPower = game.yoda.attackPower;
            break;
            case "character2":
                game.characterName = game.darthMaul.name;
                game.characterHealthId = "#health2";
                game.characterHealth = game.darthMaul.healthPoints;
                game.characterAttack = game.darthMaul.baseAttack;
                game.characterAttackPower = game.darthMaul.attackPower;
            break;
            case "character3":
                game.characterName = game.countDuku.name;
                game.characterHealthId = "#health3";
                game.characterHealth = game.countDuku.healthPoints;
                game.characterAttack = game.countDuku.baseAttack;
                game.characterAttackPower = game.countDuku.attackPower;
            break;
        }
    },
    addEnemy: function() {
        switch (game.enemyFighter) {
            case "character0":
                game.enemyName = game.obiWanKenobi.name;
                game.enemyHealthId = "#health0";
                game.enemyHealth = game.obiWanKenobi.healthPoints;
                game.enemyCounterAttack = game.obiWanKenobi.counterAttackPower;
            break;
            case "character1":
                game.enemyName = game.yoda.name;
                game.enemyHealthId = "#health1";
                game.enemyHealth = game.yoda.healthPoints;
                game.enemyCounterAttack = game.yoda.counterAttackPower;
            break;
            case "character2":
                game.enemyName = game.darthMaul.name;
                game.enemyHealthId = "#health2";
                game.enemyHealth = game.darthMaul.healthPoints;
                game.enemyCounterAttack = game.darthMaul.counterAttackPower;
            break;
            case "character3":
                game.enemyName = game.countDuku.name;
                game.enemyHealthId = "#health3";
                game.enemyHealth = game.countDuku.healthPoints;
                game.enemyCounterAttack = game.countDuku.counterAttackPower;
            break;
        }
    },
    attack: function() {
        $("#attackButton").on("click", function() {
            if(game.characterSelected != "" && game.enemyFighter != "") {
                game.characterAttack = game.characterAttack + game.characterAttackPower;
                game.enemyHealth = game.enemyHealth - game.characterAttack;
                $("#updateSection").prepend("<h3> " + game.characterName + " has caused " + game.characterAttack + " points of damage!!</h3>");
                
                
                if(game.enemyHealth < 1) {
                    game.enemyHealth = 0;
                    $(game.enemyHealthId).text(game.enemyHealth.toString());
                    game.enemyDefeat();
                    
                    return;
                }
                game.characterHealth = game.characterHealth - game.enemyCounterAttack;
                $(game.characterHealthId).text(game.characterHealth.toString());
                $("#updateSection").prepend("<h3> " + game.enemyName + " has  countered " + game.enemyCounterAttack + " points of damage!</h3>");
                $(game.enemyHealthId).text(game.enemyHealth.toString());
                if (game.characterHealth < 1) {
                    alert("You suck!");
                    game.reset();
                }
            }
            
    });
    },
    enemyDefeat: function() {
        game.enemysDefeated +=1;
        if(game.enemysDefeated === 3) {
            alert("You won!");
            game.reset();
        }
        $("#" + game.enemyFighter).appendTo(".card-deck");
        game.enemyFighter = "";
    },
    reset: function() {
        $("#updateSection").html("")
        game.characterSelected = "";
        game.enemyFighter = "";
        game.enemyCounterAttack = 0;
        game.enemyHealthId = "";
        game.enemyHealth = 0;
        game.characterHealth = 0;
        game.characterHealthId = "";
        game.characterName = "";
        game.characterAttack = 0;
        game.characterBaseAttack = 0;
        game.enemysDefeated = 0;
        $(".character").appendTo(".card-deck");
        $("#health0").text("90hp");
        $("#health1").text("120hp");
        $("#health2").text("100hp");
        $("#health3").text("80hp");
        $(".character").off();
        game.playerFighter();
    }
}
$(document).ready(function() {
    game.playerFighter();

});






