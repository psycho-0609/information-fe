<template>
  <div class="body">
    <div class="form-login">
      <h4 class="">Login</h4>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input class="form-control" type="text" v-model="username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input class="form-control" type="password" v-model="password" />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import loginApi from "@/apis/authApis";
// import informationApi from "@/apis/informationApisAdmin";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        username: this.username,
        password: this.password,
      };

      loginApi.login(payload).then((response) => {
        console.log(response);
        sessionStorage.setItem("auth", true);
        sessionStorage.setItem("token", response.jwt);
        this.getUserInfor();
      });
    },
    getUserInfor() {
      loginApi.getUser().then((res) => {
        sessionStorage.setItem("user", JSON.stringify(res));
        if (res.role == 1) {
          this.$router.push({ name: "admin-information" });
        }else{
          this.$router.push({ name: "user-information" });
        }
      });
    },
  },
};
</script>
<style>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-login {
  width: 435px;
  border: 1px solid rgb(189, 189, 189);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 7px 7px 5px 1px rgb(189, 189, 189);
}
</style>