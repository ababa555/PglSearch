import React from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'react-native-firebase';

firebase.admob().initialize('ca-app-pub-8332424798400955~1831625762');
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

export default class FooterBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderBanner = () => {
    if (this.props.isShow) {
      return (
        <Banner
            style={{position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center'}}
            // テスト用
            // unitId={"ca-app-pub-3940256099942544/6300978111"}
            // 本番用
            unitId={"ca-app-pub-8332424798400955/7140217791"}
            size={"FULL_BANNER"}
            request={request.build()}
            onAdLoaded={() => {
              console.log('Banner loaded');
            }}
            onAdFailedToLoad={(error) => {
              console.log(error);
            }}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      this.renderBanner()
    )
  }
}

AppRegistry.registerComponent('Banner', () => Banner);