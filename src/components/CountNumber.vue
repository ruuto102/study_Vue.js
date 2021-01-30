<template>
<div>
  <h2>{{ title | lowerCase }}</h2>
  <p>{{ number }}</p>
  <button @click="number++">+1</button>
  Hello
</div>
</template>

<script>
export default {
  data () {
    return {
      title: "Welcom to Tokyo",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}
</script>
