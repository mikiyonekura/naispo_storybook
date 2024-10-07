import { fn } from '@storybook/test';
import MainQuestCounter from './MainQuestCounter.vue';

export default {
  title: 'F_MyPage/MainQuestCounter',
  component: MainQuestCounter,
  tags: ['autodocs'],
  argTypes: {
    mainQuestCount: { control: 'number' },
  },
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    mainQuestCount: 5,
  },
};
