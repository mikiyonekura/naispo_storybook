<script setup>
import { defineProps, ref, onMounted } from 'vue';
import NaispoButton from './NaispoButton.vue';

const props = defineProps({
  text: {
    type: String,
    default: 'テキストを入力'
  },
  title: {
    type: String,
    default: 'タイトルを入力'
  },
  buttonText: {
    type: String,
    default: 'ボタンのテキストを入力'
  },
  image: {
    type: String,
    default: 'nasura.png'
  },
});

const imgPath = './';


</script>

<template>
    <div class="modal-container"> 
        <v-card class="modal">
            <v-card-title>
                {{ title }}
            </v-card-title>

            <img v-if="image" style="width: 100%; padding: 5%;" :src="imgPath + image" />

            <v-card-text>{{ text }}</v-card-text>

            <v-card-actions class="justify-end">
                <NaispoButton :sentence="buttonText" font-size="10px" style="padding: 3%; margin: 3%;" />
            </v-card-actions>
        </v-card>
    </div>
</template>

<style>
.modal-container {
  display: flex;
  justify-content: center;  /* 横方向の中央揃え */
  align-items: center;      /* 縦方向の中央揃え */
}

.modal {
  width: 50%;               /* モーダルの幅を指定 */
  z-index: 1000;
}
</style>
