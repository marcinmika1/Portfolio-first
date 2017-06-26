'use strict';
/*wyzwolenie przy zaladowaniu strony*/
$(document).ready(function () {
    /*funkcja zmienia wysokosc i szerokości wszystkich sekcji */
    function fixSectionWidth() {
        var sectionCount = $("section").length;
        $("section").css({
            "height": "100vh",
            "width": "100%"
        });
   /*funcja ustawia wutomatyczne ustawianie szerokoscie sekcji drugiej*/     
        var allArticleWidthCount=100*$('article').length + '%';
        console.log(allArticleWidthCount);
        $("#second-section").css({
            "height": "100vh",
            "width": allArticleWidthCount 
        });
        var scrooled = 0;
        
        var heighToScroll = $("#second-section").height();
        
        $('#scroolDown').on("click", function(){
            scrooled = scrooled+heighToScroll;
            $('body').animate({scrollTop: scrooled});
            
            console.log('przyciska dziala');
        })

    };
    /*funkcja    
        function name(){
            
        }*/

    console.log(fixSectionWidth());
    console.log('koniec');
    console.log($("section").length);
    console.log($('article').length);

});
