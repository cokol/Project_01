(function($) {

    $(document).ready(function() {

        $('nav').each(function() {
            $('nav ul').append('<li class="nav-active"></li>');
            var $navActive = $('nav .nav-active');

            if ($('nav li.active').length > 0) {
                $navActive
                    .width($('nav li.active').width())
                    .css('left', $('nav li.active').position().left)
                    .data('origLeft', $navActive.position().left)
                    .data('origWidth', $navActive.width());
            } else {
                $navActive
                    .data('origLeft', 0)
                    .data('origWidth', 0);
            }

            $('nav li a').hover(
                function() {
                    var $el = $(this);
                    var leftPos = $el.parent().position().left;
                    var newWidth = $el.parent().width();
                    $navActive.stop().animate({
                        left: leftPos,
                        width: newWidth
                    });
                },

                function() {
                    $navActive.stop().animate({
                        left: $navActive.data('origLeft'),
                        width: $navActive.data('origWidth')
                    });
                }
            );
        });

        $('.submenu').each(function() {
            $('.submenu ul').append('<li class="submenu-active"></li>');
            var $submenuActive = $('.submenu .submenu-active');

            if ($('submenu li.active').length > 0) {
                $submenuActive
                    .width($('.submenu li.active').width())
                    .css('left', $('.submenu li.active').position().left)
                    .data('origLeft', $submenuActive.position().left)
                    .data('origWidth', $submenuActive.width());
            } else {
                $submenuActive
                    .data('origLeft', 0)
                    .data('origWidth', 0);
            }

            $('.submenu li a').hover(
                function() {
                    var $el = $(this);
                    var leftPos = $el.parent().position().left;
                    var newWidth = $el.parent().width();
                    $submenuActive.stop().animate({
                        left: leftPos,
                        width: newWidth
                    });
                },

                function() {
                    $submenuActive.stop().animate({
                        left: $submenuActive.data('origLeft'),
                        width: $submenuActive.data('origWidth')
                    });
                }
            );
        });

        $('.content table').each(function() {
            $(this).find('tbody tr:odd').addClass('odd');
        });

        $('.portfolio a').mouseover(function() {
            var curLink = $(this);
            curLink.find('.portfolio-bg').css({'padding-bottom': curLink.find('.portfolio-add').outerHeight()});
        });

        $('.slider').each(function() {
            var curSlider = $(this);
            curSlider.data('curIndex', 0);
            curSlider.data('disableAnimation', true);
        });

        $('.slider .link-next').click(function(e) {
            var curSlider = $('.slider');

            if (curSlider.data('disableAnimation')) {
                var curIndex = curSlider.data('curIndex');

                curIndex++;
                if (curIndex == curSlider.find('li').length) {
                    curIndex = 0;
                }

                curSlider.data('curIndex', curIndex);

                curSlider.data('disableAnimation', false);
                curSlider.find('li:visible').fadeOut(function() {
                    curSlider.find('li').eq(curIndex).fadeIn(function() {
                        curSlider.data('disableAnimation', true);
                    });
                });
            }
            e.preventDefault();
        });

        $('.slider .link-prev').click(function(e) {
            var curSlider = $('.slider');

            if (curSlider.data('disableAnimation')) {
                var curIndex = curSlider.data('curIndex');

                curIndex--;
                if (curIndex == -1) {
                    curIndex = curSlider.find('li').length - 1;
                }

                curSlider.data('curIndex', curIndex);

                curSlider.data('disableAnimation', false);
                curSlider.find('li:visible').fadeOut(function() {
                    curSlider.find('li').eq(curIndex).fadeIn(function() {
                        curSlider.data('disableAnimation', true);
                    });
                });
            }
            e.preventDefault();
        });

    });

    $(window).load(function() {
        $('.news-list').each(function() {
            var curBlock = $(this);
            var curHeight = 0;
            curBlock.find('a').each(function() {
                if (curHeight < $(this).height()) {
                    curHeight = $(this).height();
                }
            });
            curBlock.find('a').css({'min-height': curHeight});
        });
    });

})(jQuery);