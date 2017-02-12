$("#add-skill-p1").on("click", addSkill.forPlayer1);
$("#add-skill-p2").on("click", addSkill.forPlayer2);

$("#add-jutsu-p1").on("click", addJutsu.forPlayer1);
$("#add-jutsu-p2").on("click", addJutsu.forPlayer2);

$("#run-tool").on("click", function () { calculator.calculate(parser.parsePlayer1(), parser.parsePlayer2()); });
