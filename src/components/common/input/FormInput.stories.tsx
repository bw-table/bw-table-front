import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormInput> = {
  title: 'common/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'disabled', 'error'],
    },
    disable: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    classNames: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story, context) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story
            {...context}
            args={{ ...context.args, register: methods.register }}
          />
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    label: 'username',
    placeholder: '사용자 이름을 입력하세요',
    type: 'text',
    variant: 'default',
  },
};
