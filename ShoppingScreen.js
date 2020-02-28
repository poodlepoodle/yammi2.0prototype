import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Divider } from 'react-native-elements';
import { TabNavigator, StackNavigator } from 'react-navigation';
import
{
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';


const width = Dimensions.get('window').width;
const tabBarWidth = width;

class FirstScreen extends Component {
    render() {
        const SubTab = createMaterialTopTabNavigator();
        
        return (
            <ScrollView style = {{backgroundColor : 'white',}}>
                <Text style = {{marginLeft : 20, marginTop : 25, 
                    fontSize : 17, fontWeight : 'bold'}}>오늘의 추천 상품이에요.</Text>
                <ScrollView style = {styles_shopping.product_list} 
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}>
                    <View style = {[styles_shopping.product_listitem, 
                            {marginLeft : 20, marginRight : 17}]}>
                        <Image source = {require('./src/assets_ShoppingScreen/product_1.jpg') }
                            style = {styles_shopping.product_listitem_img}/>
                        <Text style = {styles_shopping.product_listitem_text}>
                            기념품
                        </Text>
                        <Text style = {styles_shopping.product_listitem_subtext}>
                            소중한 사람에게 선물하세요
                        </Text>
                    </View>
                    <View style = {[styles_shopping.product_listitem, 
                            {marginRight : 17}]}>
                        <Image source = {require('./src/assets_ShoppingScreen/product_2.jpg') }
                            style = {styles_shopping.product_listitem_img}/>
                        <Text style = {styles_shopping.product_listitem_text}>
                            기념품
                        </Text>
                        <Text style = {styles_shopping.product_listitem_subtext}>
                            소중한 사람에게 선물하세요
                        </Text>
                    </View>
                    <View style = {[styles_shopping.product_listitem, 
                            {marginRight : 20}]}>
                        <Image source = {require('./src/assets_ShoppingScreen/product_3.jpg') }
                            style = {styles_shopping.product_listitem_img}/>
                        <Text style = {styles_shopping.product_listitem_text}>
                            기념품
                        </Text>
                        <Text style = {styles_shopping.product_listitem_subtext}>
                            소중한 사람에게 선물하세요
                        </Text>
                    </View>
                </ScrollView>
                <View style = {{height : 72, backgroundColor : '#E5C5CB', 
                        marginLeft : 15, marginRight : 15, borderRadius : 8, 
                        justifyContent : 'center', alignItems : 'center'}}>
                    <Text style = {{color : 'white', fontWeight : 'bold'}}>
                        "팔로우 하면 이만원!" 광고 이미지 자리
                    </Text>
                </View>
                <Text style = {{marginLeft : 20, marginTop : 27.5, 
                    fontSize : 17, fontWeight : 'bold'}}>베스트 상품</Text>
                <View style = {{marginTop : 18.5}}>
                    <View style = {{flexDirection : 'row'}}>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/total.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{color : '#069BE5', fontSize : 12, 
                                fontWeight : 'bold', marginTop : 2}}>
                                전체
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/yonsei.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                연세대
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/joongang.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                중앙대
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/ewha.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                이화여대
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/sogang.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                서강대
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/hongik.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                홍익대
                            </Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <View style = {{width : 28, height : 28}}>
                                <Image source = {require("./src/assets_ShoppingScreen/konkuk.png")} 
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                            <Text style = {{fontSize : 12, 
                                marginTop : 2}}>
                                건국대
                            </Text>
                        </View>

                    </View>
                    <View style = {{height : 3.65, backgroundColor : "#069BE5", 
                        width : 36, marginLeft : 8.5, marginTop : 2.22}}>

                    </View>
                    <View style = {{backgroundColor : "#F5F5F5", height : 43, 
                        flexDirection : 'row', alignItems : 'center'}}>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <Text style = {{fontSize : 13}}>많이 구매한 상품</Text>
                        </View>
                        <View style = {{flex : 1, alignItems : 'center'}}>
                            <Text style = {{fontSize : 13, color : "#0000004D"}}>리뷰가 좋은 상품</Text>
                        </View>
                    </View>
                    <View style = {{backgroundColor : 'white', marginTop : 15.81}}>
                        <View style = {{flexDirection : 'row', marginBottom : 15.81}}>
                            <Text style = {{fontSize : 17, fontWeight : 'bold',
                                color : '#069BE5', marginLeft : 14, marginRight : 19}}>1</Text>
                            <View style = {{width : 105, height : 105}}>
                                <Image source = {require("./src/assets_ShoppingScreen/product_1.jpg")}
                                    style = {{width : '100%', height : '100%'}}/>
                            </View>
                            <View style = {{marginLeft : 12.6, marginTop : 15.58}}>
                                <Text style = {{fontSize : 10}}>생활가전특가</Text>
                                <Text style = {{fontSize : 14, fontWeight : 'bold', 
                                    marginTop : 3.7}}>요리치 카링선풍기</Text>
                                <Text style = {{fontSize : 14, marginTop : 22.81}}>4,300원</Text>
                            </View>
                        </View>
                        <View style = {{flexDirection : 'row', marginBottom : 43.43}}>
                            <Text style = {{fontSize : 17, fontWeight : 'bold',
                                color : '#069BE5', marginLeft : 14, marginRight : 16}}>2</Text>
                            <View style = {{width : 105, height : 105}}>
                                <Image source = {require("./src/assets_ShoppingScreen/product_2.jpg")}
                                    style = {{width : '100%', height : '100%'}}/>
                            </View>
                            <View style = {{marginLeft : 12.6, marginTop : 15.58}}>
                                <Text style = {{fontSize : 10}}>생활용품</Text>
                                <Text style = {{fontSize : 14, fontWeight : 'bold', 
                                    marginTop : 3.7}}>어스웰 텀블러 20oz</Text>
                                <Text style = {{fontSize : 14, marginTop : 22.81}}>40,000원</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </ScrollView>
        );
    }
}

class SecondScreen extends Component {
    render() {
        return (
            <View style = {{flex : 1, backgroundColor : 'white',
                justifyContent : 'center', alignItems : 'center'}}>
                <Text>베스트</Text>
            </View>
        );
    }
}

class ThirdScreen extends Component {

    render() {
        const {navigation} = this.props;

        return (
            <View style = {{flex : 1, backgroundColor : 'white'}}>
                <View style = {{backgroundColor : 'white'}}>
                    <View style = {{justifyContent : 'space-between', alignItems : 'center',
                            flexDirection : 'row', marginLeft : 30, marginTop : 15.13,
                            marginRight : 32}}>
                        <TouchableOpacity onPress = {() => navigation.navigate("탭_대학교_클릭")}>
                            <View style = {{width : 79, height : 77}}>
                                <Image source = {require("./src/assets_ShoppingScreen/big_yonsei.png")}
                                    style = {{width : '100%', height : '100%'}} />
                            </View>
                        </TouchableOpacity>
                        <View style = {{width : 87, height : 85}}>
                            <Image source = {require("./src/assets_ShoppingScreen/big_ewha.png")}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                        <View style = {{width : 74, height : 68}}>
                            <Image source = {require("./src/assets_ShoppingScreen/big_joongang.png")}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                    </View>
                    <View style = {{alignItems : 'center', justifyContent : 'space-between', 
                            flex : 1, flexDirection : 'row', marginLeft : 30, 
                            marginTop : 40,}}>
                        <View style = {{width : 87, height : 85, marginLeft : 12}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>연세대학교</Text>
                        </View>
                        <View style = {{width : 87, height : 85, marginRight : 20}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>이화여자대학교</Text>
                        </View>
                        <View style = {{width : 87, height : 85, marginRight : 10}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>중앙대학교</Text>
                        </View>
                    </View>
                </View>

                <View style = {{backgroundColor : 'white', marginTop : 0,}}>
                    <View style = {{justifyContent : 'space-between', alignItems : 'center',
                            flexDirection : 'row', marginLeft : 30, marginTop : 0,
                            marginRight : 32}}>
                        <View style = {{width : 81, height : 82}}>
                            <Image source = {require("./src/assets_ShoppingScreen/big_sogang.png")}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                        <View style = {{width : 79, height : 77}}>
                            <Image source = {require("./src/assets_ShoppingScreen/big_hongik.png")}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                        <View style = {{width : 74, height : 74}}>
                            <View style = {{width : 74, height : 74,
                                borderWidth : 1, borderColor : "#707070", 
                                borderRadius : 150/2, backgroundColor : "white",
                                alignItems : 'center', justifyContent : 'center'}} >
                                <Text style = {{fontSize : 51, fontWeight : '100', 
                                    color : '#707070'}}>?</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{alignItems : 'center', justifyContent : 'space-between', 
                            flex : 1, flexDirection : 'row', marginLeft : 30, 
                            marginTop : 42,}}>
                        <View style = {{width : 81, height : 82, marginLeft : 12}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>서강대학교</Text>
                        </View>
                        <View style = {{width : 81, height : 82, marginLeft : 12}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>홍익대학교</Text>
                        </View>
                        <View style = {{width : 81, height : 82, marginRight : 22}}>
                            <Text style = {{marginTop : 0.81, fontSize : 13}}>추가입점예정</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

class FourthScreen extends Component {
    render() {
        return (
            <View style = {{flex : 1, backgroundColor : 'white',
                justifyContent : 'center', alignItems : 'center'}}>
                <Text>마이페이지</Text>
            </View>
        );
    }
}

class EmptyScreen extends Component {
    render() {
        return (
            <View style = {{flex : 1, backgroundColor : 'white',
                justifyContent : 'center', alignItems : 'center'}}>
                <Text>빈 페이지</Text>
            </View>
        );
    }
}

class ShoppingScreen_Main extends Component {
	render() {
		const {navigation} = this.props;
		const Tab = createMaterialTopTabNavigator();
		
		return (
			<Tab.Navigator
			tabBarOptions = {{
				activeTintColor : '#069BE5',
				inactiveTintColor : '#666666',
				allowFontScaling : false,
				labelStyle : {
					fontSize : 14,
					marginBottom : 0,
				},
				tabStyle : {
					height : 45,
				},
				indicatorStyle : {
					width : tabBarWidth / 4 - 55,
						marginLeft : 27.5,
						marginRight : 27.5,
						height : 3.65,
						backgroundColor : '#069BE5',
					},
					style : {
						backgroundColor : 'white',
						marginTop : 0,
					}
				}}>
				<Tab.Screen name = "홈" component = {FirstScreen} />
				<Tab.Screen name = "베스트" component = {SecondScreen} />
				<Tab.Screen name = "대학교" component = {ThirdScreen} />
				<Tab.Screen name = "마이페이지" component = {FourthScreen} />
			</Tab.Navigator>
		);
	}
}

class UnivClickScreen extends Component {
    render() {
        return (
            <View style = {{flex : 1, backgroundColor : 'white'}}>
                <ScrollView>
					<View style = {{flexDirection : 'row', justifyContent : 'space-between',
							marginLeft : 15, marginRight : 15, marginTop : 15.63}}>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_1.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								써모스 연세텀블러(500ml)
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								33,000원
							</Text>
						</View>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_2.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								매직머그컵
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								10,000원
							</Text>
						</View>
					</View>
					<View style = {{flexDirection : 'row', justifyContent : 'space-between',
							marginLeft : 15, marginRight : 15, marginTop : 33}}>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_3.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								연세 로마자 손목시계
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								34,000원
							</Text>
						</View>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_1.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								연세 야광듀얼타임시계
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								40,000원
							</Text>
						</View>
					</View>
					<View style = {{flexDirection : 'row', justifyContent : 'space-between',
							marginLeft : 15, marginRight : 15, marginTop : 33, marginBottom : 33}}>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_2.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								써모스 연세텀블러(500ml)
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								33,000원
							</Text>
						</View>
						<View>
							<View style = {{width : 165, height : 121}}>
								<Image source = {require('./src/assets_ShoppingScreen/product_3.jpg')}
									style = {{width : '100%', height : '100%', 
											borderRadius: 150 / 30,
											overflow: "hidden",
											borderWidth: 1,
											borderColor: "white"}} />
							</View>
							<Text style = {{fontSize : 13, marginTop : 20, marginLeft : 5}}>
								매직머그컵
							</Text>
							<Text style = {{fontSize : 11, marginTop : 3, marginLeft : 5}}>
								10,000원
							</Text>
						</View>
					</View>
				</ScrollView>
            </View>
        );
    }
}

class UnivClick extends Component {
	render() {
		const {navigation} = this.props;
		const Tab = createMaterialTopTabNavigator();
		
		return (
			<Tab.Navigator
				initialRouteName = '생활용품'
				tabBarOptions = {{
					activeTintColor : '#069BE5',
					inactiveTintColor : '#666666',
					allowFontScaling : false,
					labelStyle : {
						fontSize : 14,
						marginBottom : 0,
					},
					tabStyle : {
						height : 45,
					},
					indicatorStyle : {
						width : tabBarWidth / 4 - 35,
							marginLeft : 8.5,
							marginRight : 27.5,
							height : 3.65,
							backgroundColor : '#069BE5',
						},
						style : {
							backgroundColor : 'white',
							marginTop : 0,
						}
					}
				}>
				<Tab.Screen name = "패션잡화" component = {EmptyScreen} />
				<Tab.Screen name = "생활용품" component = {UnivClickScreen} />
				<Tab.Screen name = "기념소품" component = {EmptyScreen} />
				<Tab.Screen name = "문구잡화" component = {EmptyScreen} />
				<Tab.Screen name = " 2020" component = {EmptyScreen} />
			</Tab.Navigator>
		);
	}
}

export default class ShoppingScreen extends Component {
	render() {
		const {navigation} = this.props;
		const Stack = createStackNavigator();
		
		return (
			<Stack.Navigator>
				<Stack.Screen 
					name = "메인탭" 
					component = {ShoppingScreen_Main}
					options = {{
						title: '기념품샵',
						headerStyle: {
							backgroundColor: 'white',
							height : 100,
							shadowRadius: 0,
							shadowOffset: {
								height: 0,
							},
						},
						headerTintColor: '#000000',
						headerTitleAlign : 'left',
						headerTitleStyle: {
							marginTop : 30,
							marginLeft : 10,
							fontSize : 24,
							fontWeight: 'bold',
						}, 
					}}
					/>
				<Stack.Screen 
					name = "탭_대학교_클릭" 
					component = {UnivClick} 
					// options = {{
					// 	headerShown : false
					// }}
					options = {{
						title: '연세대학교',
						headerStyle: {
							backgroundColor: 'white',
							height : 102.5,
							shadowRadius: 0,
							shadowOffset: {
								height: 0,
							},
						},
						headerBackTitle : ' ',
						headerTintColor: '#069BE5',
						headerTitleAlign : 'center',
						headerTitleStyle: {
							color : 'black',
							fontSize : 17,
							fontWeight: 'bold',
						}, 
					}}
					/>
			</Stack.Navigator>
		);
	}
}

const styles_shopping = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'space-between',
        backgroundColor : '#FFFFFF',
    },

    product_list : {
        marginTop : 14,
        flexDirection : 'row',
        marginBottom : 14,
    },

    product_listitem : {
        width : 135,
        flexDirection : 'column',
    },
    
    product_listitem_img : {
        width : 135,
        height : 135,
    },

    product_listitem_text : {
        marginTop : 9.46,
        justifyContent : 'center',
        fontSize : 15,
    },

    product_listitem_subtext : {
        marginTop : 2.1,
        justifyContent : 'center',
        fontSize : 9, 
        color : '#666666',
    },

});