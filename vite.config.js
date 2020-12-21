const path = require('path')

// vue.config.js
module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/WeddingForm/' : '/', //發佈對應路徑
};
