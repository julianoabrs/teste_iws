import React, { PureComponent } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HomeItem from "./HomeItem";
import { FontColor } from "../../utils/theme";

export default class HomeView extends PureComponent {
  stylesView = StyleSheet.create({
    general: {
      flex: 1,
      flexDirection: "column",
      paddingBottom: 40
    },
    flatList: {
      flex: 1
    },
    flatListContent: {
      flex: 0,
      flexDirection: "column",
      marginTop: 16
    },
    listSeparator: {
        height: 0.75,
        marginVertical: 16,
        backgroundColor: FontColor.greyOpacity
    },
  });

  _renderItem = ({ item, index }) => {
    return <HomeItem selectBand={this.props.selectBand} band={item} />;
  };

  _renderSeparator = ({}) => {
    return <View style={this.stylesView.listSeparator} />;
  };

  render() {
    return (
      <View style={this.stylesView.general}>
        <FlatList
          style={this.stylesView.flatList}
          contentContainerStyle={this.stylesView.flatListContent}
          data={this.props.bands}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}
