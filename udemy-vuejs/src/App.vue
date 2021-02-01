<template>
<div>
  <button @click="show = !show">切替え</button>
  <p v-if="show">hello</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
