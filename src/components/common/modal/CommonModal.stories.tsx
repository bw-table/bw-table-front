import CommonModal from './CommonModal';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useState } from 'react';

const meta: Meta<typeof CommonModal> = {
  title: 'common/CommonModal',
  component: CommonModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonModal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div>
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click to Open📍
        </button>
        <CommonModal isOpen={isOpen} onClose={handleClose}>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p>example</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Click to Close
            </button>
          </div>
        </CommonModal>
      </div>
    );
  },
};
