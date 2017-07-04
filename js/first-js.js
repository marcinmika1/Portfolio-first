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
/*        console.log(allArticleWidthCount);*/
        $("#second-section").css({
            "height": "100vh",
            "width": allArticleWidthCount
        });
    };
    fixSectionWidth();
    
    function articleWidth(){
      
        var allArticleWidth= 100 / $('article').length + '%';
        
        $("article").css({
            "height": "100%",
            "width": allArticleWidth
        });
    };
    articleWidth();
});