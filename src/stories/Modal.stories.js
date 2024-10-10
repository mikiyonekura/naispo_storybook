import { fn } from '@storybook/test';
import Modal from './Modal.vue';

export default {
  title: 'Utility/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    titleFontSize: { control: 'text' }, 
    textFontSize: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    image: {
      options: ['nasura_1.png', 'nasura_2.png', 'nasura_3.png'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'フォントサイズやテキスト，画像等を指定してモーダルを変更可能',
      },
    },
  },
};

export const Default = {
  args: {
    titleFontSize: '20px',
    textFontSize: '15px',
    title: 'タイトルを入力',
    text: 'テキストを入力',
    image: 'nasura_1.png',
    
  },
};

export const noImage = {
  args: {
    titleFontSize: '20px',
    textFontSize: '15px',
    title: 'タイトルを入力',
    text: 'テキストを入力',
    image: '',
  },
};

