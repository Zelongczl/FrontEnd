<template>
    <el-form :model="formData" :rules="rules" ref="formData" @submit.native.prevent="handleSubmit">
      <el-form-item label="Email" prop="email">
        <el-input v-model="formData.email" autocomplete="off" placeholder="Enter your email"></el-input>
      </el-form-item>
      
      <el-row gutter=5>
        <el-col :span="19">
        <!-- input verificationCode -->
      <el-form-item prop="verifyToken">
        <el-input v-model="formData.verifyToken" placeholder="Enter verification code"></el-input>
      </el-form-item></el-col>
      <el-col :span="5">
<!-- send button -->
<el-form-item>
        <el-button v-if="!showCountdown" type="warning" @click="sendVerificationCode">Send</el-button>
        <el-button v-else disabled><i class="el-icon-loading"></i>{{ countdown }}s</el-button>
      </el-form-item>
      </el-col>
      </el-row>
      <el-form-item prop="password">
        <el-input
          placeholder="Reset Password"
          prefix-icon="el-icon-key"
          v-model="formData.password"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
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
          verifyToken: '',
          password: ''
        },
        showCountdown: false, // Controls whether or not a countdown timer is displayed
        countdown: 30, // Initial countdown value in seconds
        rules: {
          email: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid Email address', trigger: ['blur', 'change'] }
        ],
        verifyToken:[

        ],
        password: [

        ]
      }
      };
    },
    methods: {
      resetSuccess() {
        this.$message({
          message: 'Reset successful!',
          type: 'success'
        });
      },
      sent2() {
        this.$message({
          message: 'A verification code has been send to your email.',
          type: 'success'
        });
      },
      error1(){
        this.$message({
          message: 'Account does not exist',
          type: 'error'
        });
      },
      error2(){
        this.$message({
          message: 'Invalid Code',
          type: 'error'
        });
      },
      updateRules() {
        this.$set(this.rules, 'verifyToken', [
          { required: true, message: 'Please enter Code', trigger: 'blur' },
        ]);
        this.$set(this.rules, 'password', [
          { required: true, message: 'Please enter Password', trigger: 'blur' },
        ]);
      },
      resetRules(){
        this.$set(this.rules, 'verifyToken', [

        ]);
        this.$set(this.rules, 'password', [

        ]);
      },
      handleSubmit() {
        this.updateRules();  
        this.$refs.formData.validate((valid) => {
          if (valid) {
            this.axios.post('http://localhost:8081/user/reset-password',this.formData, {
              headers:{
                'Content-Type':'application/json'
              }
            }).then((resp)=>{
              let data=resp.data;
              if(data.success){
                this.resetSuccess();
                this.$emit('resetSuccess');
              }
            }).catch(error => {
              if (error.response && error.response.status === 400) {
                if(error.response.data == "noCode"){
                  this.error1();
                }
                else if(error.response.data == "invalid"){
                  this.error2();
                }
            }
            });

          } else{
            console.log('error submit!!');
              return false;
          }
        });
      },
      sendVerificationCode() {
        // Simulates the operation of sending a CAPTCHA, which you can replace with the actual sending logic
        console.log('Sending verification code...');
        this.resetRules();
        this.$refs.formData.validateField('email', (errorMsg) => {
          if(!errorMsg){   
            this.showCountdown = true;
            const timer = setInterval(() => {
              this.countdown--;
              if (this.countdown === 0) {
                this.showCountdown = false;
                this.countdown = 30; 
                clearInterval(timer); 
              }
            }, 1000);

            console.log('Sending verification code...');
            this.axios.post('http://localhost:8081/user/send-reset-password',this.formData, {
                headers:{
                  'Content-Type':'application/json'
                }
              }).then((resp)=>{
                let data=resp.data;
                if(data.success){
                  this.sent2();
                }
              }).catch(error => {
                if (error.response && error.response.status === 400) {
                  if(error.response.data == "noCode"){
                    this.error1();
                  }
              }
              });
          } else{
            console.log('error submit!!');
            return false;
          }
        });
        
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