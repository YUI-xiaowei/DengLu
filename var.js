/**
 * Created by hp on 2016/3/7.
 */
//
        var i=0;
        var w=$(".content li").width();
        var move=0;
        function start(){
            i++;
            if(i>2)i=0;
            move=-w*i;
            $(".content").animate({
                left:move
            },500)
        }
        setInterval("start()",5000);

