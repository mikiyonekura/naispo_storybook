<!--コンポーネント作成用-->


<script setup>
  import {ref,onMounted } from 'vue';
  import StoryTypical from './StoryTypicalComp.vue';

  const messages = ref([]);
  const progress = ref(0); 
  const text_num = ref(0);
  const isLogOpen = ref(false);


  function getProgress() { //progress取得のMock
    console.log('Mock API call: Getting progress');
    progress.value = 1; 
  }

  const mockMessages = [
    { context: 'みんな今日は奈良先端大へようこそ！', name: 'ナスラくん' },
    { context: 'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね', name: 'ナスラくん' },
    { context: '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ', name: 'ナスラくん' },
  ];

  function getMessages() { //セリフ取得のMock
    messages.value = mockMessages; 
    console.log(messages.value[progress.value]);
  }

  // テキストを進める関数
  function changeText() {
    if (text_num.value >= messages.value[progress.value].length - 1) {
      gotoNext();
      return;
    }
    text_num.value++;
    if (text_num.value == 3) { //一旦セリフがループするように設定
      text_num.value = 0;
    }
  }


  function showLog() {
    isLogOpen.value = true;
  }

  function gotoNext() { //次の画面に遷移するMock
    console.log('Navigating to the next screen (mocked)');
  }

  onMounted(() => {
    getProgress(); 
    getMessages(); 
  });

</script>

<template>


  <StoryTypical  :messages="messages" :progress="progress" :text_num="text_num" :changeText="changeText" :backText="backText" :showLog="showLog"/>  

</template>

<style>



</style>