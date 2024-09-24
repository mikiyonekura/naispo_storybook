<script setup>
import { defineProps, ref, onMounted } from 'vue';
import VTypical from 'vue-typical';

const mockMessages = [
    { context: 'みんな今日は奈良先端大へようこそ！', name: 'ナスラくん' },
    { context: 'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね', name: 'ナスラくん' },
    { context: '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ', name: 'ナスラくん' },
];

const isTyping = ref(true);
const text_num = ref(0);
const props = defineProps({
    fontSize: {
        type: String,
        default: '25px'
    }
});

// 5秒後にisTypingをfalseにする
onMounted(() => {
    setTimeout(() => {
        isTyping.value = false;
    }, 2000);
});

function skipText() {
    isTyping.value = false;
}

function changeText() {
    isTyping.value = true;
    text_num.value++;
    if (text_num.value == 3) { //一旦セリフがループするように設定
        text_num.value = 0;
    }
    setTimeout(() => {
        isTyping.value = false;
    }, 2000);
}
</script>

<template>
    <div class="contents" :style="{ fontSize: props.fontSize }">
        <div class="human">
            <img style="width: 100%;" :src="'./nasura.png'">
        </div>

        <div>
            <div class="script" v-if="isTyping">
                <v-typical :steps="mockMessages[text_num].context" />
            </div>
            <div class="script" v-else>
                {{ mockMessages[text_num].context }}
            </div>
        </div>

        <div style="display: flex; position: relative; margin-top:5%; gap: 10px;">
            <button class="buttons" @click="showLog">ログ</button>
            <!-- セリフを表示中はスキップボタン、読み終えたら次へボタンに切り替え -->
            <button class="buttons" @click="skipText" v-if="isTyping">スキップ</button>
            <button class="buttons" @click="changeText" v-else>次へ</button>
        </div>
    </div>
</template>

<style>
.contents {
    font-weight: 700;
    padding:5% 5%;
    display: block;
}

.human {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.script {
    padding: 4%;
    font-weight: 700;
    height: 30vh;
    background-color: rgb(255, 247, 240, .9);
    border-radius: 16px;
    border: 2px solid #13957b;
    box-shadow: 1px 2px 0 #000;
}

.buttons {
    padding: 3%;
    background-color: rgb(255, 247, 240, .9);
    border-radius: 16px;
    border: 2px solid #13957b;
    box-shadow: 1px 2px 0 #000;
}
</style>
