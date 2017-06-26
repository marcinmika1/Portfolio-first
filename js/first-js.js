'use strict';
/*wyzwolenie przy zaladowaniu strony*/
$(document).ready(function () {
    /*funkcja zmienia wysokosc i szerokości wszystkich sekcji */
    var sectionCount = $("section").length;
    
    function fixSectionWidth() {
        
        
        $("section").css({
            "height": "100vh",
            "width": "100%"
        });
        /*funcja ustawia wutomatyczne ustawianie szerokoscie sekcji drugiej*/
        var allArticleWidthCount = 100 * $('article').length + '%';
        console.log(allArticleWidthCount);
        $("#second-section").css({
            "height": "100vh",
            "width": allArticleWidthCount
        });
    };
    /*przyciska down scrolluje w dol o wysokosc diva*/    /*przyciska down scrolluje w dol o wysokosc diva*/
    var scrooled = 0;
    
    function buttomScrollUpDown() {
        var DownEndScroll = heighToScroll*sectionCount;
        console.log(DownEndScroll);
        var heighToScroll = $("#second-section").height();
    /*na klikniecie przycisku dol jest scroll w dol o wysokosc diva*/    
        $('#scroolDown').on("click", function () {
            scrooled = scrooled + heighToScroll;
if(scrooled<heighToScroll* sectionCount);
            $('body').animate({
                scrollTop: scrooled
            });
        });
     /*na klikniecie przycisku gora jest scroll w gore o wysokosc diva*/        
            $('#scroolUp').on("click", function () {
            $('body').animate({
       
            });
       
    });
                              };
    
/*    function buttomScrollLeftRight() {

        
        var heighToScroll = $("#first-section").width();
        console.log(heighToScroll);
        
        $('#scroolLeft').on("click", function () {
            scrooled = scrooled + heighToScroll;
            $('body').animate({
                scrollTop: scrooled
            });
        });
    };

    console.log(buttomScrollLeftRight());*/
    console.log(buttomScrollUpDown());
    console.log(fixSectionWidth());
    console.log('koniec');
    console.log($("section").length);
    console.log($('article').length);
    console.log(sectionCount);
    console.log()

});
