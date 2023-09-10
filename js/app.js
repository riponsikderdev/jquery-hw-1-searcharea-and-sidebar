// NAV AND SIDEBAR STARTS HERE
$(function () {
    $('.menu_btn').click(function () {
        $('.sidebar').addClass('active');
    })

    $('.cross_btn').click(function () {
        $('.sidebar').removeClass('active');
    })

    $('.sidebar').click(function () {
        if ($(this).hasClass("sidebar")) {
            $('.sidebar').removeClass('active');
        }

    })
})
// NAV AND SIDEBAR ENDS HERE
// SEARCH AREA STARTS HERE
$(function () {
    $('.searchBtn').click(function () {
        $('.searchArea').addClass('active')
    })

    $('.cancelBtn').click(function () {
        $('.searchArea').removeClass('active')
    })
})
// SEARCH AREA ENDS HERE