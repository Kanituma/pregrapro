 // var width = $(window).innerWidth;
 var h = $(window).height();
 var times = h / 640;
 console.log(times)
 $("#open").css("transform","translate(-50%,-50%) scale("+times+")")
 // var vflag=true
 // $(window).click(function(){
 //     if(vflag){
 //         $("#open").trigger("play");
 //         console.log("sdf");
 //         vflag = false
 //     }
     
 // })
 
 var flag = true;
 
 $(window).resize(function(){
     $("#open").css("width",$(window).innerWidth + "px");
     $("#open").css("height",$(window).innerHeight + "px");
 });
 var rellax = new Rellax('.rellax', {
     speed: -2,
     center: false,
     wrapper: null,
     round: true,
     vertical: false,
     horizontal: true
 })
 $(".img").click(function(){
     // console.log(ssdf)
     $(".comment").removeClass("close")
     $(".comment").addClass("open")
     
 })
 $(".back").click(function(){
     $(".comment").removeClass("open")
     $(".comment").addClass("close")
 })
 var cmttxtArr = ["文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1",
 "文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2文案2",
 "文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3文案3",
 "文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4文案4",
 "文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5文案5",
 "文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6文案6"]
 var titleArr = ["标题1标题1","标题2标题2","标题3标题3","标题4标题4","标题5标题5"]
 // var cmtArr = [".ione",".itwo",".ithree",".ifour",".isix"]
 $(".img").bind("click",function(){
     // console.log($(".img").index($(this)))
     var i = $(".img").index($(this))
     // console.log(cmttxtArr[i])
     $(".comment p#title").html(titleArr[i])
     $(".comment p#intro").html(cmttxtArr[i])
 })
 // if(window.scrollX)
 var flag = true;
  setInterval(function(){
     // console.log(window.scrollX)
     // console.log($("#ssix").offset().left )
     // console.log($("#ssix").width())
     
     // console.log(window.innerWidth)
     // console.log(window.innerWidth)
     // if(window.scrollX >=0 && window.scrollX <=220){
     //     $("#floor").attr("data-rellax-speed","-12")
     // }else if(window.scrollX >220 && window.scrollX <=420){
     //     $("#floor").attr("data-rellax-speed","-12")
     // }else if(window.scrollX >420 && window.scrollX <=580){
     //     $("#floor").attr("data-rellax-speed","0")
     // }
     // console.log($("#open")[0].currentTime);
     
     $('#open').on('animationend webkitAnimationEnd', function() { 
          //     // $(".page2").css("display","none")
         if(flag == true){
             $("#opbtn").css("opacity","1");
             setTimeout(function(){
                 flag = false;
             },200)
             console.log(flag)
         }
         if(flag == false){
                 $(".white").css("opacity","0")
                 $(".page1").css("display","none")
                 $(".page2").css("display","block")
         }
          
     });
     console.log(flag)
     // if(t<=4){
     //     // $(".page2").css("display","none")
     // }
     // if(t >= 4 && flag == true){
     //     // $("#open").trigger("pause");
     //    
     //     flag = false;
     // }
     // if(t >= 5.2){
     //     $(".white").css("opacity","0")
     //     $(".page1").css("display","none")
         
         
     //     $(".page2").css("display","block")
     //     // $("video").css("display","none")
     //     // $(".page2").removeClass("dnone")
     //     // $("body,html").css("overflow","scroll")
     //     setTimeout(function(){
             
             
     //     },5000)
         
     // }
 },100)

 $(document).scroll(function() {
     var w = $("#ssix").offset().left + $("#ssix").width()
     $(".page2").css("width",w)
     console.log(w)
 })
 $("#opbtn").click(function(){
     console.log("点啦")
     $("#open").css("animation","anim2 1s 1s steps(23) both")
     // console.log(flag);
     $("#opbtn").css("opacity","0")
 })
 // console.log($("#open"))
 
 // if(window.scrollX >=500){
 //     $("#floor").attr("data-rellax-speed","10")
 // }
 // console.log($("#floor").attr("data-rellax-speed"))