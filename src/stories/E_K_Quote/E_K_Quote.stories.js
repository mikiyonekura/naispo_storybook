import { fn } from '@storybook/test';
import E_K_Quote from './E_K_Quote.vue';

export default {
  title: 'E_K_Quote/E_K_Quote',
  component: E_K_Quote,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' }, 
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    fontSize: '15px',
    mockedQuote: [
      'みんな今日は奈良先端大へようこそ！',
      'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね',
      '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ',
    ]
  },
};

export const Small = {
  args: {
    fontSize: '10px',
    mockedQuote: [
      'みんな今日は奈良先端大へようこそ！',
      'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね',
      '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ',
    ]
  },
};

export const Large = {
  args: {
    fontSize: '20px',
    mockedQuote: [
      'みんな今日は奈良先端大へようこそ！',
      'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね',
      '今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ',
    ]
  },
};
