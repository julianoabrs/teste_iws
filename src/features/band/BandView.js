import React, { PureComponent } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import VMasker from "vanilla-masker";
import { BAND_STRINGS } from "../../languages";
import { FontColor } from "../../utils/theme";
import BandItem from "./BandItem";

export default class BandView extends PureComponent {
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
    albums: {
      flex: 1,
      fontSize: 18,
      color: FontColor.primary,
      textAlign: "center",
      marginTop: 16
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
    return <BandItem selectAlbum={this.props.selectAlbum} album={item} />;
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
          source={{ uri: this.props.currentBand.image }}
        >
          <View style={this.stylesView.headerInfos}>
            <Text style={this.stylesText.title}>
              {this.props.currentBand.name}
            </Text>
            <Image
              style={this.stylesImage.image}
              source={{ uri: this.props.currentBand.image }}
            />
          </View>
        </ImageBackground>

        <View style={this.stylesView.infos}>
          <Text style={this.stylesText.infos}>
            {this.props.currentBand.genre.toUpperCase()}
          </Text>
          <Text style={this.stylesText.infos}>
            {VMasker.toPattern(
              this.props.currentBand.numPlays,
              "999.999.999.999"
            ) + BAND_STRINGS.plays}
          </Text>
        </View>

        <Text style={this.stylesText.description}>
          {this.props.currentBand.biography}
        </Text>

        <Text style={this.stylesText.albums}>{BAND_STRINGS.albums}</Text>

        <FlatList
          style={this.stylesView.flatList}
          contentContainerStyle={this.stylesView.flatListContent}
          data={this.props.currentBand.albums}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
        />
      </ScrollView>
    );
  }
}
