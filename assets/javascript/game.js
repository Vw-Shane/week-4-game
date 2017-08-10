$(document).ready(function() {

    var yourPick = " ";
    var activEnemy = " ";
    var Char1 = "#Char1";
    var Char2 = "#Char2";
    var Char3 = "#Char3";
    var Char4 = "#Char4";

    alert("Pick your Chimpokomon"); // this alert causes a background loading delay
    firstPick();

    function firstPick() {
      var array = [" ", " "];
        $(".CharButton").on("click", function() {
            console.log(array.length);
            if (array.length === 2) {

                yourPick = $(this).attr("id");
                
                $("#yourpick").append(yourPick);
                console.log(yourPick);
                enmePick();
              
                for (var i = 1; i <= 3; i++) {
                    array.push(i.toString());
                }
            };
            console.log(array.length);
        });
    };

    function enmePick() {
      var array = [" ", " "];
        $(".CharButton").on("click", function() {
            console.log(array.length);
            if (array.length === 2) {

                activEnemy = $(this).attr("id");              
                $("#activEnemy").append(activEnemy);
                console.log(activEnemy);
                // enmePick();
              
                for (var i = 1; i <= 3; i++) {
                    array.push(i.toString());
                }
            };
            console.log(array.length);
        });
    };
});