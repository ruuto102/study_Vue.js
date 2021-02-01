<template>
<div>
  <p v-border:dotted.round.shadow="{width:'5px', color:'red'}">Home</p>
  <h2>{{ title |     lowerCase }}</h2>
  <p>{{ number }}</p>
  <button @click="number++">+1</button>
  <CountNumber></CountNumber>
</div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber.js";

export default {
  mixins: [tokyoNumber],
  components: {
    CountNumber
    },
  directives: {
    border(el, biding) {
      el.style.borderWidth = biding.value.width;
      el.style.borderColor = biding.value.color;
      el.style.borderStyle = biding.arg;
      if (biding.modifiers.round) {
      el.style.borderRadius = "0.5rem";
  }
      if (biding.modifiers.shadow) {
      el.style.boxShadow = "0 2px 5px rgba(0,0,0,1)";
      }
    }
  }
}

</script>
