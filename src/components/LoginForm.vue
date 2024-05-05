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
                localStorage.setItem("firstLogin",JSON.stringify(data.loginExp));
                localStorage.setItem("message","First time login today! + exp 25");
                console.log("Login");
                console.log("Username：", this.loginForm.username);
                console.log("Password：", this.loginForm.password);
                this.$emit("loginSuccess");
                this.$emit("update-parent-data", 11111);
                location.reload();
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

  
    