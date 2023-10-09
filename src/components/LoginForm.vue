<template>
  <div>
    <el-form :model="loginForm " status-icon :rules="rules" @submit.native.prevent="login" ref="loginForm">
      <el-form-item label="Email" prop="username" :required="false">
        <el-input
          placeholder="Email"
          prefix-icon="el-icon-message"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
        type="password"
          placeholder="Password"
          prefix-icon="el-icon-key"
          autocomplete="off"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <div class="item-position">
        <button class="custom-button" type="submit">SIGN IN</button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid Email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please enter Password', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    open2() {
        this.$message({
          message: 'You have successfully logged in.',
          type: 'success'
        });
      },
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //this.axios.post('https://locallost:8080',this.loginForm).then((resp)=>{
            //let data=resp.data;
            //if(data.success){
              //this.loginForm={};
              //this.open2();
            //}
          //});
          //alert('sumbit!');
          // login logic, send request to the backend
          this.open2();
          console.log('Login');
          console.log('Username：', this.loginForm.username);
          console.log('Password：', this.loginForm.password);
          // login event success, close modal
          this.$emit('update-parent-data', 11111);
          this.$emit('loginSuccess');
        }else{
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
};
</script>

<style>
.form-group {
  margin-bottom: 20px;
}
.item-position {
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.custom-button {
  position: center;
  display: inline-block;
  padding: 12px 55px;
  background-color: #F9A51C;
  color: black;
  font-size: 14px;
  border-color: #F9A51C;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>

  
    