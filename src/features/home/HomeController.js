import React, { PureComponent } from "react";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { setCurrentBand } from "../../redux/actions";
import { NoResultsException } from "../../utils/errors";
import HomeView from "./HomeView";
import CustomError from "../../components/CustomError";

class HomeController extends PureComponent {
  selectBand = band => {
    this.props.setCurrentBand(band);
    this.props.navigation.navigate("Band");
  };

  render() {
    if (this.props.bands.length === 0) {
      return <CustomError message={(new NoResultsException()).message} />;
    } else {
      return <HomeView bands={this.props.bands} selectBand={this.selectBand} />;
    }
  }
}

export default connect(
  state => ({
    bands: state.general.filteredBands
  }),
  { setCurrentBand }
)(withNavigation(HomeController));
