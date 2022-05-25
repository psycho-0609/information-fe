<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.css";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
    if (!sessionStorage.getItem("auth")) {
      this.$router.push({ name: "login-route", params: {} });
    } else {
      // const user = JSON.parse(sessionStorage.getItem("user"));
      // if (user.role == 1) {
      //   this.$router.push({ name: "admin-information", params: {} });
      // } else {
      //   this.$router.push({ name: "user-information", params: {} });
      // }
    }
  },
  computed: {},
  data() {
    return {};
  },
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout || "defaul-layout"),
    };
  },
  methods: {},
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
