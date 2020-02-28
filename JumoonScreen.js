import React, {Component} from 'react';
import
{
    StyleSheet,
    ScrollView,
    SafeAreaView,
    View,
    Image,
    Text,
} from 'react-native';
import { Divider } from 'react-native-elements';


export default class JumoonScreen extends Component {

    render() {
        const {navigation} = this.props;

        return (
            <SafeAreaView style = {styles_jumoon.container}>

                <ScrollView>
                    <View style = {styles_jumoon.jumoonlist}>
                        <Text style = {{fontSize : 32, fontWeight : 'bold',
                                    marginBottom : 10}}>주문내역</Text>
                        <Text style = {{fontSize : 15, color : "#00000099",
                                    fontWeight : '200', marginBottom : 28}}>
                            현재 대기중인 주문이 없어요
                        </Text>
                        <View style = {{width : 322.44, height : 176.32}}>
                            <Image source = {require("./src/assets_JumoonScreen/bigpicture.png")}
                                    style = {{width : "100%", height : "100%"}} />
                        </View> 
                    </View>

                    <View style = {styles_jumoon.prevjumoon}>
                        <View style = {styles_jumoon.prevjumoon_toptext}>
                            <Text style = {{fontSize : 24, fontWeight : 'bold',
                                        flex : 1}}>지난 주문</Text>
                            <Text style = {{fontSize : 14, color : "#009AE8", 
                                        marginRight : 20}}>전체보기</Text>
                        </View>
                        <View style = {styles_jumoon.prevjumoon_list}>
                            <View style = {styles_jumoon.prevjumoon_listitem}>
                                <View style = {{flex : 1, marginLeft : 20}}>
                                    <Text style = {{fontSize : 16, fontWeight : '300',
                                        marginTop : 26}}>(435)야채비빔밥 나눌샘</Text>
                                    <Text style = {{fontSize : 14, color : '#00000099',
                                        fontWeight : '200', marginTop : 8}}>2019.01.12 11:55</Text>
                                </View>
                                <View style = {{width : 25, height : 25, marginTop : 34,
                                        marginRight : 23}}>
                                    <Image source = {require("./src/assets_JumoonScreen/arrowright.png")}
                                        style = {{width : '100%', height : '100%'}} />
                                </View>
                            </View>
                            <Divider style = {{backgroundColor: '#00000014',
                                    marginLeft : 20, marginRight : 20}} />
                            <View style = {styles_jumoon.prevjumoon_listitem}>
                                <View style = {{flex : 1, marginLeft : 20}}>
                                    <Text style = {{fontSize : 16, fontWeight : '300',
                                        marginTop : 26}}>(435)야채비빔밥 나눌샘</Text>
                                    <Text style = {{fontSize : 14, color : '#00000099',
                                        fontWeight : '200', marginTop : 8}}>2019.01.13 11:57</Text>
                                </View>
                                <View style = {{width : 25, height : 25, marginTop : 34,
                                        marginRight : 23}}>
                                    <Image source = {require("./src/assets_JumoonScreen/arrowright.png")}
                                        style = {{width : '100%', height : '100%'}} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles_jumoon = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFFFFF',
    },

    jumoonlist : {
        marginLeft : 20,
        marginTop : 52,
        marginBottom : 43.68,
    },

    prevjumoon : {
    },

    prevjumoon_toptext : {
        marginLeft : 20,
        marginBottom : 18,
        flexDirection : 'row',
        alignItems : 'baseline',
    },

    prevjumoon_list : {
        marginBottom : 20,
    },

    prevjumoon_listitem : {
        height : 92,
        flexDirection : 'row',
    },

});