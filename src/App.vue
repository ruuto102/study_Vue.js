<template>
<div>
  <LikeHeader></LikeHeader>

<LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber>
<button @click="currentComponent = 'Home'">Home</button>
<button @click="currentComponent = 'About'">About</button>
<keep-alive>
<component :is="currentComponent"></component>
</keep-alive>
<div>
  <h2>イベントのフォーム</h2>
  <label for="title">タイトル</label>
  <input id="title" type="text" v-model="eventData.title">
  <p>{{eventData.title}}</p>
</div>
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
      currentComponent: 'About',
      eventData:{
        title: "タイトル"
      }
    };
  },


  components: {
    LikeHeader: LikeHeader,
    About,
    Home
  }
}
</script>

