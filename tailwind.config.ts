import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#800020', // 버튼 메인 색상
        },
        success: {
          500: '#2ECC40', // 확정 버튼 색상
        },
        danger: {
          500: '#DC3545', // 취소 버튼 색상
        },
        info: {
          400: '#63B3ED', // 방문 버튼 색상
        },
        warning: {
          500: '#F26B3A', // 노쇼 버튼 색상
        },
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
export default config;
