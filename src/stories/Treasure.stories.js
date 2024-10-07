import { fn } from '@storybook/test';
import Treasure from './Treasure.vue';

export default {
  title: 'Example/Treasure',
  component: Treasure,
  tags: ['autodocs'],
  argTypes: {
    treasureType: {
      options: ['quest', 'tip'],
      control: { type: 'radio' },
    },
  },
  // args: { onClick: fn() },
};

export const Quest = {
  args: {
    treasureType: 'quest',
  },
};

export const Tip = {
  args: {
    treasureType: 'tip',
  },
};

