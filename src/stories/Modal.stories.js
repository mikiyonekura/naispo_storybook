import { fn } from '@storybook/test';
import Modal from './Modal.vue';

export default {
  title: 'Utility/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' }, 
    title: { control: 'text' },
    text: { control: 'text' },
    buttonText: { control: 'text' },
    image: { control: 'text' },
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    fontSize: '25px',
    title: 'タイトルを入力',
    text: 'テキストを入力',
    buttonText: 'ボタンのテキストを入力',
    image: 'nasura_1.png',
    
  },
};

export const noImage = {
  args: {
    fontSize: '25px',
    title: 'タイトルを入力',
    text: 'テキストを入力',
    buttonText: 'ボタンのテキストを入力',
    image: '',
  },
};

