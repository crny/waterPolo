# waterPolo
自制原生js水波纹插件
# 创建画布元素内包装
# 以下为默认参数

waterPolo('canvas',{

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
    oneWaveWidth:0.01,

    //下层波浪宽度
    twoWaveWidth:0.011,

    //上层波浪高度，数越大越高
    oneWaveHeight:10,

    //下层波浪高度
    twoWaveHeight:10,

    //上层波浪x轴偏移量
    oneOffsetX:10,

    //下层波浪x轴偏移量
    twoOffsetX:20,

    //波浪滚动速度，数越大越快
    speed:0.02
    })
