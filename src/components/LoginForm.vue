<template>
  <div>
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      @submit.native.prevent="login"
      ref="loginForm"
    >
      <el-form-item label="Email" prop="email" :required="false">
        <el-input
          type="text"
          placeholder="Email"
          prefix-icon="el-icon-message"
          v-model="loginForm.email"
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
import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.prototype.$cookies = VueCookies;
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, message: "Please enter Email", trigger: "blur" },
          {
            type: "email",
            message: "Please enter a valid Email address",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "Please enter Password", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "You have successfully logged in.",
        type: "success",
      });
    },
    error1() {
      this.$message({
        message: "Account does not exist",
        type: "error",
      });
    },
    error2() {
      this.$message({
        message: "wrong password",
        type: "error",
      });
    },
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.axios
            .post("/user/login", this.loginForm, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((resp) => {
              let data = resp.data;
              if (data.success) {
                this.loginForm = {};
                this.open2();
                localStorage.setItem("access-user", JSON.stringify(data));
                localStorage.setItem("Token", JSON.stringify(data.jwt));
                localStorage.setItem("userId", JSON.stringify(data.userId));
                console.log("Login");
                console.log("Username：", this.loginForm.username);
                console.log("Password：", this.loginForm.password);
                this.$emit("loginSuccess");
                this.$emit("update-parent-data", 11111);


                  //Determine whether the user logs in for the first time today on the front end and feedback the first login to the back end
                  const today = new Date().toISOString().slice(0,10);
                  const userId = data.userId; // Assuming this is the user ID obtained from the backend response
                  const loginRecords = JSON.parse(localStorage.getItem('loginRecords')) || [];

                  const isUserLoggedInToday = loginRecords.some(record => record.date === today && record.userId === userId);

                  if (!isUserLoggedInToday) {
                      this.axios.post('http://localhost:9090/', {
                          message: 'first time',
                          userId: userId
                      }, {
                          headers: {
                              'Content-Type': 'application/json'
                          }
                      }).then((response) => {
                          console.log('Sent first login of the day info to backend');
                      }).catch((error) => {
                          console.error('Error sending first login of the day info', error);
                      });
                  }
                  loginRecords.push({date:today, userId: userId});
                  localStorage.setItem('loginRecords', JSON.stringify(loginRecords));


              }
            })
            .catch((error) => {
              if (error.response && error.response.status === 401) {
                if (error.response.data == "Email") {
                  // Handle the situation where the account does not exist
                  this.error1();
                }
                if (error.response.data == "Password") {
                  this.error2();
                }
              }
            });
          //alert('sumbit!');
          // login logic, send request to the backend
          //this.open2();

          // login event success, close modal

          //this.$emit('loginSuccess');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
  background-color: #f9a51c;
  color: black;
  font-size: 14px;
  border-color: #f9a51c;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>


