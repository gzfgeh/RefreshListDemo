/**
 * Created by guzhenfu on 17/5/11.
 */

import React from 'react'
import {
    View,
    Text,} from 'react-native'

import RefreshAndLoadMorePage from './../app/RefreshAndLoadMorePage'

export default class MainPage extends React.Component{

    _noNet(){
        this.props.navigator.push({
            component: RefreshAndLoadMorePage,
            args: {type: 1},
        })
    }

    _noContent(){
        this.props.navigator.push({
            component: RefreshAndLoadMorePage,
            args: {type: 2},
        })
    }

    _Normal(){
        this.props.navigator.push({
            component: RefreshAndLoadMorePage,
            args: {type: 3},
        })
    }

    _loadMoreNoNet(){
        this.props.navigator.push({
            component: RefreshAndLoadMorePage,
            args: {type: 4},
        })
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center',
                    justifyContent: 'center', backgroundColor:'white'}}>
                <Text
                    onPress={()=> {this._noNet()}}
                    style={{padding: 20}}>没有网络</Text>
                <Text
                    onPress={()=> {this._noContent()}}
                    style={{padding: 20}}>没有数据</Text>
                <Text
                    onPress={()=> {this._Normal()}}
                      style={{padding: 20}}>正常情况</Text>
                <Text
                    onPress={()=> {this._loadMoreNoNet()}}
                    style={{padding: 20}}>加载更多,没有网络</Text>
            </View>
        );

    }
}