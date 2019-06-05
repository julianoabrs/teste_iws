import React, { PureComponent } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  TextInput
} from "react-native";
import { SafeAreaView, withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { BackgroundColor, FontColor } from "../utils/theme";
import { getNavigationHeaderHeight, isIPhoneX } from "../utils/functions";
import Images from "../assets";
import { findBands } from "../redux/actions";

class HeaderSearch extends PureComponent {
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
      flex: 0,
      marginHorizontal: 16
    },
    backButton: {
      height: 44,
      width: 44,
      alignItems: "center",
      justifyContent: "center"
    }
  });

  stylesText = StyleSheet.create({
    textInput: {
      flex: 1,
      paddingVertical: 8,
      backgroundColor: BackgroundColor.main,
      color: FontColor.primary,
      textAlign: "left",
      fontSize: 14,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    }
  });

  stylesImage = StyleSheet.create({
    logo: {
      width: 80,
      resizeMode: "contain"
    },
    backButton: {
      height: 32,
      width: 32,
      resizeMode: "contain",
      tintColor: FontColor.secondary
    }
  });

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChangeText = value => {
    this.setState(
      {
        value
      },
      () => {
        this.props.findBands(this.state.value);
      }
    );
  };

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
          <TextInput
            style={this.stylesText.textInput}
            onChangeText={this.onChangeText}
            autoFocus={false}
            spellCheck={false}
            clearButtonMode={"always"}
            value={this.state.value}
          />
          <View style={this.stylesView.logo}>
            <Image style={this.stylesImage.logo} source={Images.icons.logo} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => ({
    currentBand: state.general.currentBand
  }),
  { findBands }
)(withNavigation(HeaderSearch));
