<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({

});

</script>

<template>
    <div class="name-form" >
        <input type="text"> 
        <img class="button_image" :src="'./buttons/sousin_yellow.png'" alt="">
    </div>
</template>

<style>

.name-form {
  display: flex;
  flex-direction: column;
  align-items: center;}

input {
  padding: 3%;
  margin-bottom: 5%;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: 'DotGothic16', sans-serif;
  background-color: #ffffff;
}

.button_image {
    width: 40%;
    filter: drop-shadow(1px 1px 1px rgba(43, 34, 34, 3.5));
}

</style>
