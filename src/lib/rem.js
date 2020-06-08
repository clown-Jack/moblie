//设置rem函数

function setRem(){
    //获取可视区大小
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //获取dom中根html标签
    let htmlDom = document.getElementsByTagName("html")[0];
    //设置html的字体大小  
    //设计图一般都是二倍图 默认640/2 = 320  设置1rem = 100px 为了好计算
    htmlDom.style.fontSize = htmlWidth/3.2+"px";
}
setRem();

//解决窗口改变的时候重新计算字体大小
window.onresize = function(){
    setRem()
}