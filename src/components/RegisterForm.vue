<template>
  <div>
    <el-form :model="registerForm " :rules="rules" ref="registerForm" @submit.native.prevent="register">
      <el-form-item prop="email" >
        <el-input
          placeholder="Email"
          prefix-icon="el-icon-message"
          v-model="registerForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          placeholder="Name"
          prefix-icon="el-icon-user"
          v-model="registerForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-row gutter="5">
        <el-col :span="19">
        <!-- Enter the verification code -->
      <el-form-item prop="verifyToken">
        <el-input v-model="registerForm.verifyToken" placeholder="Enter verification code"></el-input>
      </el-form-item></el-col>
      <el-col :span="5">
<!-- Send CAPTCHA button -->
<div class="button-position">
      <el-button v-if="!showCountdown" type="warning" @click="sendVerificationCode">Send</el-button>
      <el-button v-else disabled><i class="el-icon-loading"></i>{{ countdown }}s</el-button>
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
        name: '',
        email: '',
        verifyToken: '',
        password: ''
      },
      showCountdown: false, 
      countdown: 30, 
      rules: {
        name: [
          { required: true, message: 'Please enter Username', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please enter Email', trigger: 'blur' },
          { type: 'email', message: 'Please enter a valid Email address', trigger: ['blur', 'change'] }
        ],
        verifyToken: [],
        //{ required: true, message: 'Please enter Code', trigger: 'blur' },
        
        password: [
          { required: true, message: 'Please enter Password', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    sent2() {
        this.$message({
          message: 'A verification code has been send to your email.',
          type: 'success'
        });
      },
      registerSuccess() {
        this.$message({
          message: 'Registration successful!',
          type: 'success'
        });
      },
    error1(){
      this.$message({
        message: 'Account already exist',
        type: 'error'
      });
    },
    error2(){
      this.$message({
        message: 'Please retrieve the verification code first.',
        type: 'error'
      });
    },
    error3(){
      this.$message({
        message: 'Invalid Verification Code',
        type: 'error'
      });
    },
    handleSubmit() {
        console.log('Email:', this.registerForm.email);
        console.log('Verification Code:', this.registerForm.verificationCode);
        this.$emit('resetSuccess');
      },
      sendVerificationCode() {
        this.$refs.registerForm.validate((valid) => {
          if(valid){

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
            this.axios.post('http://localhost:9090/user/send-verification',this.registerForm, {
                headers:{
                  'Content-Type':'application/json'
                }
              }).then((resp)=>{
                let data=resp.data;
                if(data.success){
                  //this.registerForm={};
                  this.sent2();
                }
              }).catch(error => {
                if (error.response && error.response.status === 400) {
                  if(error.response.data == "Email"){
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
    register() {
      
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          console.log('Register');
          console.log('Username：', this.registerForm.name);
          console.log('Password：', this.registerForm.password);
          
          this.axios.post('http://localhost:9090/user/register',this.registerForm, {
                headers:{
                  'Content-Type':'application/json'
                }
              }).then((resp)=>{
                let data=resp.data;
                if(data.success){
                  //this.registerForm={};
                  this.registerSuccess();
                  this.$emit('registerSuccess');
                }
              }).catch(error => {
                if (error.response && error.response.status === 400) {
                  if(error.response.data == "noCode"){
                    this.error2();
                  }
                  else if(error.response.data == "invalid"){
                    this.error3();
                  }
              }
              });

        } else{
          console.log('error submit!!');
            return false;
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
  