
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
    setTimeout(function () {
        NProgress.done();
    }, 500)
});


// 
$(function () {
    // 注册事件完成公共功能
    // 导航切换
    $('.aside .category').click(function () {
        $('.aside .child').stop().slideToggle();   //不指定时间就是400毫秒
    });

    // 菜单切换效果
    $('.icon-left').click(function () {
        $('.aside').toggleClass('hidemenu');
        $('.topbar').toggleClass('hidemenu');
        $('.main').toggleClass('hidemenu');
    });
    // 模态框
    $('.icon-right').click(function () {
        $('#myModal').modal('show');
    });
    // 点击退出按钮  销毁用户状态
    $('#logoutBtn').click(function () {
        // 发送请求  让后端清空当前用户的登陆状态
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                console.log(info);  //{success: true}
                if (info.success) {
                    location.href = "login.html";
                }
            }
        })
    })
})
