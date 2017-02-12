var parser = (function parser_context() {
    function parseNum(selector) {
        try {
            var value = $(selector).val();
            if (!value) { throw "no value"; }

            var num = parseInt($(selector).val());
            if (!num || num < 1) { throw "parse problem"; }
            return num;
        } catch (e) {
            alert("Could not parse number : " + selector);
            return NaN;
        }
    }

    function parseSkills(selector) {
        var results = [];

        $(selector).find(".skill").each(function (i, el) {
            results.push({
                name: $(el).find("select option:selected").text(),
                level: parseNum($(el).find("input"))
            });
        });

        return results;
    }

    function parseJutsus(selector) {
        var results = [];

        $(selector).find(".jutsu").each(function (i, el) {
            results.push({
                element: $(el).find("select.element option:selected").text(),
                rank: $(el).find("select.rank option:selected").text(),
                level: parseNum($(el).find("input"))
            });
        });

        return results;
    }

    function parsePlayer(playerContainerId) {
        return {
            name: $("#" + playerContainerId + " .name").val() || playerContainerId,
            str: parseNum("#" + playerContainerId + " .str"),
            int: parseNum("#" + playerContainerId + " .int"),
            will: parseNum("#" + playerContainerId + " .will"),
            speed: parseNum("#" + playerContainerId + " .speed"),
            skills: parseSkills("#" + playerContainerId + " .skills"),
            jutsus: parseJutsus("#" + playerContainerId + " .jutsus")
        };
    }

    return {
        parsePlayer1: function parsePlayer1() {
            return parsePlayer("player1");
        },
        parsePlayer2: function parsePlayer1() {
            return parsePlayer("player2");
        }
    }
})();