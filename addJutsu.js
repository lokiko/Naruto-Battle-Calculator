var possibleJutsuTypes = [
    "избери...",
    "Катон",
    "Райтон",
    "Суйтон",
    "Датон",
    "Фуутон"
];

var elementStrogAgainst = {
    "Суйтон": "Катон",
    "Фуутон": "Райтон",
    "Датон": "Суйтон",
    "Райтон": "Датон",
    "Катон": "Фуутон"
};

var possibleJutsuRanks = [
    "избери...",
    "E",
    "D",
    "C",
    "B",
    "A",
    "S"
];

var jutsuPoitnsByRank = {
    E: 0,
    D: 1,
    C: 4,
    B: 7,
    A: 10,
    S: 13
};

var addJutsu = (function addJutsu_context() {
    function createElement() {
        var jutsuContainer = $("<div>")
            .addClass("jutsu")
            .addClass("row");

        var jutsuElementSelector = $("<select>")
            .addClass("element")
            .addClass("col-*-*");

        var jutsuRankSelector = $("<select>")
            .addClass("rank")
            .addClass("col-*-*");

        jutsuContainer
            .append(jutsuElementSelector)
            .append(" - ")
            .append(jutsuRankSelector)
            .append(" - ")
            .append($("<input placeholder='Lvl' value='1' min='-50' max='50' size='2'/>")
                .addClass("col-*-*"))

        for (var i in possibleJutsuTypes) {
            jutsuElementSelector.append($("<option>").val(i).append(possibleJutsuTypes[i]));
        }
        for (var i in possibleJutsuRanks) {
            jutsuRankSelector.append($("<option>").val(i).append(possibleJutsuRanks[i]));
        }

        return jutsuContainer;
    }

    return {
        forPlayer1: function () {
            $("#p1-jutsus").append(createElement());
        },
        forPlayer2: function () {
            $("#p2-jutsus").append(createElement());
        },
    }
})();