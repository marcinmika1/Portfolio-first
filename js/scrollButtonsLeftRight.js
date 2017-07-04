'use strict'
/*licznik klikniec gora dol*/
var countClickLeftRight = 1;
/*knazwa kolejnej kotwicy*/
var anchorNameLeftRight;
/*funkcja ustalajaca obecne polozenie*/
function nameAnchorLeftRight() {
    if (countClickLeftRight == 1)
        anchorNameLeftRight = "#articleArchor1";
    if (countClickLeftRight == 2)
        anchorNameLeftRight = "#articleArchor2";
    $('#scroolLeft').css({
        'opacity': 1
    });
    $('#scroolRight').css({
        'opacity': 1
    });
    if (countClickLeftRight == 3)
        anchorNameLeftRight = "#articleArchor3";
};

function nameanchorRight() {
    if (countClickLeftRight == 1)
        $('#scroolLeft').css({
            'opacity': 0
        });
};

function nameanchorLeft() {
    if (countClickLeftRight == $('article').length)
        $('#scroolRight').css({
            'opacity': 0
        });
};

function nameanchorLeftUpDown() {
    if (countClickLeftRight > 1)
        $('#scroolUp').css({
            'opacity': 0
        });
    $('#scroolDown').css({
        'opacity': 0
    });
    if (countClickLeftRight > 1)
        $('#scroolUp').css({
            'opacity': 0
        });
    $('#scroolDown').css({
        'opacity': 0
    });
};

function nameAnchorLeftRightUpDown() {

    if (countClickLeftRight == 1) {
        $('#scroolUp').css({
            'opacity': 1
        });
        $('#scroolDown').css({
            'opacity': 1
        });
    };
}
/*funkcja onclick inicjujaca ruch gora dol*/
function buttomScrollLeft() {


    $('#scroolRight').on("click", function () {
        if (countClickLeftRight < $('article').length) {
            countClickLeftRight++;
        };
        nameAnchorLeftRight();
        nameanchorLeft();
        nameanchorLeftUpDown()
        console.log(countClickLeftRight);
        $('html, body').animate({
            scrollLeft: $(anchorNameLeftRight).offset().left
        }, 1000);

    });
    $('#scroolLeft').on("click", function () {
        if (countClickLeftRight > 1) {
            countClickLeftRight--
        };
        nameAnchorLeftRight();
        nameanchorRight();
        nameanchorLeftUpDown();
        nameAnchorLeftRightUpDown();
        console.log(countClickLeftRight);
        $('html, body').animate({
            scrollLeft: $(anchorNameLeftRight).offset().left
        }, 1000);
    });

};

buttomScrollLeft();
