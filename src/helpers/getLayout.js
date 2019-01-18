import { Dimensions } from "react-native";

export default (getLayout = () => {
  const { width, height } = Dimensions.get("window");
  const sidebarWidth = width <= 300 ? width - 50 : 300;
  return {
    deviceWidth: width,
    deviceHeight: height,
    sidebarWidth,
    inPortraitMode
  };
});
