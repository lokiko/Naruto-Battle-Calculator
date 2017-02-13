
var addNote = (function addSkill_context() {

    function createElement() {
        return $("<div>")
            .addClass("note")
            .addClass("row")
            .append($("<input>").addClass("col-*-*"))
    }

    return {
        forPlayer1: function () {
            $("#p1-notes").append(createElement());
        },
        forPlayer2: function () {
            $("#p2-notes").append(createElement());
        },
    }
})();