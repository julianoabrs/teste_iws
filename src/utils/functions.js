import { Dimensions, Platform } from "react-native";

export const getNavigationHeaderHeight = () => {
  return Platform.OS === "android" ? 75 : isIPhoneX() ? 88 : 66;
};

export const screenHeightPercentage = value => {
  const viewport = Dimensions.get("window");
  return (viewport.height / 100) * value;
};

export const screenWidthPercentage = value => {
  const viewport = Dimensions.get("window");
  return (viewport.width / 100) * value;
};

export const isIPhoneX = () => {
  let dimensions = Dimensions.get("window");
  return Platform.OS === "ios" && dimensions.height >= 812;
};

export const convertToSlug = text => {
  const a = "àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
  const b = "aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
  const p = new RegExp(a.split("").join("|"), "g");
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-");
};
