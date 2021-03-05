import React, {Component} from "react";
import { StyleSheet, TouchableOpacity, View, Keyboard } from "react-native";
import { Text, Input, Item } from 'react-native-elements';
import kana from './common/js/kana.js';
import Enumerable from 'linq';
import LocalizedStrings from 'react-native-localization';
import RNLanguages from 'react-native-languages';

import { connect } from "react-redux";
import { setValue } from './actions/actions'

import { Localized } from './components/Localization'

class PokeSearchTextBox extends React.Component {
  constructor(props) {
    super(props);

    this._renderSuggestions = this._renderSuggestions.bind(this);
    this._selectItem = this._selectItem.bind(this);

    let { zIndex = 1 } = props;

    this.state = {
      query: props.renderLabel(""),
      isFiltering: false,
      filteredData: [],
      zIndex
    }
  }

  _renderSuggestions() {
    let { zIndex, query, filteredData, isFiltering } = this.state;
    let { renderLabel, renderKey } = this.props;

    let filterContent = () => {
      if (filteredData.length === 0) {
        return null;
      }

      return (
        <View>
          {filteredData.map(option => (
            <TouchableOpacity
              key={renderKey(option)}
              style={styles.suggestion}
              onPress={() => this._selectItem(option) }
            >
              <Text style={styles.suggestionText}>{renderLabel(option)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    let filterResults = filterContent()

    let {content, conditionalLayout} = (!isFiltering || query.length < 2) ? ({
      conditionalLayout: {},
      content: null
    }) : ({
      conditionalLayout: {
        zIndex: filterResults == null ? 0 : zIndex + 1,
        borderWidth: filterResults == null ? 0 : .5,
        height: filterResults == null ? 0 : Math.min(150, undefined)
      },
      content: filterResults
    });

    return (
      <View style={[styles.suggestionsContainer, conditionalLayout]}>
        {content}
      </View>
    );
  }

  _onChangeText(text) {
    let { renderLabel, options } = this.props;

    this.setState({
      isFiltering: true,
      query: text,
      filteredData: this.filteredData(renderLabel, text, options)
    });

    this.props.onSetValue(text)
  }

  filteredData(renderLabel, text, options)
  {
    if (this.props.currentLocale == 'ja-JP') {
      var searchText = Enumerable.from(text).select(x => kana.convertCharToKana(x)).toJoinedString()

      return options
      .sort((c1, c2) => renderLabel(c1).localeCompare(renderLabel(c2)))
      .filter(c => text !== "" && 
      Enumerable.from(renderLabel(c)).select(x => kana.convertCharToKana(x)).toJoinedString().indexOf(searchText) === 0 )  
    } else {
      var searchText = Enumerable.from(text).select(x => x.toLowerCase()).toJoinedString()

      return options
      .sort((c1, c2) => renderLabel(c1).localeCompare(renderLabel(c2)))
      .filter(c => text !== "" && 
      Enumerable.from(renderLabel(c)).select(x => x.toLowerCase()).toJoinedString().indexOf(searchText) === 0 )
    }
  }

  _onSubmitEditing() {
    this._selectItem(this.state.filteredData[0]);
  }

  _selectItem(item) {
    Keyboard.dismiss()
    this.setState({
      zIndex: this.props.zIndex || 1,
      isFiltering: false,
      query: item ? this.props.renderLabel(item) : ""
    })

    let text = item ? this.props.renderLabel(item) : ""
    this.props.onSetValue(text)
    
    if (item) {
      this.props.onSelectOption(item);
    }
  }

  render() {
    let { query = "" } = this.state;

    return (
      <View>
        <View style={query.length > 0 ? styles.selectedInputContainer : styles.inputContainer}>
        <Input 
          inputStyle={{ width: 300, justifyContent:'center', fontSize: 16 }}
          placeholder={Localized().placeholder}
          size={12}
          onChangeText={this._onChangeText.bind(this)}
          value={this.props.label}
          onSubmitEditing={this._onSubmitEditing.bind(this)}
        >
        </Input>
        </View>
        {this._renderSuggestions()}
      </View>
    );
  }
}

PokeSearchTextBox.defaultProps = {
  options: [],
  renderLabel: option => option,
  renderKey: option => option,
  onFocus: () => {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 35,
    width: '100%'
  },
  inputContainer: {
    height: 35,
  },
  selectedInputContainer: {
    height: 35,
  },
  suggestionsContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: 40,
    right: 4,
    left: 4,
  },
  suggestion: {
    padding: 8,
    paddingVertical: 8
  },
  suggestionText: {
  }
});

const mapStateToProps = state => {
  return {
    label: state.label.value
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSetValue(value) {
      dispatch(setValue(value))
    },
    onClearValue() {
      dispatch(clearPokemon())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeSearchTextBox);