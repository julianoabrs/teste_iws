import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Images from "../assets";
import { FontColor } from "../utils/theme";

export default class CustomError extends Component {
  stylesView = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 40
    }
  });

  stylesText = StyleSheet.create({
    message: {
      fontSize: 18,
      marginBottom: 8,
      color: FontColor.grey,
      textAlign: "center"
    }
  });

  stylesImage = StyleSheet.create({
    image: {
      height: 100,
      width: 100,
      resizeMode: "contain"
    }
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.stylesView.main}>
        <Text style={this.stylesText.message}>{this.props.message}</Text>
        <Image style={this.stylesImage.image} source={Images.icons.noResults} />
      </View>
    );
  }
}
