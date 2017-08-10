$(document).ready(function() {
    
    var yourPick = " ";
    var activEnemy = " ";
    var Char1 = "#Char1";
    var array = [" "," "];
    var Char2 = "#Char2";
    var Char3 = "#Char3";
    var Char4 = "#Char4";

    alert("Pick your Chimpokomon"); // this alert causes a background loading delay
    firstPick();
    function firstPick() {
        $(".CharButton").on("click", function() {
          console.log(array.length);
            if (array.length = 1) {

                yourPick = $(this).attr("id");
                // $(yourPick).appendTo($("#nextEnemies"));
                // var yourPick = $(this).attr("id"); // item to move
                var want = $('#nextEnemies'); // container to receive it
                $("#yourpick").append(yourPick);
                console.log(yourPick);
                enmePick();
                for (var i = 1; i < array.length; i++) {
                  array[i]
                };
            };
            console.log(array.length);
        });
    };

    function enmePick() {
        $(".CharButton").on("click", function() {
            if (yourPick) {
                activEnemy = $(this).attr("id");
                // $(yourPick).appendTo($("#nextEnemies"));
                // var yourPick = $(this).attr("id"); // item to move
                var want = $('#activEnemy'); // container to receive it
                $("#activEnemy").append(activEnemy);
                console.log(activEnemy);
            };
        });
    };
});











