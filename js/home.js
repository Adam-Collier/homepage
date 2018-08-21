(function($) {
  setTimeout(function() {
    console.log("force resize");
var min = "</script><script type='text/javascript'>!function(e){e(document).ready(function(){e('#homeSlider').slick({infinite:!0,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1,dots:!0,slide:'.fullwidth',slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:'unslick'}]}),e('.slick-three').slick({infinite:!0,adaptiveHeight:!1,slide:':not(.blocker)',dots:!1,slidesToShow:3,slidesToScroll:1,arrows:!0,centerMode:!0,centerPadding:'0',responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1},centerMode:!0,centerPadding:'50',variableWidth:!0}]})}),e(window).on('resize orientationchange',function(){e('#homeSlider').slick('resize'),e('.slick-three').slick('resize')}),e(window).scroll(_.debounce(function(){if(e(window).width()<767){var i=e(this).scrollTop();console.log(i),i>e('.slick-three').offset().top-400&&(e('.slick-three .slick-slide').css('animation','swipe 1200ms ease-in-out forwards'),setTimeout(function(){e('.blocker').css('display','none')},1600))}},100))}(jQuery);</script>"

    var jira =
      "<script type='text/javascript' src='https://missguided.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/l24at6/b/0/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-UK&collectorId=efc408fe'></script>";

    $("body").append(jira);
    $("body").append(min);


    $("#homeSlider").slick("resize");
    $(".slick-three").slick("resize");
  }, 300);
})(jQuery);
