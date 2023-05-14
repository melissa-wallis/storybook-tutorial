import '../src/index.css';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
