export default {
  pages: ["pages/index/index", "pages/my/index"],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "最新"
      },
      {
        pagePath: "pages/my/index",
        text: "最新"
      }
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
