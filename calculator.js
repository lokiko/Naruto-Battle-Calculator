var calculator = (function calculator_context() {

    function b(str) { return "<strong>" + str + "</strong>" }
    function u(str) { return "<u>" + str + "</u>" }
    function h(str) { return "<h3>" + str + "</h3>" }
    function ul(strings) {
        var result = "<ul>";
        for (var i = 0; i < strings.length; i++) { result += "<li>" + strings[i] + "</li>"; }
        return result + "</ul>";
    }

    function calculateStatStatement(num1, num2, statName) {
        var percent = ((num1 / num2) * 100) | 0;
        return statName + ": " + u(percent + "%") + " спрямо врага";
    }

    function calculateSkillStatement(i, player, otherPlayer) {
        var skill = player.skills[i];
        if (skill.name == possibleSkills[0]) return;

        var contras = [];
        skillContras[skill.name].forEach(function (contraName) {
            var contraSkillsWithSameName = otherPlayer.skills.filter(function (skill) { return skill.name == contraName; })
            contraSkillsWithSameName.forEach(function (contra) { contras.push(contra); })
        });

        var contraPower = contras
            .map(function (conraSkill) { return conraSkill.level; })
            .reduce(function (lvl1, lvl2) { return lvl1 + lvl2; }, 0);

        var result = u(skill.name + "(" + skill.level + ")") + " : ";

        if (contraPower <= 0) {
            result += "Действа в пълна сила!"
        }
        else if (contraPower <= skill.level) {
            result += "Умението е възпрепятствано"
        }
        else {
            result += "Умението е неефективно"
        }

        result += ul(contras.map(function (conraSkill) {
            return conraSkill.name + " (" + conraSkill.level + ")";
        }))
            
        return result
    }

    function calculateJutsuStatement(i, player, otherPlayer) {
        var jutsu = player.jutsus[i];
        if (jutsu.element == possibleJutsuTypes[0]) return;
        if (jutsu.rank == possibleJutsuRanks[0]) return;

        var power = jutsuPoitnsByRank[jutsu.rank] + jutsu.level - 1;
        return jutsu.rank + " ранг " + jutsu.element + " (" + jutsu.level + ") -> " + power + " точки."
            + "<br/>(" + (power + 3) + " срещу " + elementStrogAgainst[jutsu.element] + ")";
    }

    function calculateStatements(player, otherPlayer) {
        var statements = [];

        // NAME
        statements.push(h(u("< " + player.name.toUpperCase() + " >")));

        // STATS
        statements.push(b(u("----статистики----")));
        statements.push(ul(
            [calculateStatStatement(player.str, otherPlayer.str, "Сила"),
            calculateStatStatement(player.int, otherPlayer.int, "Интелект"),
            calculateStatStatement(player.will, otherPlayer.will, "Воля"),
            calculateStatStatement(player.speed, otherPlayer.speed, "Бързина")]));

        // SKILLS
        if (player.skills.length > 0)
            statements.push(b(u("----умения----")));

        var skillStatements = [];
        for (var i in player.skills) {
            skillStatements.push(calculateSkillStatement(i, player, otherPlayer));
        }
        statements.push(ul(skillStatements));

        // JUTSUs
        if (player.jutsus.length > 0)
            statements.push(b(u("----джуцута----")));

        var jutsuStatements = [];
        for (var i in player.jutsus) {
            jutsuStatements.push(calculateJutsuStatement(i, player, otherPlayer));
        }
        statements.push(ul(jutsuStatements));

        // OTHER
        //statements.push("----други----");
        // TODO: Calculate other stuff

        return statements;
    }

    function convertToHtmlList(strings) {
        var results = $("<div>");
        for (var i = 0; i < strings.length; i++) {
            results.append($("<p>").append(strings[i]));
        }
        return results;
    }

    return {
        calculate: function calculate(player1, player2) {
            try {
                $("#tool-results-1")
                    .empty()
                    .append(convertToHtmlList(calculateStatements(player1, player2)));

                $("#tool-results-2")
                    .empty()
                    .append(convertToHtmlList(calculateStatements(player2, player1)));
            } catch (e) {
                alert(e);
            }
        }
    }
})();