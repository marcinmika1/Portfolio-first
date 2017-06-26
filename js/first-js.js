'use strict';
/*wyzwolenie przy zaladowaniu strony*/
$(document).ready(function(){
/*funkcja zmienia wysokosc sekcji */
    function fixSectionWidth(){
    var sectionCount = $("section").length;
    $("section").css({"height":"100vh","width":"100%"});
    };
/*funkcja    
    function name(){
        
    }*/
    
console.log(fixSectionWidth());
console.log('koniec');
console.log($("section").length);

});