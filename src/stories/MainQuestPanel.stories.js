import { fn } from '@storybook/test';
import MainQuestPanel from './MainQuestPanel.vue';

export default {
  title: 'Example/MainQuestPanel',
  component: MainQuestPanel,
  tags: ['autodocs'],
  argTypes: {
    collectedItems: { control: 'object' },
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    collectedItems: [true, true, true],
  },
};
