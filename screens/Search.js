import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Item, Icon, Input } from "native-base";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from "axios";

class Search extends Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {},
  };
  searchPoke = () => {
    this.setState({ onCall: true });
    var self = this;
    axios
      .get(
        "http://pokeapi.co/api/v2/pokemon/" +
          this.state.pokeSearch.toLowerCase()
      )
      .then(function (response) {
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };
  render() {
    return (
      <View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" onPress={this.searchPoke} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
            />
            <Icon name="" />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
