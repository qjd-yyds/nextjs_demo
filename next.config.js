const widthImages = require('next-images'); // static 文件的图片自动加cnd前缀
const isProd = process.env.NODE_ENV === 'production';
module.exports = widthImages({
  basePath: '/docs', // link 不需要加/docs a标签跳转需要加/docs
  reactStrictMode: true,
  assertPrefix: isProd ? 'https://cdn.mydomain.com' : '' // cdn前缀
});
