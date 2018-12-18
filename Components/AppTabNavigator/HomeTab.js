import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Content, Icon, Thumbnail } from "native-base";
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
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text>Stories</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Icon
                  name="md-play"
                  style={{ fontSize: 14, fontWeight: "bold" }}
                />
                <Text> WatchAll</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/1.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/2.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/3.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/4.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/5.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/6.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/7.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/8.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/9.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/10.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 3,
                    marginHorizontal: 5
                  }}
                  source={require("../../assets/stories/11.jpg")}
                />
              </ScrollView>
            </View>
          </View>
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
