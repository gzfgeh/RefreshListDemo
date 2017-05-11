# RefreshListDemo
0、写在前面 <br>
  用React Native也有一段时间了，新出来的加载列表控件FlatList也出来了，FlatList本身是支持下拉刷新和上拉加载更多的，而且性能比ListView要强，但是Android和IOS要统一下拉头，所以只能重写这个控件，但是网上找半天没有找到基于FlatList，只是找到这个 [react-native-pull](https://github.com/greatbsky/react-native-pull) 基于ListView的，所以自己动手丰衣足食，顺便锻炼一下自己的React Native技能，但是是基于react-native-pull它的，站在巨人肩膀可以看的更远。[项目源码地址](https://github.com/gzfgeh/RefreshList), [Demo地址](https://github.com/gzfgeh/RefreshListDemo)喜欢的给个star，谢谢！<br>


1、特点 <br>

    0- 纯js跨平台 <br>
    1- Android、IOS 统一下拉头 <br>
    2- 下拉刷新和上拉加载 <br>
    3- 加载中、正常显示、空数据、网络异常等情况的处理，用户不用关心 <br>
    4- 控件是基于最新的FlatList <br>
    5- 以上情况都支持自定义 <br>
    6- FlatList自身支持的 单击Item，添加头部等 <br>

2、直接上效果图 <br>
  下面效果图有点失真，录制有误，真实情况不卡，真实情况不卡，真实情况不卡！！！ <br>
![正常情况](/screen/normal.gif)
![空数据情况](/screen/empty.gif)
![异常情况](/screen/error.gif)
![加载更多异常](/screen/moreerror.gif)

3、使用姿势 
导入控件：
```java
  npm install react-native-refreshlist --save
  import RefreshList from 'react-native-refreshlist'
```
使用控件：
```javascript
<RefreshList
     ref={(list)=> this._listRef = list}
     onPullRelease={(resolve)=> this._onPullRelease(resolve)}
     ItemHeight={120}
     onEndReached={()=> this._loadMore()}
     renderItem={(item)=> this._renderItem(item)}/>
```
使用说明：<br>

   0. 要给组件设置一个ref <br>
   1. 下拉刷新的设置onPullRelease，并且从父控件传入一个回调 <br>
   2. 设置ItemHeight属性，为了给Item一个固定高度，官方说增加性能 <br>
   3. onEndReached设置上拉加载更多 <br>
   4. 渲染Item控件 renderItem <br>
   5. 下拉刷新数据的设置 this._listRef.setData(data); <br>
   6. 上拉加载更多的设置 this._listRef.addData(data); <br>
   7. 给控件增加以下属性可以 自定义 <br>
        renderLoading 加载中 自定义 <br>
        renderEmpty 空页面 自定义 <br>
        renderError 数据错误 自定义 <br>
        renderNoMore 没有更多 自定义 <br>
        renderMoreError 加载更多出错 自定义 <br>
        renderMore 加载更多 自定义 <br>

4、参考文章 <br>
  [https://facebook.github.io/react-native/docs/flatlist.html](https://facebook.github.io/react-native/docs/flatlist.html)
  [https://github.com/greatbsky/react-native-pull](https://github.com/greatbsky/react-native-pull)
  [https://github.com/gzfgeh/RefreshListDemo](https://github.com/gzfgeh/RefreshListDemo)
  [https://github.com/gzfgeh/RefreshList](https://github.com/gzfgeh/RefreshList)

  最后，喜欢的给个star，谢谢！
