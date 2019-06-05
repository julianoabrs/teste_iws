import React, { PureComponent } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";
import Images from "../assets";
import { getNavigationHeaderHeight, isIPhoneX } from "../utils/functions";
import { BackgroundColor, FontColor } from "../utils/theme";

class HeaderTransparent extends PureComponent {
  stylesView = StyleSheet.create({
    content: {
      flexDirection: "row",
      height: getNavigationHeaderHeight(),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: BackgroundColor.header,
      paddingTop: Platform.OS === "ios" ? (isIPhoneX() ? 32 : 16) : 16
    },
    logo: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonView: {
      height: 44,
      width: 80,
      marginLeft: 4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    backButton: {
      height: 44,
      width: 44,
      alignItems: "center",
      justifyContent: "center"
    }
  });

  stylesImage = StyleSheet.create({
    logo: {
      height: 32,
      width: 98,
      resizeMode: "contain"
    },
    backButton: {
      height: 32,
      width: 32,
      resizeMode: "contain",
      tintColor: FontColor.secondary
    }
  });

  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: "transparent" }}
        forceInset={{ top: "never" }}
      >
        <StatusBar
          backgroundColor={"transparent"}
          translucent={true}
          barStyle="light-content"
        />
        <View style={this.stylesView.content}>
          <View style={this.stylesView.buttonView}>
            <TouchableOpacity
              style={this.stylesView.backButton}
              onPress={() => this.props.navigation.goBack(null)}
            >
              <Image
                source={Images.icons.arrowBack}
                style={this.stylesImage.backButton}
              />
            </TouchableOpacity>
          </View>
          <View style={this.stylesView.logo}>
            <Image style={this.stylesImage.logo} source={Images.icons.logo} />
          </View>
          <View style={this.stylesView.buttonView} />
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(HeaderTransparent);
