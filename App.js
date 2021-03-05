/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, Keyboard} from 'react-native';
import axios from 'axios';
import qs from "qs";
import { Header, ListItem } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Enumerable from 'linq';
import ScrollableTabView from 'react-native-scrollable-tab-view2';
import SplashScreen from 'react-native-splash-screen'
import RNLanguages from 'react-native-languages';

import data from './common/data/basic.json';
import PokeSearchTextBox from './PokeSearchTextBox'
import FooterBanner from './components/FooterBanner'
import { Localized } from './components/Localization'

import { connect } from "react-redux";
import { setPokemon, clearPokemon, clearValue } from './actions/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageId: RNLanguages.language == 'ja-JP' ? '1' : '2',
      showMode: 0,
      isShow: true,
      options: [],
      seasons: [],
      wazaInfo: [],
      seikakuInfo: [],
      itemInfo: [],
      tokuseiInfo: [],
      pokemon: '',
      battleType: 0,
      season: 0
    };
  }

  componentWillMount() {
    // ポケモンのリスト
    let options = Enumerable.from(data)
      .where(x => x.IsMega == false)
      .toArray()
    this.setState({ options: options });

    this.refresh()
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    SplashScreen.hide();
  }
  
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    this.setState({isShow: false})
  }

  keyboardDidHide = () => {
    this.setState({isShow: true})
  }

  update = (languageId, seasonId, battleType, pokemonId) => {

    if (pokemonId == undefined) return;
    axios.post('http://localhost:50080/api/getSeasonPokemonDetail', 
    qs.stringify({ languageId: languageId, seasonId: seasonId, battleType: battleType, pokemonId: pokemonId }))
    .then((response) => {
      let wazaInfo = response.data.rankingPokemonTrend.wazaInfo
      let seikakuInfo = response.data.rankingPokemonTrend.seikakuInfo
      let itemInfo = response.data.rankingPokemonTrend.itemInfo
      let tokuseiInfo = response.data.rankingPokemonTrend.tokuseiInfo

      this.setState({
        wazaInfo: wazaInfo,
        seikakuInfo: seikakuInfo,
        itemInfo: itemInfo,
        tokuseiInfo: tokuseiInfo,
        showMode: 1
      })
    }).catch(error => {
      this.setState({
        showMode: 2
      }, () => {
      });
    });
  }

  keyExtractor = (item, index) => String(index)

  renderItem = ({ item }) => {
    if (item.sequenceNumber == 0) return null;
    return (
      <ListItem
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.textNo}>{item.sequenceNumber}</Text>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textRate}>{(Math.round(item.usageRate * 10) / 10).toFixed(1) + '%'}</Text>
          </View>
        }
      />
    );
  }

  refresh = () => {
    this.props.onClearPokemon()
    this.props.onClearValue()

    this.setState({
      showMode: 0,
      battleType: 0,
      pokemon: ''
    })

    axios.post('http://localhost:50080/api/getSeason')
    .then((response) => {
      let seasonInfos = response.data.seasonInfo

      let seasons = []
      seasonInfos.forEach(function(seasonInfo, index) {
        let season = {}
        let prefix = 'Season '
        if (RNLanguages.language =='ja-JP') {
          prefix = 'シーズン'
        }
        season.label = prefix + seasonInfo.seasonName.replace(/[^0-9^\.]/g,"")
        season.value = seasonInfo.seasonId
        seasons.push(season)
      })
      this.setState({seasons: seasons, season: seasons[0].value})
    }).catch(function (error) {
    })
    .then(function () {
    });
  }

  renderList = () => {
    if (this.state.showMode == 0) {
      return null;
    } else if (this.state.showMode == 1) {
      return (
        <ScrollableTabView style={{marginTop: 20, marginBottom: 70 }} initialPage={0}>
          <ScrollView tabLabel={Localized().moves} style={styles.tabView}>
            <View style={styles.card}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.wazaInfo}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
          <ScrollView tabLabel={Localized().item} style={styles.tabView}>
            <View style={styles.card}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.itemInfo}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
          <ScrollView tabLabel={Localized().ability} style={styles.tabView}>
            <View style={styles.card}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.tokuseiInfo}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
          <ScrollView tabLabel={Localized().nature} style={styles.tabView}>
            <View style={styles.card}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.seikakuInfo}
                  renderItem={this.renderItem}
                />
              </View>
          </ScrollView>
        </ScrollableTabView>
      );
    } else if (this.state.showMode == 2) {
      return (
        <Text>{Localized().notFound}</Text>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          placement="left"
          leftComponent={{ icon: 'home', color: '#fff', onPress: this.refresh }}
          centerComponent={{ text: Localized().title, style: { color: '#fff' } }}
          containerStyle={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
        />

        <PokeSearchTextBox
          options={this.state.options}
          onSelectOption={option => { 
            this.props.onSetPokemon(option)
            this.setState({ pokemon: option }) 
            this.update(this.state.languageId, this.state.season, this.state.battleType, option.PglPokemonId)
          }}
          currentLocale={RNLanguages.language}
          renderLabel={option => RNLanguages.language == 'ja-JP' ? option.PglName : option.PglNameEn}
          renderKey={option => option.Id} />

        {/* シーズン */}
        <RNPickerSelect 
          placeholder={{ label: '', value: {} }}
          items={this.state.seasons}
          onValueChange={(season) => {
            this.setState({ season: season });
            this.update(this.state.languageId, season, this.state.battleType, this.props.pokemon.PglPokemonId)
          }}
          style={{ ...pickerSelectStyles }}
          value={this.state.season} />

        {/* バトルタイプ */}
        <RNPickerSelect 
          placeholder={{ label: '', value: {} }}
          items={battleTypes}
          onValueChange={(battleType) => {
            this.setState({ battleType: battleType });
            this.update(this.state.languageId, this.state.season, battleType, this.props.pokemon.PglPokemonId)
          }}
          style={{ ...pickerSelectStyles }}
          value={this.state.battleType} />
          
        {this.renderList()}
        <FooterBanner isShow={this.state.isShow} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemon: state.input.pokemon
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSetPokemon(pokemon) {
      dispatch(setPokemon(pokemon))
    },
    onClearPokemon() {
      dispatch(clearPokemon())
    },
    onClearValue() {
      dispatch(clearValue())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: 200,
    marginLeft: 5
  },
  viewContainer: {
    width: 200,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  textNo: {
    flex: 1,
    color: 'grey'
  },
  textName: {
    flex: 5,
    color: 'grey'
  },
  textRate: {
    flex: 5,
    color: 'grey'
  }
});

// 0：全ての対戦,1：シングル,2：ダブル,5：スペシャル,6：WCS
const battleTypes = [
  {
    label: Localized().all,
    value: 0,
  },
  {
    label: Localized().single,
    value: 1,
  },
  {
    label: Localized().double,
    value: 2,
  },
  {
    label: Localized().special,
    value: 5,
  },
  {
    label: Localized().wcs,
    value: 6,
  }
]