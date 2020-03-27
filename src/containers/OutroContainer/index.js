import * as React from "react";
import { observer, inject } from "mobx-react";

import Outro from "@screens/Outro";

@observer
export default class OutroContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onNavigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <Outro
        onNavigate={(screen) => this.onNavigate(screen)}
      />
    );
  }
}
