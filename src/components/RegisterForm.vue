<template>
  <div>
    <el-form :model="registerForm " ref="registerForm" @submit.native.prevent="register">
      <el-form-item prop="useremail" >
        <el-input
          placeholder="Name"
          prefix-icon="el-icon-message"
          v-model="registerForm.useremail"
          required
        ></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="Email"
          prefix-icon="el-icon-message"
          v-model="registerForm.username"
          required
        ></el-input>
      </el-form-item>
      <el-row gutter="5">
        <el-col :span="19">
        <!-- Enter the verification code -->
      <el-form-item prop="verificationCode">
        <el-input v-model="registerForm.verificationCode" placeholder="Enter verification code"></el-input>
      </el-form-item></el-col>
      <el-col :span="5">
<!-- Send CAPTCHA button -->
<el-form-item>
        <el-button v-if="!showCountdown" type="primary" @click="sendVerificationCode">Send</el-button>
        <el-button v-else disabled>{{ countdown }}s</el-button>
      </el-form-item>
      </el-col>
      </el-row>
      
      <el-form-item prop="password">
        <el-input
          placeholder="Password"
          prefix-icon="el-icon-key"
          v-model="registerForm.password"
          show-password
          required
        ></el-input>
      </el-form-item>
      <div class="item-position">
        <button class="custom-button" type="submit">CREATE ACCOUNT</button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: '',
        useremail: '',
        verificationCode: '',
        password: ''
      },
      showCountdown: false, 
      countdown: 30, 
    };
  },
  methods: {
    handleSubmit() {
        
        console.log('Email:', this.registerForm.email);
        console.log('Verification Code:', this.registerForm.verificationCode);
        this.$emit('resetSuccess');
      },
      sendVerificationCode() {
        
        console.log('Sending verification code...');
        
        
        this.showCountdown = true;
        const timer = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            
            this.showCountdown = false;
            this.countdown = 30; 
            clearInterval(timer); 
          }
        }, 1000);
      },
    register() {
      
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          
          console.log('Register');
          console.log('Username：', this.registerForm.username);
          console.log('Password：', this.registerForm.password);
          
          this.$emit('registerSuccess');
        }
      });
    }
  }
};
</script>
<style scoped>
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

.el-form {
  padding-top: 30px;
}
</style>
  