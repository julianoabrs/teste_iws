import React, { PureComponent } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default class BandItem extends PureComponent {
  stylesView = StyleSheet.create({
    general: {
      flex: 1,
    }
  });

  stylesImage = StyleSheet.create({
    image: {
      width: 120,
      height: 120,
      resizeMode: "contain"
    }
  });

  render() {
    return (
      <TouchableOpacity
        style={this.stylesView.general}
        onPress={() => this.props.selectAlbum(this.props.album)}
      >
        <Image
          style={this.stylesImage.image}
          source={{ uri: this.props.album.image }}
        />
      </TouchableOpacity>
    );
  }
}
