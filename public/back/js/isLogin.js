// 登陆拦截
$.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    dataType: "json",
    success: function (info) {
        console.log();
        if (info.error === 400) {
            // 拦截
            location.href = "login.html";
        }
        if (info.success) {
            console.log("当前用户已登陆");
        }
    }
})
