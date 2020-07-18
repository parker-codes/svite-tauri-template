const svite = require('svite');
const path = require('path');

module.exports = {
  plugins: [svite()],
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  optimizeDeps: {
    include: ['@sveltech/routify/runtime/plugins/tree', '@sveltech/routify/runtime/plugins/assignAPI', '@sveltech/routify/runtime'],
    exclude: ['@sveltech/routify'],
  },
};
