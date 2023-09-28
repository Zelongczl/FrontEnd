<template>
    <el-form :model="formData" ref="form" @submit.native.prevent="handleSubmit">
      <el-form-item label="Email" prop="email">
        <el-input v-model="formData.email" placeholder="Enter your email"></el-input>
      </el-form-item>
      
      <el-row gutter="5">
        <el-col :span="19">
        <!-- input verificationCode -->
      <el-form-item prop="verificationCode">
        <el-input v-model="formData.verificationCode" placeholder="Enter verification code"></el-input>
      </el-form-item></el-col>
      <el-col :span="5">
<!-- send button -->
<el-form-item>
        <el-button v-if="!showCountdown" type="primary" @click="sendVerificationCode">Send</el-button>
        <el-button v-else disabled>{{ countdown }}s</el-button>
      </el-form-item>
      </el-col>
      </el-row>
      
      <el-form-item>
        <el-button type="primary" round native-type="submit">Submit</el-button>
      </el-form-item>
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
      };
    },
    methods: {
      handleSubmit() {
        // Execute form submission logic here, including validation of CAPTCHA, etc.
        console.log('Email:', this.formData.email);
        console.log('Verification Code:', this.formData.verificationCode);
        this.$emit('resetSuccess');
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
  </style>
  