// 在第一个ajax发送的时候，开启进度条
// 在全部的ajax回来的时候，关闭进度条
// NProgress.start();
// setTimeout(function () {
//     NProgress.done();
// }, 2000);

// ajax 发送的时候显示进度条
//  
$(document).ajaxStart(function () {
    NProgress.start();
});
$(document).ajaxStop(function () {
    NProgress.done();
});