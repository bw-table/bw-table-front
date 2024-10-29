import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './FormInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormInput> = {
  title: 'common/FormInput',
  component: FormInput,
  tags: ['autodocs'],
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

export const WithError: Story = {
  args: {
    label: 'username',
    placeholder: '사용자 이름을 입력하세요',
    type: 'text',
    error: {
      type: 'required',
      message: '이 필드는 필수입니다',
    },
  },
};
