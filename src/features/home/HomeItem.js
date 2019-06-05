import React, { PureComponent } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HOME_STRINGS } from "../../languages";
import { FontColor } from "../../utils/theme";
import VMasker from "vanilla-masker"

export default class HomeItem extends PureComponent {
  stylesView = StyleSheet.create({
    general: {
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 24,
    },
    info: {
      flex: 0,
      flexDirection: "column"
    },
    roundImage: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 48,
      height: 48,
      borderRadius: 50
    }
  });

  stylesText = StyleSheet.create({
    title: {
      fontSize: 14,
      color: FontColor.primary,
      fontWeight: "bold",
      textAlign: "left"
    },
    description: {
      fontSize: 12,
      color: FontColor.primary,
      fontWeight: "normal",
      textAlign: "left"
    }
  });

  stylesImage = StyleSheet.create({
    image: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width: 48,
      borderRadius: 24,
      marginRight: 16
    }
  });

  render() {
    return (
      <TouchableOpacity
        style={this.stylesView.general}
        onPress={() => this.props.selectBand(this.props.band)}
      >
        <Image
          style={this.stylesImage.image}
          source={{ uri: this.props.band.image }}
        />
        <View style={this.stylesView.info}>
          <Text style={this.stylesText.title}>
            {this.props.band.name.toUpperCase()}
          </Text>
          <Text style={this.stylesText.description}>
            {VMasker.toPattern(this.props.band.numPlays, "999.999.999.999") + HOME_STRINGS.plays}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
