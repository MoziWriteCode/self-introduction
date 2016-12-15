$(function() {

  if ($.browser.msie && $.browser.version < 10) {
    $('body').addClass('ltie10');
  }
  var ID
  $.fn.fullpage({
    verticalCentered: false,
    navigation: true,
    navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
    afterLoad: function(anchorLink, index){
      console.log(index);
      if (index == 1) {
        Snowflakes();
      }
      if(index === 2){
        $('.section2').find('img').fadeIn(888);
        $('.section2').find('#section2_left').delay(500).animate({
          left: '3%'
        }, 1000, 'easeOutExpo');
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },3500);
        });
      }
      if(index != 1){
        console.log('dddd');
        window.clearInterval(ID)
      }
      if(index == 4){
        $('.section4').find('p').fadeIn(2000);
      }
    }
  });
  $(window).resize(function(){
      autoScrolling();
  });
  autoScrolling();
  Snowflakes();
  function autoScrolling(){
      var $ww = $(window).width();
      if($ww < 1024){
          $.fn.fullpage.setAutoScrolling(false);
      } else {
          $.fn.fullpage.setAutoScrolling(true);
      }
  }

  function Snowflakes(){
    var d="<div class='snow'>❅<div>"
		ID = setInterval(function(){
      console.log('aaaaaaaa');
			var f=$(document).width();
			var e=Math.random()*f-100;
			var o=0.3+Math.random();
			var fon=10+Math.random()*30;
			var l = e - 100 + 200 * Math.random();
			var k=2000 + 5000 * Math.random();
			$(d).clone().appendTo(".snowbg").css({
				left:e+"px",
				opacity:o,
				"font-size":fon,
			}).animate({
			  top:"400px",
				left:l+"px",
				opacity:0.1,
			},k,"linear",function(){$(this).remove()})
		},10)
  }
});
