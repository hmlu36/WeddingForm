const path = require('path')

// vue.config.js
module.exports = {
  base: '/WeddingForm/', //發佈對應路徑
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
    // '/@components/': path.resolve(__dirname, './src/components')
  },
};
