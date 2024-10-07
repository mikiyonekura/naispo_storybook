<script setup>

</script>

<template>
    <div class="answer_form" >
        <input type="text" placeholder="答えを入力" > 
        <img class="button_image" :src="'./sousin.png'" alt="">
    </div>
</template>

<style scoped>

.answer_form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; 
  gap: 5%;
}

input {
    padding:3%;
    width: 70%;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-family: 'DotGothic16', sans-serif;
    background-color: #fffafa;
}

.button_image {
    width: 30%;
}



</style>