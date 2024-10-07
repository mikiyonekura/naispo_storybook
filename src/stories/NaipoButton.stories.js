import { fn } from '@storybook/test';
import Nasura from './NaispoButton.vue';

export default {
  title: 'Example/NaispoButton',
  component: Nasura,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' }, 
    sentence: { control: 'text' },
    presetSentence: { control: { type: 'radio' }, options: ['テンプレート', '進む', '戻る'] },
    backgroundColor: { control: 'color' },
    frameColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    fontSize: '20px',
    sentence: '文字を入力',
  },
};

export const forward = {
  args: {
    fontSize: '20px',
    sentence: '進む',
  },
};

export const back = {
  args: {
    fontSize: '20',
    sentence: '戻る',
  },
};
