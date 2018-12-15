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
})