<template>
    <el-form :model="formData" :rules="rules" ref="form" @submit.native.prevent="handleSubmit">
      <el-form-item label="Email" prop="email">
        <el-input v-model="formData.email" autocomplete="off" placeholder="Enter your email"></el-input>
      </el-form-item>
      
      <el-row gutter=5>
        <el-col :span="19">
        <!-- input verificationCode -->
      <el-form-item prop="verificationCode">
        <el-input v-model="formData.verificationCode" placeholder="Enter verification code"></el-input>
      </el-form-item></el-col>
      <el-col :span="5">
<!-- send button -->
<el-form-item>
        <el-button v-if="!showCountdown" type="primary" @click="sendVerificationCode">Send</el-button>
        <el-button v-else disabled><i class="el-icon-loading"></i>{{ countdown }}s</el-button>
      </el-form-item>
      </el-col>
      </el-row>
      <div class="item-position">
        <button class="custom-button" type="submit">SUBMIT</button>
      </div>
    </el-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          email: '',
          verificationCode: '',
        },
        showCountdown: false, // Controls whether or not a countdown timer is displayed
        countdown: 30, // Initial countdown value in seconds
        rules: {
          email: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid Email address', trigger: ['blur', 'change'] }
        ],
        verificationCode:[
        { required: true, message: 'Please enter Code', trigger: 'blur' },
        ]
      }
      };
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
        if (valid) {
          // Execute form submission logic here, including validation of CAPTCHA, etc.
        console.log('Email:', this.formData.email);
        console.log('Verification Code:', this.formData.verificationCode);
        this.$emit('resetSuccess');
        }else{
          console.log('error reset!!');
          return false;
        }
      });
      },
      sendVerificationCode() {
        // Simulates the operation of sending a CAPTCHA, which you can replace with the actual sending logic
        console.log('Sending verification code...');
        
        // Start the countdown
        this.showCountdown = true;
        const timer = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            // The countdown ends and the Send CAPTCHA button is restored.
            this.showCountdown = false;
            this.countdown = 30; // Reset Countdown
            clearInterval(timer); // Clear the timer
          }
        }, 1000);
      },
    },
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
  </style>
  