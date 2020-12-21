// vue.config.js
console.log(process.env.NODE_ENV);
module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/WeddingForm/' : '/', //發佈對應路徑
};
