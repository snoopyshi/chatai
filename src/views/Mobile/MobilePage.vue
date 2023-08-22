<template>
  <div class="pcpage">
    <div class="box">
      <div class="boxleft">
        <h2 style="color: #bbbbbb">AI聊天GPT</h2>
        <p>
          <span style="color: red; font-size: 14px">点击</span
          >关注微信公众号(以防更换域名)：<strong>汤姆聊天</strong>
        </p>
        <div class="quest">
          <el-button><i class="el-icon-edit"></i> 常见问题</el-button>
          <el-button
            ><i class="el-icon-edit"></i>&nbsp;&nbsp;AI&nbsp;&nbsp;画展
          </el-button>
        </div>
        <div class="main">
          <el-button><i class="el-icon-user"></i> 个人中心</el-button>
          <el-button
            ><i class="el-icon-shopping-cart-2"></i> 会员中心</el-button
          >
        </div>
        <div class="chat">
          <p>新的聊天</p>
          <p class="dialog">1条对话<span>2023/8/21 12:56:20</span></p>
        </div>
        <div class="chat1">
          <p>新的聊天</p>
          <p class="dialog">1条对话<span>2023/8/21 12:56:20</span></p>
        </div>
        <div class="paint">
          <p>当前余量</p>
          <p>gpt4：次</p>
          <p>gpt3.5：次/天</p>
          <p>AI绘画：次</p>
        </div>
        <div class="footer">
          <div class="footerleft">
            <el-button
            ><i
              class="el-icon-s-tools"
              style="color: #bbbbbb; font-size: 16px"
            ></i
          ></el-button>
          <el-button
            ><i
              class="el-icon-s-order"
              style="color: #bbbbbb; font-size: 16px"
            ></i
          ></el-button>
          </div>
          <el-button><i
              class="el-icon-circle-plus-outline"
              style="color: #bbbbbb; font-size: 16px"
              >&nbsp;&nbsp;新的聊天</i
            ></el-button
          >
        </div>
      </div>
      <div class="boxright">
        <div class="top">
          <h2 style="color: #bbbbbb">登录</h2>
          <p>邀请三人注册即送两天无限制使用gpt-3.5会员</p>
          <el-button><i class="el-icon-close" style="color: #bbbbbb; font-size: 16px;margin-left:-7px"></i></el-button>
        </div>
        <div class="middle">
          <div class="emailbox">
            <p>邮箱</p>
            <el-button>请输入邮箱</el-button>
          </div>
          <div class="password">
            <p>密码</p>
            <el-button class="eye"><i class="el-icon-view" style="color: #bbbbbb; font-size: 16px;margin-left:-2px"></i></el-button>
            <el-button class="none"></el-button>
          </div>
          <div class="login">
            <el-button>登录</el-button>
          </div>
          <div class="register">
            <el-button round>注册</el-button>
          </div>
          <div class="forget">
            <el-button round>忘记/重置密码</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* font-size: 14px; */
}
html,
body {
  width: 100% !important;
  height: 100% !important;
}

.pcpage .box {
  width: 70%;
  border: 2px solid #bbbbbb;
  margin: 0 auto;
  display: flex;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #000;
}
.pcpage .box .boxleft {
  width: 45%;
  padding: 40px 20px 30px 20px;
  background-color: #1b262a;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
}
.pcpage .box .boxleft p {
  line-height: 36px;
  font-size: 14px;
  color: #bbbbbb;
}
.pcpage .box .boxleft p strong {
  font-size: 16px;
  background-image: -webkit-linear-gradient(left, #5090ee, #4a458d, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pcpage .box .boxleft .quest {
  display: flex;
  justify-content: space-between;
}
.pcpage .box .boxleft .quest .el-button {
  font-size: 18px;
  color: #000;
  background-color: #fff;
  font-weight: 600;
  text-decoration: underline;
}
.pcpage .box .boxleft .main {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.pcpage .box .boxleft .main .el-button {
  font-size: 18px;
  color: #bbbbbb;
  background-color: #1e1e1e;
  border: 1px solid #bbbbbb;
}
.pcpage .box .boxleft .chat {
  margin-top: 20px;
  border: 2px solid #1d93ab;
  padding: 10px;
  border-radius: 10px;
}
.pcpage .box .boxleft .chat p:nth-child(1) {
  font-size: 16px;
  font-weight: 600;
}
.pcpage .box .boxleft .chat .dialog {
  display: flex;
  justify-content: space-between;
}
.pcpage .box .boxleft .chat1 {
  margin-top: 10px;
  border: 2px solid #1d93ab;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #000;
}
.pcpage .box .boxleft .chat1 p:nth-child(1) {
  font-size: 16px;
  font-weight: 600;
}
.pcpage .box .boxleft .chat1 .dialog {
  display: flex;
  justify-content: space-between;
}
.pcpage .box .boxleft .paint {
  margin-top: 10px;
  border: 2px solid #1d93ab;
  padding: 10px;
  border-radius: 10px;
}
.pcpage .box .boxleft .paint p {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.pcpage .box .boxleft .footer {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.pcpage .box .boxleft .footer .el-button {
  background-color: #1e1e1e;
  color: #bbbbbb;
  border-radius: 10px;
}
.pcpage .box .boxright {
  width: 60%;
  padding: 20px 20px 30px 20px;
  background-color: #1e1e1e;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
}
.pcpage .box .boxright .top{
  position: relative;
}
.pcpage .box .boxright .top p{
  font-size: 16px;
  background-image: -webkit-linear-gradient(left, #5090ee, #df8395, #fba46c);
  line-height: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
.pcpage .box .boxright .top .el-button{
  width: 40px;
  height: 40px;
  background-color: #1e1e1e;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 10px;
}
.pcpage .box .boxright .middle{
  width: 100%;
  border: 1px solid #bbbbbb;
  margin-top: 20px;
  border-radius: 10px;
}
.pcpage .box .boxright .middle .emailbox{
  height: 100px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  vertical-align: middle;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 10px 10px 0 0;
}
.pcpage .box .boxright .middle .emailbox p{
  line-height: 60px;
  color: #bbbbbb;
  font-size: 20px;
  font-weight: 600;
}
.pcpage .box .boxright .middle .emailbox .el-button{
  width: 40%;
  height: 90%;
  color: #757575;
  background-color: #3b3b3b;
}
.pcpage .box .boxright .middle .password{
  height: 100px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  vertical-align: middle;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 10px 10px 0 0;
  position: relative;
}
.pcpage .box .boxright .middle .password p{
  line-height: 60px;
  color: #bbbbbb;
  font-size: 20px;
  font-weight: 600;
}
.pcpage .box .boxright .middle .password .eye{
  width: 50px;
  height: 50px;
  background-color: #1e1e1e;
  border-radius: 10px;
  position: absolute;
  right: 242px;
  top:20px;
  margin-top: 2px;
}
.pcpage .box .boxright .middle .password .none{
  width: 40%;
  height: 90%;
  color: #757575;
  background-color: #3b3b3b;
}
.pcpage .box .boxright .middle .login{
  height: 100px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  vertical-align: middle;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 10px 10px 0 0;
  position: relative;
}
.pcpage .box .boxright .middle .login .el-button{
  position: absolute;
  right: 30px;
  width: 45%;
  height: 50%;
  color: #fff;
  background-color: #1daabd;
  border: none;
}
.pcpage .box .boxright .middle .register{
  height: 100px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  vertical-align: middle;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 10px 10px 0 0;
  position: relative;
}
.pcpage .box .boxright .middle .register .el-button{
  position: absolute;
  right: 30px;
  width: 20%;
  height: 50%;
  color: #fff;
  background-color: #2b565c;
  border: none;
}
.pcpage .box .boxright .middle .forget{
  height: 100px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  vertical-align: middle;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbbb;
  border-radius: 10px;
  position: relative;
}
.pcpage .box .boxright .middle .forget .el-button{
  position: absolute;
  right: 30px;
  width: 20%;
  height: 50%;
  color: #fff;
  background-color: #2b565c;
  border: none;
}

</style>
