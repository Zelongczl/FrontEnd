<template>
  <div>
    <el-form :model="registerForm " :rules="rules" ref="registerForm" @submit.native.prevent="register">
      <el-form-item prop="useremail" >
        <el-input
          placeholder="Email"
          prefix-icon="el-icon-message"
          v-model="registerForm.useremail"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="Name"
          prefix-icon="el-icon-user"
          v-model="registerForm.username"
          autocomplete="off"
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
<div class="button-position">
    <button class="el-button el-button--primary el-button--medium" :class="{ 'is-disabled': showCountdown }" type="button" @click="sendVerificationCode">
      <span v-if="showCountdown">{{ countdown }}s</span>
      <span v-else>Send</span>
    </button>
  </div>
      </el-col>
      </el-row>
      
      <el-form-item prop="password">
        <el-input
          placeholder="Password"
          prefix-icon="el-icon-key"
          v-model="registerForm.password"
          autocomplete="off"
          show-password
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
      rules: {
        username: [
          { required: true, message: 'Please enter Username', trigger: 'blur' }
        ],
        useremail: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid Email address', trigger: ['blur', 'change'] }
        ],
        verificationCode:[
        { required: true, message: 'Please enter Code', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please enter Password', trigger: 'blur' }
        ]
      }
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
.button-position {
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
.el-button {
  display: inline-block;
  padding: 12px 19px; 
  font-size: 15px; 
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: .1s;
  outline: none;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  color: #606266;
  border-color: #dcdfe6;
}

.el-button.el-button--primary {
  background-color: #F9A51C;
  color: black;
  border-color: #F9A51C;
}

.el-button.is-disabled {
  background-color: #f5f7fa;
  color: #c0c4cc;
  border-color: #dcdfe6;
  cursor: not-allowed;
}

.el-button span {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}

.el-button i.el-icon-loading {
  margin-right: 4px;
  vertical-align: middle;
}

/* hover effect */
.el-button:hover {
  background-color: #F9A51C;
  color: #ffffff;
  border-color: #F9A51C;
}

.el-form {
  padding-top: 30px;
}
</style>
  