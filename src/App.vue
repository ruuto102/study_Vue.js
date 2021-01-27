<template>
<div>
  <LikeHeader></LikeHeader>

<LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber>
<button @click="currentComponent = 'Home'">Home</button>
<button @click="currentComponent = 'About'">About</button>
<component :is="currentComponent"></component>
</div>
</template>


<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home"
    };
  },


  components: {
    LikeHeader: LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color:red;
}
</style>
