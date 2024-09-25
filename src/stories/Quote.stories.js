import { fn } from '@storybook/test';
import Quote from './Quote.vue';

export default {
  title: 'Example/Quote',
  component: Quote,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' }, // Add font size control here
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    fontSize: '25px',
    label: 'ナスラくんのセリフパート',
    mockedSentence: [
      'みんな今日は奈良先端大へようこそ！',
      'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね',
      '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ',
      ]
  },
};

export const Small = {
  args: {
    fontSize: '15px',
    label: 'ナスラくんのセリフパート',
  },
};

export const Large = {
  args: {
    fontSize: '35px',
    label: 'ナスラくんのセリフパート',
  },
};
