import * as React from "react";
import { Provider } from "mobx-react";
// import { StyleProvider } from "native-base";
// import Orientation from "react-native-orientation";
// import BackgroundJob from "react-native-background-job";

import App from "../App";
// import getTheme from "../theme/components";
// import variables from "../theme/variables/platform";

const StoreContext = React.createContext();

export default function(stores) {
  return class Setup extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {

      return (
        
          <Provider {...stores}>
            <App />
          </Provider>
        
      );
    }
  };
}
