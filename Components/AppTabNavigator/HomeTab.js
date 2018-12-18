import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Icon } from "native-base";
import CardComponent from "../CardComponent";

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
        <Content>
          <CardComponent
            likes="101"
            profilePic="https://picsum.photos/458/354/?image=122"
            postPic="https://picsum.photos/458/354/?image=123"
          />
          <CardComponent
            likes="123"
            profilePic="https://picsum.photos/458/354/?image=125"
            postPic="https://picsum.photos/458/354/?image=127"
          />
          <CardComponent
            likes="243"
            profilePic="https://picsum.photos/458/354/?image=189"
            postPic="https://picsum.photos/458/354/?image=252"
          />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
