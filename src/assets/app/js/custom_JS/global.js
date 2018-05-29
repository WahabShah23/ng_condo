$(function() {

    var $grid = $( '#tp-grid' ),
        $name = $( '#name' ),
        $close = $( '#close' ),
        $loader = $( '<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>' ).insertBefore( $grid ),
        stapel = $grid.stapel( {
            onLoad : function() {
                $loader.remove();
                $(".globalSeparator").hide();
            },
            onBeforeOpen : function( pileName ) {
                $name.html( pileName );
                $(".tp-title").css(
                    {   "position": "absolute",
                        "top": "80%",
                        "opacity": "0.95",
                        "width":"100%",
                        "background-color":"#fff",
                        "padding": "10px"
                    });
                $(".tp-title").find("span:eq(0)").css("padding-right","7px");
                $(".globalSeparator").hide();
            },
            onAfterOpen : function( pileName ) {
                $close.show();
                $(".globalSeparator").show();
                $("#name").css("font-size", "11px");
                $(".tp-info").animate({"left": "0%", "top": "80%", "opacity": "0.85"});

            }
        } );

    $close.on( 'click', function() {
        $close.hide();
        $name.empty();
        stapel.closePile();
        $(".tp-info").css("left", "-100%");
        $(".globalSeparator").css("display", "none");
    } );

} );

