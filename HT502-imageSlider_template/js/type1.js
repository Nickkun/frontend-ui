$(document).ready(function() {
    // slider 라는 id 속성을 가진 element 를 선택
    // jquery
    // $("#slider")
    // $(".slider")
    // javascript
    // document.getElementById("slider")
    // document.getElementsByClassName("slider")


    $items = $("#slider ul li.item");

    var currentIndex = 2;
    var imgCount = $items.length;

    setInterval(function() {
        if (currentIndex >= imgCount) {
            currentIndex = 0;
        }
        // 1. 모든 이미지에 active 클래스를 제거한다
        $items.removeClass('active');
        $items.eq(currentIndex++).addClass('active');
    }, 1000);
});