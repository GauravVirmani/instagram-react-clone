import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Icon } from "native-base";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeTab from "./AppTabNavigator/HomeTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

class MainScreen extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
    headerLeft: <Icon style={{ paddingLeft: 10 }} name="ios-camera" />,
    title: "Instagram",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send" />
  };

  render() {
    return (
      //   <View style={styles.container}>
      //     <Text>MainScreen</Text>
      //   </View>
      //   <AppTabNavigator />
      <AppTabContainer />
    );
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab
    },
    Search: {
      screen: SearchTab
    },
    AddMedia: {
      screen: AddMediaTab
    },
    Likes: {
      screen: LikesTab
    },
    Profile: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainScreen;
