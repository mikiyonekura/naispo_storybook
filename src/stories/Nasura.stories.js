import { fn } from '@storybook/test';
import Nasura from './Nasura.vue';

export default {
  title: 'Example/Nasura',
  component: Nasura,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'text' }, // Add font size control here
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    primary: true,
    fontSize: '25px',
    label: '文字の大きさ（25px）',
  },
};

export const Small = {
  args: {
    fontSize: '15px',
    label: '文字の大きさ（15px）',
  },
};

export const Large = {
  args: {
    fontSize: '35px',
    label: '文字の大きさ（35px）',
  },
};
