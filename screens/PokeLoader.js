import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PokeLoader extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="stretch"
          source={{
            uri:
              "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif",
          }}
          style={styles.img}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: { height: 400, width: 400 },
});
