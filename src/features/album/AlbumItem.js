import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import VMasker from "vanilla-masker";
import { FontColor } from "../../utils/theme";

export default class AlbumItem extends PureComponent {
  stylesView = StyleSheet.create({
    general: {
      flex: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      paddingVertical: 16
    },
    roundImage: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
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

  render() {
    return (
      <View style={this.stylesView.general}>
        <Text style={this.stylesText.title}>{this.props.track.name}</Text>
        <Text style={this.stylesText.description}>
          {VMasker.toPattern(
            this.props.track.duration,
              "9:99"
            )}
        </Text>
      </View>
    );
  }
}
