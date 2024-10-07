<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  collectedItems: {
    type: Array,
    default: () => [0, 0, 1], 
  },
});
</script>

<template>
  <div>
    <div v-if="collectedItems[0] === 1 && collectedItems[1] === 0 && collectedItems[2] === 0">
      <img class="item-image" :src="'./mahounoitem_100.png'" alt="Item 100">
    </div>
    <div v-else-if="collectedItems[0] === 0 && collectedItems[1] === 1 && collectedItems[2] === 0">
      <img class="item-image" :src="'./mahounoitem_010.png'" alt="Item 010">
    </div>
    <div v-else-if="collectedItems[0] === 0 && collectedItems[1] === 0 && collectedItems[2] === 1">
      <img class="item-image" :src="'./mahounoitem_001.png'" alt="Item 001">
    </div>
    <!-- とりあえず３パターン -->
  </div>
</template>

<style>
.item-image {
  width: 100%;
}
</style>
