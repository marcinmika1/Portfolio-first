'use strict'
/*licznik klikniec gora dol*/
    var countClick=1;
/*knazwa kolejnej kotwicy*/
    var anchorName;
    /*funkcja ustalajaca obecne polozenie*/
    function nameanchor(){
        if (countClick==1)
            anchorName="#firstSectionArchor";
        if(countClick==2)
            anchorName="#secondSectionArchor";
                $('#scroolUp').css({
                'opacity': 1
            });
        if(countClick==3)
            anchorName="#thirdSectionArchor";
                $('#scroolDown').css({
                'opacity': 1
            });
        if(countClick==4)
            anchorName=$('#forthSectionArchor');
    };
    
    function nameanchorUp(){
           if (countClick==1)
            $('#scroolUp').css({
                'opacity': 0
            });

            if (countClick==$('section').length)
            $('#scroolDown').css({
                'opacity': 0
            });  
    };

    function nameanchorDown(){
                if (countClick==2)
                $('#scroolRight').css({
                'opacity': 1 
            });
                else 
                $('#scroolRight').css({
                'opacity': 0 
            });
    }
/*funkcja onclick inicjujaca ruch gora dol*/    
function buttomScrollLeft() {

    
        $('#scroolDown').on("click", function () {
          if (countClick<$('section').length){countClick++;};  
            nameanchor();
            nameanchorUp();
            nameanchorDown();
            $('html, body').animate({
                scrollTop: 
             $(anchorName).offset().top
            }, 1000);
            console.log('dziala');
            console.log(countClick);
            console.log(anchorName);
            console.log($('section').length);

        });
    $('#scroolUp').on("click", function () {
          if (countClick>1){countClick--};
            nameanchor();
            nameanchorUp();
            nameanchorDown();
            $('html, body').animate({
                scrollTop: 
             $(anchorName).offset().top
            }, 1000);
            console.log('dziala right');
            console.log(countClick);
            console.log(anchorName);

        });
        
    };
    
    buttomScrollLeft();