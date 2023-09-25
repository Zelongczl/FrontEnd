<template>
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="username">用户名：</label>
          <input type="text" id="username" v-model="loginForm.username" required>
        </div>
        <div>
          <label for="password">密码：</label>
          <input type="password" id="password" v-model="loginForm.password" required>
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        // 在这里执行登录逻辑，例如发送登录请求到后端
        console.log('登录');
        console.log('用户名：', this.loginForm.username);
        console.log('密码：', this.loginForm.password);
        // 触发登录成功事件，通知父组件关闭弹窗
        this.$emit('loginSuccess');
      }
    }
  };
  </script>
  
    