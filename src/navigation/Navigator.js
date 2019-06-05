import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AlbumController from "../features/album/AlbumController";
import BandController from "../features/band/BandController";
import HomeController from "../features/home/HomeController";
import HeaderTransparent from "./HeaderTransparent";
import HeaderSearch from "./HeaderSearch";

function getMainNavigator() {
  return createStackNavigator(
    {
      Home: {
        screen: HomeController,
        navigationOptions: ({ navigation }) => ({
          header: <HeaderSearch />
        })
      },
      Band: {
        screen: BandController,
        navigationOptions: ({ navigation }) => ({
          header: <HeaderTransparent />
        })
      },
      Album: {
        screen: AlbumController,
        navigationOptions: ({ navigation }) => ({
          header: <HeaderTransparent />
        })
      }
    },
    { initialRouteName: "Home", headerMode: "float" }
  );
}

export default () => {
  let MainNavigator = createAppContainer(getMainNavigator());

  return <MainNavigator />;
};
