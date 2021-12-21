$(document).ready(function(){

    //scroll
    // $("html").niceScroll()
    // $("body").niceScroll({
    //     cursorcolor:"#7ddbff"
    
    // Loading Website
    $(window).load(function(){
        
        // $("html,body").animate({ scrollTop: 0});

        $(".loading-overlay .loader").fadeOut(1500,
            function(){

                $(this).parent().fadeOut(1500,
                    function(){

                        $("body").css("overflow","auto");

                        $(this).remove();
                });
        });
    });

    // Scroll top
    var scrollbtn = $(".scroll-top");

    $(window).scroll(function(){

        if( $(this).scrollTop() >= 500){
            scrollbtn.show();
        }
        else{
            scrollbtn.hide();
        }
    });
    
    scrollbtn.click(function(){

        $("html,body").animate({ scrollTop: 0}, 600);

        
    });

    // Scrolling by id 
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
      });
});