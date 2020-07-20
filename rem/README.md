em : 相对于自己的 fontsize ，(相对于父级的fontsize)

rem : html的fontsize

1. fontsize 多少
2. 如何由设计稿快速还原

DPR : decive piex ratio 设备真实是像素 /  1px = 2 / 3

css 1px 在不同的设备上面 渲染出来的像素是不一样的 2px(iphone) 3px(iphone X)


想要 1px 边框

1. meta init-scale : 0.5  所有元素缩小0.5倍
    我写元素宽高的时候  按照扩大两倍之后写
    一个元素本来是  20*20  
    必须写成40*40
    所以我们的设计稿就要放大两倍，这样量取的尺寸就是 扩大两倍的尺寸

2. 等比缩放 
    屏幕划分 10 等分
    750 / 10 = 75
    1125 / 10 = 112.5
    一份就是1rem , html : fontsize 75px 或者是 112.5px