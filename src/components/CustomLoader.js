import React, { PureComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { getNavigationHeaderHeight } from "../utils/functions";
import { BackgroundColor } from "../utils/theme";

export default class CustomLoader extends PureComponent {
  stylesView = StyleSheet.create({
    main: {
      flex: 1,
      marginTop: getNavigationHeaderHeight() * -1
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: BackgroundColor.overlay
    }
  });

  render() {
    return (
      <View style={this.stylesView.main}>
        <ActivityIndicator
          style={this.stylesView.overlay}
          color={BackgroundColor.header}
          size="large"
        />
      </View>
    );
  }
}
