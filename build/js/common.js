$(document).ready(function () {
    /*
    *
    *  global vars
    *
    * */

    //TODO: vars
    var size = $(window).width(),
        path =  window.location.pathname,
        mobNav = $('.header-js__mob');

    /*
    *
    * all functions
    *
    */

    //TODO: numbers parallax

    function parralax()
    {
        var relax = new Rellax('.rellax', {
            speed: -2,
            center: true,
            wrapper: null,
            round: false,
            vertical: true,
            horizontal: false
        });
    }


    //best section mousemove functions
    //TODO: mouseMove function
    function mouseMove(e, elem)
    {
        var conr = $('.container').width();
        var win = $(window).width();
        var marg = (win - conr) / 2;
        var elWidth = elem.width();
        var parLWh = elem.children().width();
        var loadW = (parLWh - elWidth) / 2;

        var w  = elem.width() / 3,
            child = elem.children(),
            w2 = w + w - 20,
            pX = e.pageX;
        if(pX < w ){
            child.css({
                'transform': 'translateX('+ marg +'px)',
                'transition': '2s'
            });
        }
        else if(pX > w && pX < w2){
            child.css({
                'transform': 'translateX(-'+ loadW +'px)',
                'transition': '2s'
            });
        }
        else if(pX > w2) {
            child.css({
                'transform': 'translateX(-'+ ((loadW*2) + marg) +'px)',
                'transition': '2s'
            });
        } else {
            child.css({
                'transform': 'translateX(-'+ loadW +'px)',
                'transition': '2s'
            });
        }
    }


    //TODO: team mousemove function
    function mouseMoveTeam(e, elem)
    {
        var win = $(window).width();
        var block = elem.width();
        var zone = win / 3;
        var zone2 = zone + zone;
        var child = elem.children();
        var conr = $('.container').width();
        var item = $('.team_block__item').width();
        var itemChild = $('.team_block__img_circle').width();
        var itemResult = (item - itemChild) / 2;
        var pX = e.pageX;
        var marg = (block - conr) / 2;
        var marg = marg - itemResult;

        if (pX < zone) {
            child.css({
                'transform': 'translateX('+ marg +'px)',
                'transition': '2s'
            });
        }
        else if (pX > zone && pX < zone2) {
            child.css({
                'transform': 'translateX(0)',
                'transition': '2s'
            });
        }
        else if (pX > zone2) {
            child.css({
                'transform': 'translateX(-'+ marg +'px)',
                'transition': '2s'
            });
        } else {
            child.css({
                'transform': 'translateX(0)',
                'transition': '2s'
            });
        }

    }

    //TODO: function reset
    function mouseRes(elem)
    {
        var child = elem.children();
        child.css({
            'transform': 'translateX('+ -loadW +'px)',
            'transition': '2s'
        });
    }

    //TODO: mobile scroll function
    function mobileScroll()
    {
        var lastScroll = 0;
        $(window).scroll(function(e){
            var state = $(this).scrollTop(),
                w = $(window).scrollTop();
            if(w >= 125){
                if(state > lastScroll) {
                    mobNav.slideUp(500);
                } else {
                    mobNav.slideDown(500);
                }
                lastScroll = state;
            } else {
                mobNav.slideUp(500);
            }
        });
    }

    //TODO: validate functions
    function validName()
    {
        var name = $('#name');

        if (name.val() !== '') {
            var regName = /^[a-zA-Zа-яА-Я]+$/;
            name.addClass('not_error').removeClass('error');
            name.siblings('.input_error').text('');
            if (regName.test(name.val())) {
                name.removeClass('error').addClass('not_error');
                name.siblings('.input_error').text('');
            } else {
                name.removeClass('not_error').addClass('error');
                name.siblings('.input_error').text('В заполнении этого поля допущена ошибка');

            }
        } else {
            name.removeClass('not_error').addClass('error');
            name.siblings('.input_error').text('Это поле обязательно для заполнения');
        }
    }

    function validMail()
    {
        var mail = $('#email');
        if (mail.val() !== '') {
            var regMail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            mail.addClass('not_error').removeClass('error');
            mail.siblings('.input_error').text('');
            if (regMail.test(mail.val())) {
                mail.removeClass('error').addClass('not_error');
                mail.siblings('.input_error').text('')
            } else {
                mail.removeClass('not_error').addClass('error');
                mail.siblings('.input_error').text('В заполнении этого поля допущена ошибка');
            }
        } else {
            mail.removeClass('not_error').addClass('error');
            mail.siblings('.input_error').text('Это поле обязательно для заполнения');
        }
    }

    function validMessage()
    {
        var msg = $('#message');
        if (msg.val() !== '') {
            msg.addClass('not_error').removeClass('error');
            msg.siblings('.input_error').text('');
        } else {
            msg.removeClass('not_error').addClass('error');
            msg.siblings('.input_error').text('Это поле обязательно для заполнения');
        }
    }

    function validate()
    {
        validName();
        validMail();
        validMessage();
    }

    /*
    *
    * end functions
    *
    */

    //TODO: fixed menu
    if(size >= '814'){
        // desctop
        $(window).scroll(function () {
            var w = $(window).scrollTop();
            if(w >= 0){
                $('.header-js').addClass('fixed');
            }
        });
    } else {
        //mobile
        mobileScroll();
    }



    //TODO: active page highlighter
    $('.nav_list__item a').each(function () {
        // get all links
        var location = window.location.href; // get adres page
        var link = this.href;                // get adres link
        if(location === link) {
            $(this).addClass('current');  //add class
        }
    });



    //TODO: home page highlight deactivate
    if (path === '/' && size >= '814') {
        parralax();
    }

    //TODO: mouseMove init
        if(size >= '814'){
            var jsOver = $('.js-over').width();
            var parL = $('.parallax-layer');
            var parLWh = parL.width();
            var loadW = (parLWh - jsOver) / 2;

            parL.css({
                'transform': 'translateX('+ -loadW +'px)'
            });

            //best section mousemove event
            $('.js-over').hover(function () {
                var that = $(this);

                that.mousemove(function(e){
                    mouseMove(e, that);
                });
            }, function () {
                var that = $(this);
                mouseRes(that);
            });

            $('.js-team').hover(function () {
                var that = $(this);
                that.mousemove(function(e){
                    mouseMoveTeam(e, that);
                });
            }, function () {
                var that = $(this);
                that.children().css({
                    'transform': 'translateX(0)',
                    'transition': '2s'
                })
            });
        }

    //TODO: team hover
    $('.js-img').hover(function () {
      $(this).parent().siblings('.team_block__img_circle').css({
          'background-color': '#e94e53',
          'background-image': 'none'
      });
    },
        function () {
          $(this).parent().siblings('.team_block__img_circle').removeAttr('style');
        });

    //TODO: textarea autoresize init
    $('textarea').autoResize({
        extraSpace : 0
    });

    // best section parallax
    // $('.js-over').hover(function () {
    //         var child = $(this).children('.parallax-layer');
    //         var movementStrength = $(window).width() / 2;
    //         var width = movementStrength / $(window).width();
    //         $(".js-over").mousemove(function(e){
    //             var pageX = e.pageX - ($(window).width() / 2);
    //
    //             var newvalueX = width * pageX * -1;
    //             newvalueX = Math.round(newvalueX);
    //             child.css({
    //                 "transform": "translateX(" + newvalueX + "px)"
    //             });
    //         });
    // },
    //     function () {
    //         $(this).children('.parallax-layer').css({
    //             "transform": "translateX(-1%)",
    //             "transition": "1s "
    //         });
    //         setTimeout(function () {
    //             $(this).children('.parallax-layer').css('transition', '');
    //         }, 1000);
    //
    //     });

    //TODO: best section items hover
    $('.img_item').hover(
        function () {
            $(this).children('.img_item__img').css({
                'transform': 'scale(1.2)',
                'filter': 'blur(6px)',
                'opacity': '.2',
                'transition': '1s'
            });
            $(this).children('.img_item__hover').css({
                'opacity': '1',
                'transition': '1s'
            });
        },
        function () {
            $(this).children('.img_item__img').css({
                'width': '100%',
                'transform': 'scale(1)',
                'filter': 'blur(0)',
                'opacity': 1,
                'transition': '1s'
            });
            $(this).children('.img_item__hover').css({
                'opacity': '0',
                'transition': '1s'
            });
        });

    //TODO: form validate
    $('#name').blur(function () {
        validName();
    });

    $('#email').blur(function () {
        validMail();
    });

    $('#message').blur(function () {
        validMessage();
    });

    //TODO: send form
    $("#form").submit(function(e) {
        e.preventDefault();
        validate();
        if ($('.not_error').length === 3) {
            var subm = $('.submit');
            var form_data = $(this).serialize();

            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: form_data,
                success: function() {
                    subm.siblings('.submit_error').text('');
                    subm.addClass('submit--success');
                    $('#name, #email, #company, #message').val('');
                },
                error: function () {
                    subm.siblings('.submit_error').text('Сообщение не отправлено');
                    subm.removeClass('submit--success');
                }
            });
        }

    });
});