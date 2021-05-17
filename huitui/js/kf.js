//在线客服
(function($) {

		//点击客服头像弹出
		$(".girl").click(function(){
			$(".kfopen").slideDown()
			$(".livechat-girl").hide();
		});
		$(".girlopen ,.closeend").click(function(){
			$(".kfopen").hide(function(){
				$(".kfopen").slideUp();
				$(".livechat-girl").show();
			});

		})

		setInterval(function(){
			if($(".animated-circles").hasClass("animated")){
				$(".animated-circles").removeClass("animated");
			}else{
				$(".animated-circles").addClass('animated');
			}
		},3000);
		var wait = setInterval(function(){
			$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
			clearInterval(wait);
		},4500);
		$(".livechat-girl").hover(function(){
			clearInterval(wait);
			$(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
		},function(){
			$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
		}).click(function(){
			if(isMobile){
				window.location.href = '#';
			}else{
				var oWidth = 606,
				oHeight = 630,
				top = ($(window).height()/2)-(oHeight/2),
				left = ($(window).width()/2)-(oWidth/2);
				window.open('#','','width='+oWidth+',height='+oHeight+',scrollbars=yes,top='+top+',left='+left+',resizable=yes');
			}
		});
	})(jQuery);

//确定反馈弹窗
function fankui(){
	layer.msg('感谢您的反馈，您提交的问题我们会尽快处理，并及时答复您处理结果，请稍候……');
	$(".kfopen").slideUp();
	$(".livechat-girl").show();

}

//确定反馈弹窗
function closekf(){
	$(".onlinekf").hide();
}