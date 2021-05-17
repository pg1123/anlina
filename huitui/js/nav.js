
$(function(){
//点击头像出现菜单
    $(".i_tx").on("click", function(e){
      if($(".topnav_slide").is(":hidden")){
        $(".topnav_slide").show();
      }else{
        $(".topnav_slide").hide();
      }

      $(document).one("click", function(){
        $(".topnav_slide").hide();
      });

      e.stopPropagation();
    });
    $(".topnav_slide").on("click", function(e){
      e.stopPropagation();
    });


$(".fa-window-close").click(function(){
  $(this).parents("li").hide();
})


});


layui.use(['layer','element'], function(){

      var layer = layui.layer
	  ,element = layui.element;
//监听折叠
  element.on('collapse(test)', function(data){
    layer.msg('展开状态：'+ data.show);
  });
    });  