module.exports = {
  plugins: {
    //浏览器加前缀
    autoprefixer: {},
    //px转化rem
    "postcss-pxtorem": {  
      rootValue: 100,
      propList: ["*"]
    }
  }
};
