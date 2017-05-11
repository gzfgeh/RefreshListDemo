/**
 * Created by guzhenfu on 17/5/11.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,ToastAndroid,
    TouchableHighlight} from 'react-native'

import RefrshList from 'react-native-refreshlist'

const preData = [{keysss: 1},{keysss:2},{keysss:3},{keysss:4},{keysss:5},{keysss:6},{keysss:7},{keysss:8},{keysss:9},{keysss:10}];
const newData = [{keysss: 12},{keysss:23},{keysss:34},{keysss:45},{keysss:56},{keysss:67},{keysss:78},{keysss:89},{keysss:90},{keysss:10}];

export default class RefreshAndLoadMorePage extends React.Component{
    constructor(props) {
        super(props);
        this.moreTime = 0;

        if (this.props.type == 1) {
            setTimeout(() => {
                this._listRef.setError();

            }, 2000);
        } else if (this.props.type == 2) {
            setTimeout(() => {
                this._listRef.setData([]);

            }, 3000);
        } else {
            setTimeout(() => {
                this._listRef.setData(preData);

            }, 3000);
        }
    }





    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve){
        setTimeout(() => {
            resolve();
            this.moreTime = 0;
            this._listRef.setData(newData);
        }, 3000);
    }

    /**
     * 点击事件
     * @param item
     * @private
     */
    _onItemPress(item){
    }

    /**
     * 加载更多  数据加载
     * @private
     */
    _loadMore(){
        ToastAndroid.show(this.resume+"--", ToastAndroid.SHORT);
        if (this.props.type == 4){
            if (!this.resume){
                setTimeout(() => {
                    this._listRef.setError();
                    this.resume = true;
                }, 3000);
            }else{
                setTimeout(() => {
                    if (this.moreTime < 3){
                        this._listRef.addData(preData);
                        this.moreTime ++;
                    }else{
                        this._listRef.addData([]);
                    }

                }, 3000);
            }

        }else{
            setTimeout(() => {
                if (this.moreTime < 3){
                    this._listRef.addData(preData);
                    this.moreTime ++;
                }else{
                    this._listRef.addData([]);
                }

            }, 3000);
        }

    }

    /**
     * 渲染item 布局
     * @param item
     * @returns {XML}
     * @private
     */
    _renderItem(item){
        return(
            <TouchableHighlight
                underlayColor="rgba(34, 26, 38, 0.1)"
                onPress={()=> {this._onItemPress(item)}}>
                <View style={styles.listWrapper}>
                    <View style={styles.listItemWrapper}><Text >{item.index + "1"}</Text></View>
                    <View style={styles.listItemWrapper}><Text >{item.item.keysss+"2"}</Text></View>
                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextBlue}>{"sddsd"}</Text></View>
                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextRed}>{"sddsd"}</Text></View>
                </View>
            </TouchableHighlight>
        )
    }


    _back(){
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    render(){
        return(
            <View style={styles.container}>
                <Text
                    onPress={()=> {this._back()}}
                        style={{padding: 20}}>回退</Text>
                <RefrshList
                    ref={(list)=> this._listRef = list}
                    onPullRelease={(resolve)=> this._onPullRelease(resolve)}
                    ItemHeight={120}
                    onEndReached={()=> this._loadMore()}
                    renderItem={(item)=> this._renderItem(item)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listWrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',
    },
    listItemWrapper:{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    listItemTextBlue:{
        color: '#45a162',
    },
    listItemTextRed:{
        color: '#c84a4a',
    }
});