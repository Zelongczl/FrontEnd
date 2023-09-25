<template>
    <div>
      <form @submit.prevent="register">
        <div>
          <label for="newUsername">用户名：</label>
          <input type="text" id="newUsername" v-model="registerForm.username" required>
        </div>
        <div>
          <label for="newPassword">密码：</label>
          <input type="password" id="newPassword" v-model="registerForm.password" required>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        registerForm: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      register() {
        // 在这里执行注册逻辑，例如发送注册请求到后端
        console.log('注册');
        console.log('新用户名：', this.registerForm.username);
        console.log('新密码：', this.registerForm.password);
        // 触发注册成功事件，通知父组件关闭弹窗
        this.$emit('registerSuccess');
      }
    }
  };
  </script>
  