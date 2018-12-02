$(document).ready(function () {
    // 모든 슬라이드 숨김
    $('#slider ul li:gt(0)').hide();

    // 첫번째 슬라이드 아이템에 대해 반복을 실행
    setInterval(() => {
        $('#slider ul .item:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider ul');
    }, 3000);
});