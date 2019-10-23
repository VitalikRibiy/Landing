$(function() {
    $('.load-more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: './data.html',
            type: 'GET',
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(response) {
                setTimeout(function() {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(response);
                }, 1000);
            },
            error: function() {
                alert('Error');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    });
});

$("#GoAbout").click(function() {
    $('html,body').animate({
        scrollTop: $("#single-post").offset().top
    }, 50);
});

$("#GoPosts").click(function() {
    $('html,body').animate({
        scrollTop: $("#Posts").offset().top
    }, 100);
});

$("#GoSubscribe").click(function() {
    $('html,body').animate({
        scrollTop: $("#Subscribe").offset().top
    }, 150);
});

$("#GoFindUs").click(function() {
    $('html,body').animate({
        scrollTop: $("#FindUs").offset().top
    }, 200);
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

});