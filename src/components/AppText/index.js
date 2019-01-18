import React, { Component } from "react";
import { Text } from "react-native";

import config from "../../config";
class AppText extends Component {
  render() {
    let fontFamily = "OpenSans-Regular";
    switch (this.props.fontStyle) {
      case medium:
        fontFamily = "OpenSans-Medium";
      case bold:
        fontFamily = "OpenSans-Bold";
      default:
        fontFamily = "OpenSans-Regular";
    }
    return (
      <Text
        style={{
          fontSize: this.props.fontSize,
          color: this.props.fontColor,
          fontFamily: fontFamily,
          ...this.props.style
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default AppText;
