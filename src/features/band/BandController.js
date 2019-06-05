import React, { PureComponent } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import BandView from "./BandView"

class BandController extends PureComponent {
  selectAlbum = album => {
    this.props.navigation.navigate("Album", { album: album });
  };

  render() {
    return (
      <BandView
        currentBand={this.props.currentBand}
        selectAlbum={this.selectAlbum}
      />
    );
  }
}

export default connect(
  state => ({
    currentBand: state.general.currentBand
  }),
  {}
)(withNavigation(BandController));
