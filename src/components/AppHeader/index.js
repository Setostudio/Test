import React, { Component } from "react";

import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppView from "../AppView";
import getLayout from "../../helpers/getLayout";
import AppText from "../AppText";
import config from "../../config";

class AppHeader extends Component {
  render() {
    return (
      <AppView
        center
        row
        style={{
          width: getLayout.width,
          height: getLayout.height / 11,
          backgroundColor: config.primaryColor
        }}
      >
        <AppView flexSize={1} style={{ marginLeft: 10 }}>
          {this.props.backButton && (
            <AppView
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Ionicons
                name="ios-arrow-back"
                size={35}
                color={config.fullWhite}
              />
            </AppView>
          )}
        </AppView>
        <AppView flexSize={4} style={{ alignItems: "flex-start" }}>
          <AppText medium fontSize={18} white>
            {this.props.title}
          </AppText>
        </AppView>
        <AppView flexSize={1} row>
          {this.props.leftButton && <AppView />}
        </AppView>
      </AppView>
    );
  }
}

export default withNavigation(AppHeader);
