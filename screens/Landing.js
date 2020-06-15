import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

var image = require("../assets/icons/landing.jpg");

export default class Landing extends Component {
  navigateScreen = (search) => {
    this.props.navigation.navigate("Search");
  };

  render() {
    return (
      <View>
        <ImageBackground source={image} style={styles.bgImage}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to Pokesearch</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.navigateScreen}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bgImage: {
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center",
  },
  button: {
    width: "80%",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {},
});
