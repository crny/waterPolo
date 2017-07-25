/*
* 2017.7.24
 */
(function(window,factory){

    if(typeof define === "function" && define.amd){
        //AMD
        define(factory);
    }else if(typeof module === "object" && module.exports){
        //CMD
        module.exports = factory();
    }else{
        //window
        window.waterPolo = factory();
    }

}(typeof window !== "undefined" ? window : this, function(selector,userOptions){
    var waterPolo=function(selector,userOptions){

        'user strict';//使用严格模式

        var options={
            //canvas宽高
            cW:300,
            cH:300,

            //液面位置
            baseY:150,

            //上层颜色
            oneColor:'rgba(255,48,92,.6)',

            //下层颜色
            twoColor:'rgba(255,48,92,.4)',

            //上层波浪宽度，数越小越宽
            oneWaveWidth:0.011,

            //下层波浪宽度
            twoWaveWidth:0.011,

            //上层波浪高度，数越大越高
            oneWaveHeight:10,

            //下层波浪高度
            twoWaveHeight:10,

            //上层波浪x轴偏移量
            oneOffsetX:1,

            //下层波浪x轴偏移量
            twoOffsetX:2.8,

            //波浪滚动速度，数越大越快
            oneSpeed:0.025,

            //波浪滚动速度，数越大越快
            twoSpeed:0.035
        };

        //全局变量
        var canvas=null,
            ctx=null,
            W=null,
            H=null;

        //参数混合相当于$.extend([old],[new])
        var mergeOption=function(userOptions,options){
            Object.keys(userOptions).forEach(function(key){
                options[key]=userOptions[key];
            })
        };

        //生成液面
        var makeLiquaid=function(ctx,xOffset,waveWidth,waveHeight,color){
            ctx.save();
            var points = [];//用于存放绘制Sin曲线的点
            ctx.beginPath();
            //在x轴上取点
            for (var x = 0; x < options.cW; x += 20 / options.cW) {
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = -Math.sin(x * waveWidth + xOffset);
                points.push([x, options.baseY + y * waveHeight]);
                ctx.lineTo(x, options.baseY + y * waveHeight);
            }
            //封闭路径
            ctx.lineTo(options.cW, options.cH);
            ctx.lineTo(0, options.cH);
            ctx.lineTo(points[0][0], points[0][1]);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        };



        //初始化设置
        var init=function(selector,userOptions){
            mergeOption(userOptions,options);

            canvas=document.getElementById(selector);
            ctx=canvas.getContext('2d');

            canvas.width=options.cW;
            canvas.height=options.cH;

            (function drawFrame(){
                window.requestAnimationFrame(drawFrame);
                ctx.clearRect(0, 0, options.cW, options.cH);
                makeLiquaid(ctx,options.oneOffsetX,options.oneWaveWidth,options.oneWaveHeight,options.oneColor);
                makeLiquaid(ctx,options.twoOffsetX,options.twoWaveWidth,options.twoWaveHeight,options.twoColor);

                options.oneOffsetX+=options.oneSpeed;
                options.twoOffsetX+=options.twoSpeed;
            }());


        };

        init(selector,userOptions)
    };
    return waterPolo;
}));


   
