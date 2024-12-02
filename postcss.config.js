/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 16, // 基准值，一般设为 16
      propList: ["*"], // 需要进行 rem 转换的属性列表，* 表示所有属性都进行转换
      exclude: /node_modules/i,
      minPixelValue: 2, // 小于 2px 的不会被转换
    },
  },
};
