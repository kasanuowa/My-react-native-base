import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from "react-native";
import { Container, Header,Content, Card, CardItem, Left, Body, Right, List, ListItem, Item, Icon, Input } from 'native-base';

// 抽屉菜单组件
class DrawItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            onFocus:'推荐',
            // 为列表项添加一个数据源，并确定渲染条件
            items:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    // 在组件加载完成后初始化列表项的数据
    componentDidMount() {
        this.setState(
            {
                items:this.state.items.cloneWithRows(['推荐','路由器','交换机','信号放大器','中继器'])
            }
        )
    }

    // 判断选中的列表项
    onhandleFocus(item){
        this.setState(
            {   
                onFocus:item,
            }
        );
    }


    render(){
        // 列表选项数据
        return (
            <Container>
                <Content>
                    <ListView 
                        dataSource={this.state.items}
                        renderRow={(item) => 
                            <ListItem 
                                style={{
                                    marginLeft:0,
                                    marginVertical:pxToDp(32),
                                    paddingTop:0,
                                    paddingBottom:0,
                                    borderBottomColor:'transparent',
                                }}
                                onPress={()=>this.onhandleFocus(item)}
                            >
                                <View 
                                    style={{
                                        backgroundColor:this.state.onFocus==item?'#5B86E5':'#ffffff',
                                        height:pxToDp(39),
                                        width:pxToDp(8),
                                        marginRight:pxToDp(18)
                                    }}
                                />
                                <Text style={styles.DrawItems}>{item}</Text>
                            </ListItem>}
                    >
                    </ListView>
                </Content>
            </Container>
        );

    }
}
