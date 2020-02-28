import React, {Component} from 'react';
import
{
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';
import { Divider } from 'react-native-elements';


export default class WalletScreen extends Component {

    render() {
        const {navigation} = this.props;

        return (
            <SafeAreaView style = {styles_wallet.container}>
                <View>
                    <View style = {{height : 57, flexDirection : 'row',
                            alignItems : 'center', backgroundColor : 'white'}}>
                        <Text style = {{flex : 1, fontSize : 17, 
                            fontWeight : 'bold', marginLeft : 157}}>
                            야미지갑
                        </Text>
                        <Text style = {{fontSize : 17, color : '#069BE5',
                            marginRight : 20}}>
                            관리
                        </Text>
                    </View>
                    <View style = {{backgroundColor: '#0000000F', height : 2}}></View>
                    <View style = {styles_wallet.moneybox}>
                        <Text style = {{fontSize : 13, marginBottom : 4, 
                                    marginLeft : 20}}>야미 지갑 잔액</Text>
                        <View style = {{flexDirection : 'row', alignItems : 'center',
                                marginLeft : 20}}>
                            <Text style = {{fontSize : 32, fontWeight : 'bold'}}>73,500</Text>
                            <Text style = {{fontSize : 32}}>원</Text>
                        </View>
                        <View style = {{flexDirection : 'row'}}>
                            <View style = {{height : 80, flex : 1,
                                    justifyContent : 'center', alignItems : 'center'}}>
                                <Text style = {{fontSize : 14}}>송금</Text>
                            </View>
                            <View style = {{width : 1, height : 46, backgroundColor : '#F0F0F0', 
                                alignSelf : 'center'}}></View>
                            <View style = {{height : 80, flex : 1,
                                    justifyContent : 'center', alignItems : 'center'}}>
                                <Text style = {{fontSize : 14}}>충전</Text>
                            </View>
                            <View style = {{width : 1, height : 46, backgroundColor : '#F0F0F0', 
                                alignSelf : 'center'}}></View>
                            <View style = {{height : 80, flex : 1,
                                    justifyContent : 'center', alignItems : 'center'}}>
                                <Text style = {{fontSize : 14}}>큐알코드</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{height : 6, backgroundColor : '#0000000F'}}></View>
                    <View style = {styles_wallet.selectlist}>
                        <View style = {styles_wallet.selectlist_item}>
                            <Text style = {styles_wallet.selectlist_itemtext}>
                                야미머니 거래내역
                            </Text>
                        </View>
                        <Divider style = {{backgroundColor: '#00000014',
                                    marginLeft : 20, marginRight : 20}} />
                        <View style = {styles_wallet.selectlist_item}>
                            <Text style = {styles_wallet.selectlist_itemtext}>
                                포인트 적립 및 사용내역
                            </Text>
                        </View>
                        <Divider style = {{backgroundColor: '#00000014',
                                    marginLeft : 20, marginRight : 20}} />
                        <View style = {styles_wallet.selectlist_item}>
                            <Text style = {styles_wallet.selectlist_itemtext}>
                                기프트카드
                            </Text>
                        </View>
                        <Divider style = {{backgroundColor: '#00000014',
                                    marginLeft : 20, marginRight : 20}} />
                        <View style = {styles_wallet.selectlist_item}>
                            <Text style = {styles_wallet.selectlist_itemtext}>
                                야미 쿠폰함
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
                
        );
    }
}

const styles_wallet = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'space-between',
        backgroundColor : '#FFFFFF',
    },

    moneybox : {
        marginTop : 30,
    },

    selectlist : {

    },

    selectlist_item : {
        height : 64, 
        justifyContent : 'center',
    },

    selectlist_itemtext : {
        marginLeft : 20,
        fontSize : 17,
    },

});