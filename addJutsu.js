var specialJutsuTypes ={
    ninjutsu: "Нинджуцу",
    genjutsu: "Генджуцу",
    taijutsu: "Тайджуцу"
};

var possibleJutsuTypes = [
    specialJutsuTypes.ninjutsu,
    "Катон",
    "Райтон",
    "Суйтон",
    "Датон",
    "Фуутон",
    specialJutsuTypes.genjutsu,
    specialJutsuTypes.taijutsu
];

var jutsuUsages = {
    offecne: "⚔",
    deffence: "⛨",
    utility: "?"
};

var elementStrogAgainst = {
    "Суйтон": "Катон",
    "Фуутон": "Райтон",
    "Датон": "Суйтон",
    "Райтон": "Датон",
    "Катон": "Фуутон"
};

var possibleJutsuRanks = [
    "D",
    "C",
    "B",
    "A",
    "S"
];

var jutsuPoitnsByRank = {
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

        var jutsuTypeSelector = $("<select>")
            .addClass("type")
            .addClass("col-*-*");

        var jutsuRankSelector = $("<select>")
            .addClass("rank")
            .addClass("col-*-*");

        var jutsuUsageSelector = $("<select>")
            .addClass("usage")
            .addClass("col-*-*");

        jutsuContainer
            .append(jutsuTypeSelector)
            .append(" - ")
            .append(jutsuUsageSelector)
            .append(" - ")
            .append(jutsuRankSelector)
            .append(" - ")
            .append($("<input placeholder='Lvl' value='1' min='-50' max='50' size='2'/>")
                .addClass("col-*-*"))

        for (var i in possibleJutsuTypes) {
            jutsuTypeSelector.append($("<option>").val(i).append(possibleJutsuTypes[i]));
        }
        for (var i in possibleJutsuRanks) {
            jutsuRankSelector.append($("<option>").val(i).append(possibleJutsuRanks[i]));
        }
        for (var i in jutsuUsages) {
            jutsuUsageSelector.append($("<option>").val(i).append(jutsuUsages[i]));
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