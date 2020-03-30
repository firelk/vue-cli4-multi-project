<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/bimq/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data () {
    return {
      logo: ""
    };
  },
  props: ["projectName"],
  components: {
    HelloWorld
  },
  created () {
    // this.logo = `../assets/${this.projectName}/logo.png`;
    console.log(process.argv);
    console.log(process.env);
    console.log(process.env);
  }
};
</script>
