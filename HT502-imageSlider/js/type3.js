$(document).ready(function () {
    
    // Inteval Control 을 위한 변수
    let sliding;
    
    // 0 번째 li 를 제외한 element 를 hide (display: none;)
    $('#slider ul li:gt(0)').hide();

    // Interval 을 시작하는 함수
    function start() {
        sliding = setInterval(() => {
            $('#slider ul .item:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider ul');
        }, 3000);
    }
    
    // Interval 을 종료하는 함수
    function stop() {
        clearInterval(sliding);
    }

    start();

    // Mouse over 에 대한 Event 제어
    $('#slider ul').hover(() => {
        console.log("Mouse In");
        stop();
    }, () => {
        console.log("Mouse Out");
        start();
    });
});