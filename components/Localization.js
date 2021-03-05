import React from 'react';
import LocalizedStrings from 'react-native-localization';
import RNLanguages from 'react-native-languages';

export const Localized = () => {

  let strings = new LocalizedStrings({
    "en": {
      title:"PGL Search",
      moves:"Moves",
      ability:"Ability",
      nature:"Nature",
      item:"Held Item",
      all:"All Matches",
      single:"Single",
      double:"Double",
      special:"Special",
      wcs:"WCS",
      placeholder:"Please enter Pokémon",
      notFound:"Failed to search Pokémon Global Link"
    },
    "ja": {
      title:"PGL検索",
      moves:"わざ",
      ability:"とくせい",
      nature:"せいかく",
      item:"もちもの",
      all:"全ての対戦",
      single:"シングル",
      double:"ダブル",
      special:"スペシャル",
      wcs:"WCS",
      placeholder:"ポケモンを入力してください",
      notFound:"ポケモングローバルリンクからデータを取得できませんでした"
    }
  })
  strings.setLanguage(RNLanguages.language)

  return strings
}


export var strings = new LocalizedStrings({
  "en": {
    title:"PGL Search",
    moves:"Moves",
    ability:"Ability",
    nature:"Nature",
    item:"Held Item",
    all:"All Matches",
    single:"Single",
    double:"Double",
    special:"Special",
    wcs:"WCS",
    placeholder:"Please enter Pokémon"
  },
  "ja": {
    title:"PGL検索",
    moves:"わざ",
    ability:"とくせい",
    nature:"せいかく",
    item:"もちもの",
    all:"全ての対戦",
    single:"シングル",
    double:"ダブル",
    special:"スペシャル",
    wcs:"WCS",
    placeholder:"ポケモンを入力してください"
  }
})

export default strings