<template>
  <div>
    <div class="login" style="">
      <!--<svg-icon icon-class="login_bg" class="login_bg_icon"/>-->
      <img src="@/assets/login_bg@2x.png" style="width: 100%; height: 100%">
      <div class="login_form">
        <div class="login_img">
          <svg-icon icon-class="logo" class="login_logo_icon"/>
        </div>
        <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名:" prop="pass">
            <el-input style="width:90%" type="input" v-model="ruleForm.name" ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="checkPass">
            <el-input  style="width:90%" type="password" v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <el-form-item label="验证码:" prop="checkPass">
            <el-input style="width: 46%;" type="input" v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success"  size="mini" @click="submitForm()">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$router.push({path:'/home'})
    }
  }
}
</script>

<style scoped>
  .login{
    height:625px;
    overflow: hidden;
  }
  .login_img{
    width:364px;
    height:41px;
    text-align: center;
    margin-bottom:40px;
  }
  .login_logo_icon{
    width:280px;
    height:41px;
  }
  .login_form{
    width:364px;
    height:411px;
    background:rgba(245,245,245,1);
    border-radius:4px;
    position: absolute;/*绝对定位*/
    /*text-align: center;!*(让div中的内容居中)*!*/
    top: 44%;
    left: 29%;
    margin-top: -200px;
    margin-left: -150px;
    padding-top: 48px;
  }

</style>
