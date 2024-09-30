// preview.js
import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'; // Vuetifyのスタイルをインポート

// Vuetifyのインスタンスを作成
const vuetify = createVuetify({
  components,
  directives,
});

// Storybook内でVue3にVuetifyをセットアップ
setup((app) => {
  app.use(vuetify);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
