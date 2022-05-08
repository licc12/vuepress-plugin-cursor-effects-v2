const { resolve } = require('path')
const { path } = require('@vuepress/utils')

module.exports = (options={}, app) => ({
  define: {
    EFFECTS_SIZE: options.size || 2,
    EFFECTS_SHAPE: options.shape || 'star',
    EFFECTS_Z_INDEX: options.zIndex || 999999999,
  },
  multiple: false,
  name: "vuepress-plugin-cursor-effects-v2",
  clientAppEnhanceFiles: resolve(__dirname, './lib/client.js'),
  clientAppRootComponentFiles: path.resolve(__dirname,'./lib/components/CursorEffects.vue'),
});
