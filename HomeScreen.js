import React, {Component} from 'react';
import
{
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
    SimpleLineIcons,
} from '@expo/vector-icons';


export default class HomeScreen extends Component {

    _moreBtnAlert = () => alert("더보기 버튼 클릭!");
    
    render() {
        const {navigation} = this.props;

        return (
            <SafeAreaView style = {styles_home.container}>
                <View style = {{alignItems : 'center', justifyContent : 'flex-end', 
                    marginBottom : 10.76, height : 35}}>
                    <View style = {{flexDirection : 'row'}}>
                        <View style = {{flexDirection : 'row', alignItems : 'center',
                                flex : 1, marginLeft : 134.5}}>
                            <Text style = {{fontSize : 16}}>연세대학교(신촌)</Text>
                            <View style = {{width : 15, height : 15, marginLeft : 3.5}}>
                                <Image source = {require('./src/assets_HomeScreen/arrow.png')}
                                        style = {{width : '100%', height : '100%'}} />
                            </View>
                        </View>
                        <SimpleLineIcons name = 'magnifier' size = {17}
                            style = {{marginRight : 19.7}} />
                    </View>

                </View>
                <ScrollView>
                    <View style = {styles_home.adview}>
                        <Image source = {require("./src/assets_HomeScreen/10percentdiscount.png")} 
                                style = {{width : '100%', height : '100%'}} />
                    </View>

                    <View style = {styles_home.menuview}>
                        <View style = {styles_home.menuview_innercol}>

                            <View style = {styles_home.menuview_innerrow}>

                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 14, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/haksik.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>학식</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/hansik.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>한식</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/yangsik.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>양식</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 14}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/ilsik.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>일식</Text>
                                </View>

                            </View>

                            <View style = {{height : 10}}>

                            </View>

                            <View style = {styles_home.menuview_innerrow}>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 14, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/asian.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>아시안</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/cafedessert.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>카페·디저트</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 7}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/gogi.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>고기</Text>
                                </View>
                                <View style = {{flex : 1, alignItems : 'center',
                                                marginLeft : 7, marginRight : 14}}>
                                    <View style = {{width : 70, height : 70}}>
                                        <Image source = {require("./src/assets_HomeScreen/bunsik.png")}
                                                style = {styles_home.menu_img}/>
                                    </View>
                                    <Text style = {styles_home.menu_text}>분식</Text>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style = {styles_home.cafeteria}>
                        <Text style = {styles_home.cafeteria_text}>오늘은 가까운 학식 먹을래요?</Text>

                        <ScrollView style = {styles_home.cafeteria_list} 
                                    horizontal = {true}
                                    showsHorizontalScrollIndicator={false}>

                            <View style = {[styles_home.cafeteria_listitem, 
                                        {marginLeft : 20, marginRight : 17}]}>
                                <Image source = {require('./src/assets_HomeScreen/mat.png') }
                                        style = {styles_home.cafeteria_listitem_img}/>
                                <Text style = {styles_home.cafeteria_listitem_text}>
                                    맛나샘
                                </Text>
                            </View>
                            <View style = {[styles_home.cafeteria_listitem, 
                                        {marginRight : 17}]}>
                                <Image source = {require('./src/assets_HomeScreen/bu.png') }
                                        style = {styles_home.cafeteria_listitem_img}/>
                                <Text style = {styles_home.cafeteria_listitem_text}>
                                    부를샘
                                </Text>
                            </View>
                            <View style = {[styles_home.cafeteria_listitem, 
                                        {marginRight : 20}]}>
                                <Image source = {require('./src/assets_HomeScreen/han.png') }
                                        style = {styles_home.cafeteria_listitem_img}/>
                                <Text style = {styles_home.cafeteria_listitem_text}>
                                    한울샘
                                </Text>
                            </View>

                        </ScrollView>
                    </View>

                    <View style = {styles_home.recommend}>
                        <Text style = {styles_home.recommend_text}>야미가 추천하는 맛집은 어때요?</Text>
                        
                        <View style = {styles_home.recommend_col}>
                            <View style = {styles_home.recommend_row}>

                                <View style = {styles_home.recommend_item}>
                                    <View style = {{width : 160, height : 86.61,
                                                marginLeft : 0, }}>
                                        <Image source = {require("./src/assets_HomeScreen/emo_1.png")}
                                                style = {styles_home.recommend_listitem_img}/>
                                    </View>
                                    <Text style = {{fontSize : 9, color : '#00000099',
                                                marginLeft : 5, marginTop : 5}}>
                                        100m 이내
                                    </Text>
                                    <Text style = {{fontSize : 12, fontWeight : 'bold', 
                                                marginLeft : 5, marginTop : 3}}>
                                        이모네 떡볶이
                                    </Text>
                                </View>
                                <View style = {styles_home.recommend_item}>
                                    <View style = {{width : 160, height : 86.61, 
                                                marginRight : 0}}>
                                        <Image source = {require("./src/assets_HomeScreen/emo_2.png")}
                                                style = {styles_home.recommend_listitem_img}/>
                                    </View>
                                    <Text style = {{fontSize : 9, color : '#00000099',
                                                marginLeft : 5, marginTop : 5}}>
                                        100m 이내
                                    </Text>
                                    <Text style = {{fontSize : 12, fontWeight : 'bold', 
                                                marginLeft : 5, marginTop : 3}}>
                                        이모네 떡볶이
                                    </Text>
                                </View>

                            </View>

                            <View style = {[styles_home.recommend_row, {marginBottom : 20}]}>
                                
                                <View style = {styles_home.recommend_item}>
                                    <View style = {{width : 160, height : 86.61,
                                                marginLeft : 0}}>
                                        <Image source = {require("./src/assets_HomeScreen/emo_3.png")}
                                                style = {styles_home.recommend_listitem_img}/>
                                    </View>
                                    <Text style = {{fontSize : 9, color : '#00000099',
                                                marginLeft : 5, marginTop : 5}}>
                                        100m 이내
                                    </Text>
                                    <Text style = {{fontSize : 12, fontWeight : 'bold', 
                                                marginLeft : 5, marginTop : 3}}>
                                        이모네 떡볶이
                                    </Text>
                                </View>
                                <View style = {styles_home.recommend_item}>
                                    <View style = {{width : 160, height : 86.61,
                                                marginRight : 0}}>
                                        <Image source = {require("./src/assets_HomeScreen/emo_4.png")}
                                                style = {styles_home.recommend_listitem_img}/>
                                    </View>
                                    <Text style = {{fontSize : 9, color : '#00000099',
                                                marginLeft : 5, marginTop : 5}}>
                                        100m 이내
                                    </Text>
                                    <Text style = {{fontSize : 12, fontWeight : 'bold', 
                                                marginLeft : 5, marginTop : 3}}>
                                        이모네 떡볶이
                                    </Text>
                                </View>
                            
                            </View>
                        </View>
                        <Button title = "더보기" type = "outline" 
                                buttonStyle = {styles_home.recommend_btn}
                                titleStyle = {{fontSize : 15}}
                                onPress = {this._moreBtnAlert} />
                                {/* onPress = {navigation.navigate("주문내역")} /> */}
                    </View>

                    <View style = {styles_home.information}>
                        <Text style = {{fontSize : 14, color : '#C1C1C1',
                                marginTop : 10, marginBottom : 9}}>(주)와이콘즈</Text>
                        <View style = {{marginBottom : 8, flexDirection : 'row', 
                                alignItems : 'center'}}>
                            <Text style = {{color : '#C1C1C1', fontSize : 8, flex : 5}}>
                                사업자정보확인     |     이용약관     |     개인정보취급방침
                            </Text>
                            <Text style = {{color : "#C1C1C1", fontSize : 10, flex : 1,
                                marginLeft : 20}}>
                                접기
                            </Text>
                        </View>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>대표이사 : 김승일</Text>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>사업자등록번호 : 00000000000</Text>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>통신판매업신고번호 : 00000000000</Text>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>주소 : 서울시 서대문구 연세로 50 연세대학교 공학원 1층 118-b호</Text>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>대표번호 : 02-392-0700</Text>
                        <Text style = {{color : '#C1C1C1', fontSize : 8}}>이메일 : support@yconslab.com</Text>
                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles_home = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    }, 

    // topbar : {
    //     flexDirection : 'row',
    //     height : 54,
    //     backgroundColor : '#00000000',

    //     alignItems : 'center',
    // }, 

    // topbar_text : {
    //     marginLeft : 134.5,
    //     marginRight : 3.5,
    //     fontSize : 16,
    //     fontWeight : 'normal',
    //     textAlign : 'center',
    // },

    adview : {
        height : 124,
        backgroundColor : 'yellow',
    }, 

    menuview : {
        backgroundColor : '#0000000f',
    },

    menuview_innercol : {
        height : 221,
        backgroundColor : '#FFFFFF',
        borderWidth : 10, 
        borderRadius : 25,
        borderColor: '#0000000f',

        alignItems : 'center',
        justifyContent : 'center',
    },

    menuview_innerrow : {
        // flex : 1,
        flexDirection : 'row',
        //justifyContent : 'flex-end',
    },

    menu_img : {
        // marginTop : 10,
        // marginBottom : 0,
        // marginLeft : 20,
        // marginRight : 20,
        // padding : 40,
        // alignItems : 'center',
        // justifyContent : 'center',
        width : '100%',
        height : '100%',
    },

    menu_text : {
        fontSize : 12,
        color : '#00000099',
        textAlign : 'center',
        justifyContent : 'center',
    },

    cafeteria : {
        height : 220,
        backgroundColor : '#FFFFFF',
    },

    cafeteria_text : {
        fontSize : 17,
        fontWeight : 'bold',
        marginLeft : 20,
        marginTop : 30,
        marginBottom : 18,
    },

    cafeteria_list : {
        flexDirection : 'row',
    },

    cafeteria_listitem : {
        width : 147,
        flexDirection : 'column',
        //backgroundColor : '#00000055',
    
        // shadowColor: "#000",
        // shadowOffset: {
	    // width: 0,
	    // height: 1,
        // },
        // shadowOpacity: 0,
        // shadowRadius: 1.51,
        // elevation: 2,
    },
    
    cafeteria_listitem_img : {
        width : '100%',
        height : 103,
    },

    cafeteria_listitem_text : {
        marginTop : 15,
        justifyContent : 'center',
        alignSelf : 'center',
        fontSize : 14,
        fontWeight : 'bold',
    },

    recommend : {
        height : 425,
        //backgroundColor : '#FFFFFF',
    },

    recommend_text : {
        fontSize : 17,
        fontWeight : 'bold',
        marginLeft : 20,
        marginTop : 30,
        marginBottom : 18,
    },

    recommend_col : {
        flexDirection : 'column',
    },

    recommend_row : {
        flexDirection : 'row',
        marginLeft : 20,
        marginBottom : 15,
    },

    recommend_item : {
        flex : 1,
        height : 128,
        backgroundColor : 'white',
    },

    recommend_listitem_img : {
        width : '100%',
        height : '100%',
    },

    recommend_btn : {
        height : 40,
        marginLeft : 20,
        marginRight : 20,

        borderWidth : 1, 
        borderRadius : 4,
        borderColor: '#069BE5',
    },

    information : {
        height : 150,
        marginLeft : 20,
    },


});