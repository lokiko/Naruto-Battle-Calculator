
var superListening = "Свръх-развит слух";
var superSight = "Свръх-развито зрение";
var superSmell = "Свръх-развито обоняние";
var initiative = "Инициатива";
var hiding = "Прикриване";
var quietMovement = "Промъкване";
var shortWeapons = "Оръжия (къси)";
var longWeapons = "Оръжия (дълги)";
var flyingWeapons = "Оръжия (летящи)";
var handToHandFighting = "Ръкопашен бой";
var dodging = "Отбягване";
var acrobatics = "Акробатика";
var balance = "Баланс";
var soundImitation = "Звукова имитация";
var trapMaking = "Залагане на капани";
var learningFromOponent = "Изучаване";
var fakeMovements = "Лъжливи действия";
var anathomy = "Анатомия";
var painResistence = "Устойчивост на болка";

var possibleSkills = [
    "избери...",

    superListening,
    superSight,
    superSmell,
    initiative,
    hiding,
    quietMovement,
    shortWeapons,
    longWeapons,
    flyingWeapons,
    handToHandFighting,
    dodging,
    acrobatics,
    balance,
    soundImitation,
    trapMaking,
    learningFromOponent,
    fakeMovements,
    anathomy,
    painResistence
];

var skillContras = {}
skillContras[superListening] = [quietMovement, soundImitation];
skillContras[superSight] = [fakeMovements, hiding, trapMaking];
skillContras[superSmell] = []; // nothing?
skillContras[initiative] = [initiative, hiding, quietMovement];
skillContras[hiding] = [superSmell, superSight];
skillContras[quietMovement] = [superSmell, superListening];
skillContras[shortWeapons] = [longWeapons, shortWeapons, flyingWeapons, acrobatics];
skillContras[longWeapons] = [longWeapons, shortWeapons, flyingWeapons, acrobatics];
skillContras[flyingWeapons] = [longWeapons, shortWeapons, dodging];
skillContras[handToHandFighting] = [handToHandFighting, longWeapons, shortWeapons, acrobatics, balance];
skillContras[dodging] = [flyingWeapons];
skillContras[acrobatics] = [handToHandFighting, shortWeapons, longWeapons];
skillContras[balance] = [handToHandFighting, initiative];
skillContras[soundImitation] = [superListening];
skillContras[trapMaking] = [superSight];
skillContras[learningFromOponent] = [fakeMovements];
skillContras[fakeMovements] = [fakeMovements, superSight];
skillContras[anathomy] = [anathomy, painResistence];
skillContras[painResistence] = [anathomy];

var addSkill = (function addSkill_context() {

    function createElement() {
        var skillContainer = $("<div>")
            .addClass("skill")
            .addClass("row");

        var skillSelector = $("<select>")
            .addClass("col-*-*");

        skillContainer
            .append(skillSelector)
            .append(" - ")
            .append($("<input placeholder='Lvl' value='1' min='1' max='50' size='2'/>")
                .addClass("col-*-*"))

        for (var i in possibleSkills) {
            skillSelector.append($("<option>").val(i).append(possibleSkills[i]));
        }

        return skillContainer;
    }

    return {
        forPlayer1: function () {
            $("#p1-skills").append(createElement());
        },
        forPlayer2: function () {
            $("#p2-skills").append(createElement());
        },
    }
})();