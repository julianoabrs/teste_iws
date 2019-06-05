import React, { PureComponent } from "react";
import { FlatList, StyleSheet, View, ImageBackground, Text, Image, ScrollView } from "react-native";
import { ALBUM_STRINGS } from "../../languages";
import { FontColor } from "../../utils/theme";
import AlbumItem from "./AlbumItem";

export default class AlbumView extends PureComponent {
  stylesView = StyleSheet.create({
    main: {
      flex: 1
    },
    general: {
      flex: 0,
      flexDirection: "column"
    },
    flatList: {
      flex: 1,
      marginTop: 32
    },
    flatListContent: {
      flex: 0,
      flexDirection: "column"
    },
    headerInfos: {
      position: "absolute",
      flexDirection: "column",
      alignItems: "center",
      top: 200
    },
    header: {
      flex: 1,
      height: 300,
      alignItems: "center",
      justifyContent: "flex-end"
    },
    infos: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
      marginHorizontal: 16
    }
  });

  stylesText = StyleSheet.create({
    title: {
      fontSize: 30,
      marginBottom: 16,
      color: FontColor.secondary,
      fontWeight: "bold",
      textAlign: "center"
    },
    tracks: {
      flex: 1,
      fontSize: 18,
      color: FontColor.primary,
      textAlign: "center",
      marginTop: 64
    },
    description: {
      fontSize: 12,
      color: FontColor.primary,
      fontWeight: "normal",
      textAlign: "center",
      marginTop: 40,
      marginHorizontal: 16
    },
    infos: {
      fontSize: 12,
      color: FontColor.grey,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  stylesImage = StyleSheet.create({
    image: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      height: 100,
      width: 100,
      borderRadius: 50
    },
    header: {
      resizeMode: "cover"
    }
  });

  _renderItem = ({ item, index }) => {
    return <AlbumItem track={item} />;
  };

  render() {
    return (
      <ScrollView
        style={this.stylesView.main}
        contentContainerStyle={this.stylesView.general}
      >
        <ImageBackground
          style={this.stylesView.header}
          imageStyle={this.stylesImage.header}
          source={{ uri: this.props.album.image }}
        >
          <View style={this.stylesView.headerInfos}>
            <Text style={this.stylesText.title}>
              {this.props.album.name}
            </Text>
            <Image
              style={this.stylesImage.image}
              source={{ uri: this.props.album.image }}
            />
          </View>
        </ImageBackground>

        <Text style={this.stylesText.tracks}>{ALBUM_STRINGS.tracks}</Text>

        <FlatList
          style={this.stylesView.flatList}
          contentContainerStyle={this.stylesView.flatListContent}
          data={this.props.album.tracks}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
        />
      </ScrollView>
    );
  }
}
