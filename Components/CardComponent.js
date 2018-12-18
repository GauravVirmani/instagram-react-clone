import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import {
  Card,
  CardItem,
  Thumnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Thumbnail
} from "native-base";

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              small
              source={{
                uri: this.props.profilePic
              }}
            />
            <Body>
              <Text>Walter White</Text>
              <Text note>Dec 18, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: this.props.postPic
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="heart" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 25 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{ fontWeight: "900" }}>Walter White </Text>You clearly
            don’t know who you’re talking to, so let me clue you in. I am not in
            danger, Skyler. I am the danger! A guy opens his door and gets shot
            and you think that of me? No. I am the one who knocks!
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
