// import { url } from "inspector";

/**
 * Created by 54721 on 2018/12/14.
 */


$(function () {

  /*
   * 1. 进行表单校验配置
   *    校验要求:
   *        (1) 用户名不能为空, 长度为2-6位
   *        (2) 密码不能为空, 长度为6-12位
   * */
  $('#form').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名长度必须在6到30之间'
          },
          //正则校验
          // regexp: {
          //   regexp: /^[a-zA-Z0-9_\.]+$/,
          //   message: '用户名由数字字母下划线和.组成'
          // }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '用户名长度必须在6到30之间'
          },
        }
      }
    }
  });
  // 注册表单校验成功事件
  $("#form").on('success.form.bv', function (e) {
    // 阻止浏览器默认提交
    e.preventDefault();
    //使用ajax提交逻辑
    // console.log("通过ajax提交");
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      data: $("#form").serialize(),  //表单序列化
      dataType: "json",
      success: function (info) {
        if (info.success) {  //error 1000 用户名错误  1001 密码错误
          location.href = "index.html";
        }
        if (info.error === 1000) {
          alert("用户名不存在")
        }
        if (info.error === 1001) {
          alert("密码错误")
        }
      }
    })
  });

  // 表单重置功能
  // $("#form").data('bootstrapValidator').resetForm(true)
  $('[type="reset"]').click(function () {
    $("#form").data('bootstrapValidator').resetForm(true)
  })

})