import * as React from "react";
import { observer, inject } from "mobx-react";

import Home from "@screens/Home";

@inject(
  "stateStore",
  "exemploStore",
)
@observer
export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onNavigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <Home
        onNavigate={(screen) => this.onNavigate(screen)}
      />
    );
  }
}
