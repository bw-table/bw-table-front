import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // app directory 사용 설정
      navigation: {
        pathname: '/',
        query: {},
      },
    },
  },
};

export default preview;
