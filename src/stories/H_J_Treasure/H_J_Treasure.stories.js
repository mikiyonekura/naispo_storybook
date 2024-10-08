import { fn } from '@storybook/test';
import H_J_Treasure from './H_J_Treasure.vue';

export default {
  title: 'H_J_Treasure/H_J_Treasure',
  component: H_J_Treasure,
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

