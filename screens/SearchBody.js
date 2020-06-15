import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ListItem, List } from "native-base";

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

class SearchBody extends Component {
  render() {
    var pokemon = this.props.data;
    console.log(pokemon);
    if (!pokemon) {
      return <View />;
    }
    return (
      <ImageBackground
        source={{ uri: "http://pokemongolive.com/img/posts/raids_loading.png" }}
        style={styles.bgImage}
      >
        <ScrollView>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text style={{ fontWeight: "bold" }}>
                Weight - {pokemon.weight}kg
              </Text>
            </ListItem>
            <ListItem>
              <Text style={{ fontWeight: "bold" }}>
                Height - {pokemon.height / 10}m
              </Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            <List
              dataArray={pokemon.abilities}
              renderRow={(item) => (
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
            ></List>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default SearchBody;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: "red",
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  info: { flex: 1, backgroundColor: "white", opacity: 0.8 },
  bgImage: {
    width: width,
    height: height,
  },
});
