$(document).ready(function() {
    var yourPick = " ";
    var activEnemy = " ";
    var Char1 = "#Char1 ";
    var Char2 = "#Char2 ";
    var Char3 = "#Char3 ";
    var Char4 = "#Char4 ";
    var Hitpoints1 = " ";
    var Hitpoints2 = " ";

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
                Hitpoints1 = $(this).attr("value");
                $("#yourpick").append(Hitpoints1);
                for (var i = 1; i <= 3; i++) {
                    array.push(i.toString());
                }
                alert("Pick next Enemy");
                enmePick();
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
                Hitpoints2 = $(this).attr("value");
                $("#activEnemy").append(Hitpoints2);
                for (var i = 1; i <= 3; i++) {
                    array.push(i.toString());
                }
                alert("Attack!!!!!!!!!!!!!!!");
                attackFunk();
            };
            console.log(array.length);
        });
    };

    function attackFunk() {
        $("#Attack").on("click", function() {
            console.log(Hitpoints1);
            var AttckPts = [80, 45, 73, 27];
            var item = AttckPts[Math.floor(Math.random() * AttckPts.length)];
            var Newpoints = (Hitpoints1 - item);
            console.log(Newpoints);
            if ( 0 > Newpoints) {
              Hitpoints1 = Hitpoints1 - Newpoints
              console.log(Hitpoints1);
            }
        });

    }


});

//  for (Newpoints < 0){
            //   Hitpoints1 = Hitpoints1 + AttckPts;
            //    console.log(Hitpoints1);
            // };


