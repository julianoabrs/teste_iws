import { Platform } from "react-native";

export default {
  icons: {
    arrowBack:
      Platform.OS === "android"
        ? require("./icons/arrowBackAndroid.png")
        : require("./icons/arrowBackIos.png"),
    logo: require("./icons/logo.png"),
    noResults: require("./icons/noResults.png"),
    orderBy: require("./icons/orderBy.png"),
    search: require("./icons/search.png")
  }
};
