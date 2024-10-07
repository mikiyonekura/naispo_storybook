import { fn } from '@storybook/test';
import MainQuestPanel from './MainQuestPanel.vue';

export default {
  title: 'F_MyPage/MainQuestPanel',
  component: MainQuestPanel,
  tags: ['autodocs'],
  argTypes: {
    collectedItems: { control: 'object' },
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    collectedItems: [1, 0, 0],
  },
};
