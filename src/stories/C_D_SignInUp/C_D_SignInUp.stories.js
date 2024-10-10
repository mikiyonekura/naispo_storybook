import { fn } from '@storybook/test';
import C_D_SignInUp from './C_D_SignInUp.vue';

export default {
  title: 'C_D_SignInUp/C_D_SignInUp',
  component: C_D_SignInUp,
  tags: ['autodocs'],
  argTypes: {
    isSignIn: { control: 'boolean' }, 

  },
  // args: { onClick: fn() },
};

export const SignIn = {
  args: {
    isSignIn: true,
  },
  
};

export const SignUp = {
  args: {
    isSignIn: false,
  },
  
};
