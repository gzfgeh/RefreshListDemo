/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import MainPage from './app/MainPage'

export default class RefreshListDemo extends Component {
  render(){
    return(
        /**
         * navigator 设置初始页为MainPage，
         * 渲染场景 使用动态加载组件的方式
         */
        <Navigator
            initialRoute={{component: MainPage}}
            renderScene={(route, navigator) => {
              return <route.component navigator={navigator} {...route.args} />
            }}/>
    );

  }

}

AppRegistry.registerComponent('RefreshListDemo', () => RefreshListDemo);
