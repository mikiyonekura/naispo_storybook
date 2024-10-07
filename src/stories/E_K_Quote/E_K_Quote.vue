<script setup>
import { defineProps, ref, onMounted } from 'vue';
import VTypical from 'vue-typical';

const text_num = ref(0);
const props = defineProps({
    fontSize: {
        type: String,
        default: '15px'
    },
    mockedQuote: {
        type: Array,
        default: () => [
            'こんにちは！',
            '私はナイスポです。',
            'よろしくお願いします！'
        ]
    }
});

function changeText() {
    text_num.value++;
    if (text_num.value == 3) { //一旦セリフがループするように設定
        text_num.value = 0;
    }
}
</script>

<template>
    <div class="quote_container">
        <v-container class="pt-15">
            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                    <img width="80%" :src="'./nasura_1.png'">               
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                    <div class="overlay-container">
                        <img class="overlay-image" width="100%" :src="'./script_box.png'">
                        <div class="overlay-content">
                            <v-typical :steps="mockedQuote[text_num]" :key="text_num" />
                        </div>
                    </div>
                </v-col>
                </v-row>

            <v-row justify="center">
                <v-col cols="6" class="d-flex justify-center py-0">
                    <!-- logボタンの機能は未実装 -->
                    <img width="50%" :src="'./buttons/log.png'" alt="">
                </v-col>
                <v-col cols="6" class="d-flex justify-center py-0">
                    <img width="50%" :src="'./buttons/tugi.png'" @click="changeText" alt="">
                </v-col>
            </v-row>


        </v-container>
    </div>
</template>

<style>

.quote_container {
  height: 100svh;
  background-color: #dfb069;
  font-size: v-bind(fontSize);
}

.overlay-container {
  position: relative;
  width: 100%;
}

.overlay-image {
  width: 100%;
  display: block;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; 
  font-size: v-bind(fontSize);
  font-weight: bold;
}

</style>
