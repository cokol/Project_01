(function($) {

    $(document).ready(function() {

        $('.submenu-services a').click(function(e) {
            var curLink = $(this).attr('href');
            if ($(curLink).length > 0) {
                $.scrollTo($(curLink), 500);
            }
            e.preventDefault();
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

        $('.service:odd').addClass('odd');

        $('.work-prototype-preview a').click(function(e) {
            var curLI = $(this).parent();
            if (!curLI.hasClass('active')) {
                var curPreview = $(this).parents().filter('.work-prototype-preview');
                var curIndex = curPreview.find('li').index(curLI);
                curPreview.find('li.active').removeClass('active');
                curLI.addClass('active');

                var curSlider = curPreview.prev();
                curSlider.find('li.active').removeClass('active');
                curSlider.find('li').eq(curIndex).addClass('active');

                if (curSlider.find('li').eq(curIndex).find('.jspScrollable').length > 0) {
                    curSlider.find('.work-prototype-scrollable').show();
                } else {
                    curSlider.find('.work-prototype-scrollable').hide();
                }
            }
            e.preventDefault();
        });

        $('.work-prototype-next').click(function(e) {
            var curBlock = $(this).parents().filter('.work-prototype');
            var curSlider = curBlock.find('.work-prototype-slider');
            var curPreview = curBlock.find('.work-prototype-preview');

            var curIndex = curSlider.find('li').index(curSlider.find('li.active'));
            curIndex++;
            if (curIndex > curSlider.find('li').length - 1) {
                curIndex = 0;
            }

            curPreview.find('li.active').removeClass('active');
            curPreview.find('li').eq(curIndex).addClass('active');

            curSlider.find('li.active').removeClass('active');
            curSlider.find('li').eq(curIndex).addClass('active');

            if (curSlider.find('li').eq(curIndex).find('.jspScrollable').length > 0) {
                curSlider.find('.work-prototype-scrollable').show();
            } else {
                curSlider.find('.work-prototype-scrollable').hide();
            }

            e.preventDefault();
        });

        $('.work-prototype-prev').click(function(e) {
            var curBlock = $(this).parents().filter('.work-prototype');
            var curSlider = curBlock.find('.work-prototype-slider');
            var curPreview = curBlock.find('.work-prototype-preview');

            var curIndex = curSlider.find('li').index(curSlider.find('li.active'));
            curIndex--;
            if (curIndex < 0) {
                curIndex = curSlider.find('li').length - 1;
            }

            curPreview.find('li.active').removeClass('active');
            curPreview.find('li').eq(curIndex).addClass('active');

            curSlider.find('li.active').removeClass('active');
            curSlider.find('li').eq(curIndex).addClass('active');

            if (curSlider.find('li').eq(curIndex).find('.jspScrollable').length > 0) {
                curSlider.find('.work-prototype-scrollable').show();
            } else {
                curSlider.find('.work-prototype-scrollable').hide();
            }

            e.preventDefault();
        });

        $('.work-mobile').each(function() {
            var curSlider = $(this);

            if (curSlider.find('li').length == 1) {
                curSlider.find('.work-mobile-ctrl, .work-mobile-next, .work-mobile-prev').hide();
                var curIndex = 0;
            } else if (curSlider.find('li').length == 2) {
                var newHTML = '';
                for (var i = 0; i < curSlider.find('li').length; i++) {
                    newHTML += '<a href="#"></a>';
                }
                curSlider.find('.work-mobile-ctrl').html(newHTML);
                curSlider.find('.work-mobile-ctrl a:first').addClass('active');
                var curIndex = 0;
                curSlider.find('.work-mobile-prev').hide();
            } else {
                var newHTML = '';
                for (var i = 0; i < curSlider.find('li').length; i++) {
                    newHTML += '<a href="#"></a>';
                }
                curSlider.find('.work-mobile-ctrl').html(newHTML);
                curSlider.find('.work-mobile-ctrl a:first').addClass('active');

                curSlider.find('ul').append(curSlider.find('ul').html());
                curSlider.find('ul').width(curSlider.find('li:first').width() * curSlider.find('li').length);
                var curIndex = curSlider.find('li').length / 2;
            }

            curSlider.data('curIndex', curIndex);
            curSlider.data('disableAnimation', true);

            curSlider.find('ul').css({'left': -curIndex * curSlider.find('li:first').width()});
            curSlider.find('li').eq(curIndex).addClass('active');
        });

        $('.work-mobile-next').click(function(e) {
            var curSlider = $(this).parents().filter('.work-mobile');

            if (curSlider.data('disableAnimation')) {
                if (curSlider.find('li').length == 2) {
                    curSlider.find('.work-mobile-prev').show();
                    curSlider.find('.work-mobile-next').hide();

                    var curIndex = curSlider.data('curIndex');
                    curIndex++;

                    curSlider.data('disableAnimation', false);
                    curSlider.find('li.active').removeClass('active');

                    curSlider.find('ul').animate({'left': -(curIndex * curSlider.find('li:first').width())}, function() {
                        curSlider.data('curIndex', curIndex);
                        curSlider.find('li').eq(curIndex).addClass('active');
                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                        if (curSlider.find('li.active .jspScrollable').length > 0) {
                            curSlider.find('.work-mobile-scrollable').show();
                        } else {
                            curSlider.find('.work-mobile-scrollable').hide();
                        }
                        curSlider.data('disableAnimation', true);
                    });
                } else {
                    var curIndex = curSlider.data('curIndex');
                    curIndex++;

                    curSlider.data('disableAnimation', false);
                    curSlider.find('li.active').removeClass('active');

                    curSlider.find('ul').animate({'left': -(curIndex * curSlider.find('li:first').width())}, function() {
                        if (curIndex == curSlider.find('li').length - 2) {
                            curIndex = curSlider.find('li').length / 2 - 2;
                            curSlider.find('ul').css({'left': -(curIndex * curSlider.find('li:first').width())});
                        }
                        curSlider.data('curIndex', curIndex);
                        curSlider.find('li').eq(curIndex).addClass('active');
                        if (curIndex >= curSlider.find('li').length / 2) {
                            curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                            curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                        } else {
                            curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                            curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                        }
                        if (curSlider.find('li.active .jspScrollable').length > 0) {
                            curSlider.find('.work-mobile-scrollable').show();
                        } else {
                            curSlider.find('.work-mobile-scrollable').hide();
                        }
                        curSlider.data('disableAnimation', true);
                    });
                }
            }

            e.preventDefault();
        });

        $('.work-mobile-prev').click(function(e) {
            var curSlider = $(this).parents().filter('.work-mobile');

            if (curSlider.data('disableAnimation')) {
                if (curSlider.find('li').length == 2) {
                    curSlider.find('.work-mobile-prev').hide();
                    curSlider.find('.work-mobile-next').show();

                    var curIndex = curSlider.data('curIndex');
                    curIndex--;

                    curSlider.data('disableAnimation', false);
                    curSlider.find('li.active').removeClass('active');

                    curSlider.find('ul').animate({'left': -(curIndex * curSlider.find('li:first').width())}, function() {
                        curSlider.data('curIndex', curIndex);
                        curSlider.find('li').eq(curIndex).addClass('active');
                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                        if (curSlider.find('li.active .jspScrollable').length > 0) {
                            curSlider.find('.work-mobile-scrollable').show();
                        } else {
                            curSlider.find('.work-mobile-scrollable').hide();
                        }
                        curSlider.data('disableAnimation', true);
                    });
                } else {
                    var curIndex = curSlider.data('curIndex');
                    curIndex--;
                    if (curIndex == 0) {
                        curIndex = curSlider.find('li').length / 2;
                        curSlider.find('ul').css({'left': -((curIndex + 1) * curSlider.find('li:first').width())});
                    }

                    curSlider.data('disableAnimation', false);
                    curSlider.find('li.active').removeClass('active');

                    curSlider.find('ul').animate({'left': -(curIndex * curSlider.find('li:first').width())}, function() {
                        curSlider.data('curIndex', curIndex);
                        curSlider.find('li').eq(curIndex).addClass('active');
                        if (curIndex >= curSlider.find('li').length / 2) {
                            curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                            curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                        } else {
                            curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                            curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                        }
                        if (curSlider.find('li.active .jspScrollable').length > 0) {
                            curSlider.find('.work-mobile-scrollable').show();
                        } else {
                            curSlider.find('.work-mobile-scrollable').hide();
                        }
                        curSlider.data('disableAnimation', true);
                    });
                }
            }

            e.preventDefault();
        });

        $('.work-mobile').on('click', '.work-mobile-ctrl a', function(e) {
            var curLink = $(this);
            if (!curLink.hasClass('active')) {
                var curSlider = curLink.parents().filter('.work-mobile');

                if (curSlider.data('disableAnimation')) {
                    if (curSlider.find('li').length == 2) {
                        var curIndex = curSlider.find('.work-mobile-ctrl a').index(curLink);

                        if (curIndex == 0) {
                            curSlider.find('.work-mobile-prev').hide();
                            curSlider.find('.work-mobile-next').show();
                        } else {
                            curSlider.find('.work-mobile-prev').show();
                            curSlider.find('.work-mobile-next').hide();
                        }

                        curSlider.data('disableAnimation', false);
                        curSlider.find('li.active').removeClass('active');

                        curSlider.find('ul').animate({'left': -(curIndex * curSlider.find('li:first').width())}, function() {
                            curSlider.data('curIndex', curIndex);
                            curSlider.find('li').eq(curIndex).addClass('active');
                            curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                            curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                            if (curSlider.find('li.active .jspScrollable').length > 0) {
                                curSlider.find('.work-mobile-scrollable').show();
                            } else {
                                curSlider.find('.work-mobile-scrollable').hide();
                            }
                            curSlider.data('disableAnimation', true);
                        });
                    } else {
                        var newIndex = curSlider.find('.work-mobile-ctrl a').index(curLink);
                        var curIndex = curSlider.data('curIndex');

                        curSlider.data('disableAnimation', false);
                        curSlider.find('li.active').removeClass('active');

                        if (curIndex >= curSlider.find('li').length / 2) {
                            if (newIndex == curSlider.find('.work-mobile-ctrl a').length - 1) {
                                newIndex = curSlider.find('li').length / 2 - 1;
                                curSlider.find('ul').animate({'left': -(newIndex * curSlider.find('li:first').width())}, function() {
                                    var curIndex = newIndex;
                                    if (curIndex == curSlider.find('li').length - 2) {
                                        curIndex = curSlider.find('li').length / 2 - 2;
                                        curSlider.find('ul').css({'left': -(curIndex * curSlider.find('li:first').width())});
                                    }
                                    curSlider.data('curIndex', curIndex);
                                    curSlider.find('li').eq(curIndex).addClass('active');
                                    if (curIndex >= curSlider.find('li').length / 2) {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                                    } else {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                                    }
                                    if (curSlider.find('li.active .jspScrollable').length > 0) {
                                        curSlider.find('.work-mobile-scrollable').show();
                                    } else {
                                        curSlider.find('.work-mobile-scrollable').hide();
                                    }
                                    curSlider.data('disableAnimation', true);
                                });
                            } else {
                                curSlider.find('ul').animate({'left': -((newIndex + curSlider.find('li').length / 2) * curSlider.find('li:first').width())}, function() {
                                    var curIndex = newIndex + curSlider.find('li').length / 2;
                                    if (curIndex == curSlider.find('li').length - 2) {
                                        curIndex = curSlider.find('li').length / 2 - 2;
                                        curSlider.find('ul').css({'left': -(curIndex * curSlider.find('li:first').width())});
                                    }
                                    curSlider.data('curIndex', curIndex);
                                    curSlider.find('li').eq(curIndex).addClass('active');
                                    if (curIndex >= curSlider.find('li').length / 2) {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                                    } else {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                                    }
                                    if (curSlider.find('li.active .jspScrollable').length > 0) {
                                        curSlider.find('.work-mobile-scrollable').show();
                                    } else {
                                        curSlider.find('.work-mobile-scrollable').hide();
                                    }
                                    curSlider.data('disableAnimation', true);
                                });
                            }
                        } else {
                            if (newIndex == 0) {
                                curSlider.find('ul').animate({'left': -((newIndex + curSlider.find('li').length / 2) * curSlider.find('li:first').width())}, function() {
                                    var curIndex = newIndex + curSlider.find('li').length / 2;
                                    if (curIndex == 1) {
                                        curIndex = curSlider.find('li').length / 2 + 1;
                                        curSlider.find('ul').css({'left': -(curIndex * curSlider.find('li:first').width())});
                                    }
                                    curSlider.data('curIndex', curIndex);
                                    curSlider.find('li').eq(curIndex).addClass('active');
                                    if (curIndex >= curSlider.find('li').length / 2) {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                                    } else {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                                    }
                                    if (curSlider.find('li.active .jspScrollable').length > 0) {
                                        curSlider.find('.work-mobile-scrollable').show();
                                    } else {
                                        curSlider.find('.work-mobile-scrollable').hide();
                                    }
                                    curSlider.data('disableAnimation', true);
                                });
                            } else {
                                curSlider.find('ul').animate({'left': -(newIndex * curSlider.find('li:first').width())}, function() {
                                    var curIndex = newIndex;
                                    if (curIndex == 1) {
                                        curIndex = curSlider.find('li').length / 2 + 1;
                                        curSlider.find('ul').css({'left': -(curIndex * curSlider.find('li:first').width())});
                                    }
                                    curSlider.data('curIndex', curIndex);
                                    curSlider.find('li').eq(curIndex).addClass('active');
                                    if (curIndex >= curSlider.find('li').length / 2) {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex - curSlider.find('li').length / 2).addClass('active');
                                    } else {
                                        curSlider.find('.work-mobile-ctrl a.active').removeClass('active');
                                        curSlider.find('.work-mobile-ctrl a').eq(curIndex).addClass('active');
                                    }
                                    if (curSlider.find('li.active .jspScrollable').length > 0) {
                                        curSlider.find('.work-mobile-scrollable').show();
                                    } else {
                                        curSlider.find('.work-mobile-scrollable').hide();
                                    }
                                    curSlider.data('disableAnimation', true);
                                });
                            }
                        }
                    }
                }
            }
            e.preventDefault();
        });

        $('.contacts-map-link a').click(function(e) {
            $.scrollTo($($(this).attr('href')), 500);
            e.preventDefault();
        });

        function initForm(form) {
            form.find('.form-input input, .form-input textarea').each(function() {
                if ($(this).val() == '') {
                    $(this).parent().find('span').css({'display': 'block'});
                }
            });

            form.find('.form-input input, .form-input textarea').focus(function() {
                $(this).addClass('focus').parent().find('span').css({'display': 'none'});
            });

            form.find('.form-input input, .form-input textarea').blur(function() {
                if ($(this).val() == '') {
                    $(this).parent().find('span').css({'display': 'block'});
                }
                $(this).removeClass('focus')
            });

            form.find('input[name="phone"]').each(function() {
                $(this).mask('+7 999 999-99-99');
            });

            form.find('.form-file input').change(function() {
                $(this).parent().find('span').html($(this).val());
            });

            form.validate({
                submitHandler: function(form) {
                    $(form).find('.loading').show();
                    $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: $(form).serialize(),
                        cache: false
                    }).done(function(html) {
                        $(form).find('.loading').hide();
                        $(form).find('.form-result').html(html).show();
                    });
                }
            });
        }

        $('form').each(function() {
            initForm($(this));
        });

        $('.work-line-btn .btn').click(function(e) {
            $.ajax({
                url: $(this).attr('href'),
                dataType: 'html',
                cache: false
            }).done(function(html) {
                windowOpen(html);

                initForm($('.window form'));
            });

            e.preventDefault();
        });

        $('.recommend-menu a').click(function(e) {
            var curLink = $(this);
            if (!curLink.hasClass('active')) {
                $('.recommend-item').stop(true, true);

                var curIndex = $('.recommend-menu a').index(curLink);
                $('.recommend-menu a.active').removeClass('active');
                curLink.addClass('active');

                if ($('.recommend-item:visible').length > 0) {
                    $('.recommend-item:visible').fadeOut(function() {
                        $('.recommend-item').eq(curIndex).fadeIn();
                    });
                } else {
                    $('.recommend-item').eq(curIndex).fadeIn();
                }
            }
            e.preventDefault();
        });

    });

    $(window).load(function() {
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

            if ($('.submenu li.active').length > 0) {
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

        if ($('.work-prototype, .work-mobile').length > 0) {
            if (!Modernizr.touch) {
                function nextScroll(curBlock) {
                    if (curBlock.data('isAnimation')) {
                        if (curBlock.parents().filter('.jspScrollable').length > 0) {
                            curBlock.parents().filter('.jspScrollable').data('jsp').scrollByY(10);
                            window.setTimeout(function() { nextScroll(curBlock); }, 100);
                        }
                    }
                }

                $('.work-prototype-slider-img img, .work-mobile-slider-img img').each(function() {
                    $(this).data('isAnimation', false);
                });

                $('.work-prototype-slider-img img, .work-mobile-slider-img img').mousedown(function() {
                    var curBlock = $(this);
                    curBlock.data('isAnimation', false);
                });

                $('.work-prototype-slider-img img, .work-mobile-slider-img img').mousewheel(function() {
                    var curBlock = $(this);
                    curBlock.data('isAnimation', false);
                });

                $('.work-prototype-slider-img img, .work-mobile-slider-img img').mouseover(function() {
                    var curBlock = $(this);
                    curBlock.data('isAnimation', true);
                    nextScroll(curBlock);
                });

                $('.work-prototype-slider-img img, .work-mobile-slider-img img').mouseout(function() {
                    var curBlock = $(this);
                    curBlock.data('isAnimation', false);
                });
            }

            $('.work-prototype').each(function() {
                var curBlock = $(this);
                curBlock.find('.work-prototype-slider-img').jScrollPane({showArrows: true, animateScroll: true, animateDuration: 100});
                if (curBlock.find('.work-prototype-slider li.active .jspScrollable').length > 0) {
                    curBlock.find('.work-prototype-scrollable').show();
                } else {
                    curBlock.find('.work-prototype-scrollable').hide();
                }
            });

            $('.work-mobile').each(function() {
                var curBlock = $(this);
                curBlock.find('.work-mobile-slider-img').jScrollPane({showArrows: true, animateScroll: true, animateDuration: 100});
                if (curBlock.find('.work-mobile-slider li.active .jspScrollable').length > 0) {
                    curBlock.find('.work-mobile-scrollable').show();
                } else {
                    curBlock.find('.work-mobile-scrollable').hide();
                }
            });
        }

        $('.work-layouts-list').each(function() {
            $(this).isotope({
                itemSelector: '.work-layouts-item'
            });
        });

        $('.about').each(function() {
            var curWidth = 0;
            $('.about-col').each(function() {
                curWidth += $(this).width();
            });
            $('.about-list').width(curWidth);

            $('.about-container').jScrollPane();
            $('.about-years-bg').width($('.about-years-item:first').width() * 2).css({'left': $('.about-drag').position().left - $('.about-years-item:first').width() + 12});
            $('.about-drag').draggable({
                axis: 'x',
                containment: 'parent',
                drag: function(event, ui) {
                    var curLeft = ui.position.left;
                    var widthYears = $('.about-years-inner').width();
                    var widthAbout = $('.about-list').width();
                    var api = $('.about-container').data('jsp');
                    if (api) {
                        api.scrollToX(curLeft * widthAbout / widthYears);
                    }
                    $('.about-years-bg').css({'left': ui.position.left - $('.about-years-item:first').width() + 12});
                }
            });
        });

        if (window.location.hash != '') {
            $('a[href="' + window.location.hash + '"]').click();
        }
    });

    $(window).bind('load resize scroll', function() {
        $('.submenu-services').each(function() {
            if ($('.submenu-services').offset().top <= $(window).scrollTop()) {
                $('.submenu-services').addClass('fixed');
            } else {
                $('.submenu-services').removeClass('fixed');
            }
        });
    });

    // открытие окна
    function windowOpen(contentWindow) {
        var windowWidth     = $(window).width();
        var windowHeight    = $(window).height();
        var curScrollTop    = $(window).scrollTop();

        if ($('.window').length == 0) {
            $('body').css({'width': windowWidth, 'height': windowHeight, 'overflow': 'hidden'});
            $(window).scrollTop(0);
            $('.wrapper').css({'top': -curScrollTop});
            $('.wrapper').data('scrollTop', curScrollTop);
        }

        $('body').append('<div class="window"><div class="window-overlay"></div><div class="window-container"><div class="window-content">' + contentWindow + '<a href="#" class="window-close"></a></div></div></div>')

        if ($('.window-container').width() > windowWidth - 40) {
            $('.window-container').css({'margin-left': 20, 'left': 'auto'});
            $('.window-overlay').width($('.window-container').width() + 40);
        } else {
            $('.window-container').css({'margin-left': -$('.window-container').width() / 2});
        }

        if ($('.window-container').height() > windowHeight - 40) {
            $('.window-container').css({'margin-top': 20, 'top': 'auto'});
            $('.window-overlay').height($('.window-container').height() + 40);
        } else {
            $('.window-container').css({'margin-top': -$('.window-container').height() / 2});
        }

        $('.window-overlay').click(function() {
            windowClose();
        });

        $('.window-close').click(function(e) {
            windowClose();
            e.preventDefault();
        });

        $('body').bind('keyup', keyUpBody);
    }

    // обработка Esc после открытия окна
    function keyUpBody(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    }

    // закрытие окна
    function windowClose() {
        $('.window').remove();
        if ($('.window').length == 0) {
            $('body').unbind('keyup', keyUpBody);
            $('.wrapper').css({'top': 'auto'});
            $('body').css({'width': 'auto', 'height': 'auto', 'overflow': 'visible'});
            $(window).scrollTop($('.wrapper').data('scrollTop'));
        }
    }

})(jQuery);