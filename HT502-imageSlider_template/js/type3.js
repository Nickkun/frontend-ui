$(document).ready(function() {
    /* Mouse Over Event 를 통해서 
     * setInterval() 제어한다
     */
    $("#slider ul li.item:gt(0)").hide();

    var fading;

    function start() {
        fading = setInterval(function() {
            $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        }, 2000);
    };
    function stop() {
        clearInterval(fading);
    }
    
    start();   
    
    $("#slider").hover(function() {
        console.log("Mouse In");
        stop();
    }, function() {
        console.log("Mouse Out");
        start();
    });
});