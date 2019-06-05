import React, { PureComponent } from "react";
import { withNavigation } from "react-navigation";
import AlbumView from "./AlbumView";

class AlbumController extends PureComponent {
  render() {
    return (
      <AlbumView
        album={this.props.navigation.getParam("album")}
      />
    );
  }
}

export default withNavigation(AlbumController);
