import React, { Component } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CustomError from "./components/CustomError";
import CustomLoader from "./components/CustomLoader";
import AppContainer from "./navigation/Navigator";
import { setAlbums, setBands } from "./redux/actions";
import rootReducer from "./redux/reducers";
import { getAlbums, getBands } from "./services/GeneralServices";

function configureStore() {
  const store = createStore(rootReducer);

  return store;
}

const mainStore = configureStore();

export default class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const bands = await getBands();
      const albums = await getAlbums();
      mainStore.dispatch(setBands(bands));
      mainStore.dispatch(setAlbums(albums));
      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        error,
        loading: false
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <CustomLoader />;
    } else if (!!this.state.error) {
      return <CustomError message={this.state.error.message} />;
    } else {
      return (
        <Provider store={mainStore}>
          <AppContainer />
        </Provider>
      );
    }
  }
}
