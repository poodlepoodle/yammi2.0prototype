import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OtpInputs from "react-native-otp-inputs";

import { 
    Text, 
    Image,
    View, 
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    TextInput,
} from 'react-native';

import HomeScreen from './HomeScreen';
import JumoonScreen from './JumoonScreen';
import WalletScreen from './WalletScreen';
import ShoppingScreen from './ShoppingScreen';

import { 
    Ionicons, 
    Feather,
    FontAwesome,
    SimpleLineIcons,
    MaterialCommunityIcons, 
} from '@expo/vector-icons';

import { Button, Input } from 'react-native-elements';

class IntroScreen extends Component {
    render () {
        const {navigation} = this.props;

        return (
            <SafeAreaView style = {{flex : 1, justifyContent : 'space-between'}}>
                <View>
                    <Text style = {{fontSize : 24, fontWeight : 'bold', 
                        marginTop : 52, marginLeft : 20, marginBottom : 19}}>
                        원활한 이용을 위해{"\n"}꼭 필요한 권한을 허용해주세요.
                    </Text>
                    <View style = {{flexDirection : 'row', height : 73}}>
                        <View style = {{width : 16, height : 19.5, 
                                marginLeft : 26.5, marginTop : 26.5, marginRight : 19}}>
                            <Image source = {require("./src/assets_IntroScreen/alert.png")}
                                style = {{width : "100%", height : '100%'}} />
                        </View>
                        <View>
                            <Text style = {{fontSize : 14, marginTop : 16}}>알림</Text>
                            <Text style = {{fontSize : 12, color : "#666666", marginTop : 9}}>
                                조리 완료, 미수령 알림을 보내드리기 때문에{"\n"}접근 권한을 필수로 설정하셔야 해요
                            </Text>
                        </View>
                    </View>
                    <View style = {{flexDirection : 'row', height : 73}}>
                        <View style = {{width : 16, height : 19.5, 
                                marginLeft : 26.5, marginTop : 26.5, marginRight : 19}}>
                            <Image source = {require("./src/assets_IntroScreen/phonebook.png")}
                                style = {{width : "100%", height : '100%'}} />
                        </View>
                        <View>
                            <Text style = {{fontSize : 14, marginTop : 16}}>주소록</Text>
                            <Text style = {{fontSize : 12, color : "#666666", marginTop : 9}}>
                                주소록에 저장된 친구에게 간편히 송금 할 수 있어요
                            </Text>
                        </View>
                    </View>
                    <View style = {{flexDirection : 'row', height : 73}}>
                        <View style = {{width : 16, height : 19.5, 
                                marginLeft : 26.5, marginTop : 26.5, marginRight : 19}}>
                            <Image source = {require("./src/assets_IntroScreen/gps.png")}
                                style = {{width : "100%", height : '100%'}} />
                        </View>
                        <View>
                            <Text style = {{fontSize : 14, marginTop : 16}}>위치</Text>
                            <Text style = {{fontSize : 12, color : "#666666", marginTop : 9}}>
                                가까운 식당을 우선적으로 보여드려요
                            </Text>
                        </View>
                    </View>
                </View>
                <Button title = "허용하기" type = "solid" 
                        buttonStyle = {{
                            height : 50,
                            marginLeft : 24,
                            marginRight : 24,
                            marginBottom : 16,
                            backgroundColor : '#069BE5',
                    
                            borderRadius : 4,
                            borderColor : '#069BE5',
                        }}
                        titleStyle = {{
                            fontSize : 17,
                            fontWeight : 'bold',

                        }}
                        onPress = {() => navigation.navigate('전화번호입력')} />
            </SafeAreaView>
        );
    }
}

class PhoneNumberScreen extends Component {
    render () {
        const {navigation} = this.props;

        return (
            <SafeAreaView style = {{flex : 1, justifyContent : 'space-between'}}>
                <View>
                    <View style = {{width : 180, height : 77, marginTop : 54, alignSelf : 'center'}}>
                        <Image source = {require('./src/assets_PhoneNumberScreen/yammi_logo.png')}
                            style = {{width : '100%', height : '100%'}} />
                    </View>
                    <View style = {{flexDirection : 'row'}}>
                        <View style = {{width : 89.73, height : 177.27, 
                                marginTop : 118.85, marginLeft : 87.99}}>
                            <Image source = {require('./src/assets_PhoneNumberScreen/people_1.png')}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                        <View style = {{width : 101.01, height : 161.02, 
                                marginTop : 131.36, marginLeft : 10.52}}>
                            <Image source = {require('./src/assets_PhoneNumberScreen/people_2.png')}
                                style = {{width : '100%', height : '100%'}} />
                        </View>
                    </View>
                </View>
                <View>
                    <Input
                        onTouchStart = {() => navigation.navigate('전화번호입력_다음')}
                        placeholder='010-XXXX-XXXX'
                        label = '전화번호로 간편하게 시작해요!'
                        labelStyle = {{marginTop : 36.88, fontSize : 15, marginBottom : 10,
                            fontWeight : '200', marginLeft : 15, color : 'black'}}
                        inputStyle = {{fontSize : 28}}
                        containerStyle = {{borderColor : '#069BE5', marginBottom : 35}}
                        leftIcon={
                            <FontAwesome 
                                name = 'phone' size = {24} color = 'black' />
                        }
                        leftIconContainerStyle = {{marginLeft : 12, marginRight : 12}}
                        />
                    <View style = {{height : 1, backgroundColor : '#DDDDDD', 
                        marginBottom : 15}}></View>
                    <View>
                        <View style = {{flexDirection : 'row', justifyContent : 'center', 
                            marginBottom : 25}}>
                            <Text style = {{color : '#666666', fontSize : 12}}>
                                Don’t worry!
                            </Text>
                            <View style = {{width : 5}}></View>
                            <Text style = {{color : '#009AE5', fontSize : 12, 
                                textDecorationLine: "underline",
                                textDecorationStyle: "solid",
                                textDecorationColor: "#009AE5"}}>
                                We support a English version.
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

class PhoneNumberScreen_NextFirst extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            button_color : '#00000014',
            button_font_color : "#0000004D",
            button_text : '다음',
            text : '',
        };
    }

    render () {
        const {navigation} = this.props;
        const button_color_change = () => {
            if (this.state.text == '010-6208-821') { // trick
                this.state.button_text = '돌아오셨네요! 로그인하기';
            } else if (this.state.text != '') {
                this.state.button_text = '다음';
                this.state.button_color = '#069BE5';
                this.state.button_font_color = 'white';
            } else {
                this.state.button_text = '다음';
                this.state.button_color = '#00000014';
                this.state.button_font_color = '#0000004D';
            }
        };

        return (
            <SafeAreaView style = {{flex : 1, backgroundColor : 'white'}}>
                <View style = {{flexDirection : 'row'}}>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                </View>
                <Text style = {{marginTop : 50, fontSize : 24, fontWeight : 'bold', 
                        marginLeft : 24, marginBottom : 48}}>
                    전화번호로 간편하게 시작해요.
                </Text>
                <View>
                    <Input
                        onChangeText = {(text) => {this.setState({text}), button_color_change()}}
                        placeholder='010-XXXX-XXXX'
                        inputStyle = {{fontSize : 28}}
                        containerStyle = {{borderColor : '#069BE5'}}
                        leftIcon={
                            <FontAwesome 
                                name = 'phone' size = {24} color = 'black' />
                        }
                        value = {this.state.text}
                        leftIconContainerStyle = {{marginLeft : 12, marginRight : 12}}
                        />
                    <Text style = {{color : '#00000099', fontSize : 12, 
                        marginLeft : 20,
                        marginTop : 12,
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#00000099"}}>
                        로그인 / 가입을 도와드릴까요?
                    </Text>
                </View>
                <Button title = {this.state.button_text} type = "solid" 
                        buttonStyle = {{
                            height : 50,
                            marginLeft : 24,
                            marginRight : 24,
                            marginTop : 24,
                            backgroundColor : this.state.button_color,
                    
                            borderRadius : 4,
                        }}
                        titleStyle = {{
                            fontSize : 17,
                            fontWeight : 'bold',
                            color : this.state.button_font_color,

                        }}
                        onPress = {() => navigation.navigate("전화번호입력_다음두번째")}
                        />
            </SafeAreaView>
        );
    }
}


class PhoneNumberScreen_NextSecond extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            buttoncolor : 'white',
            text : '',
        };
    }

    render () {
        const {navigation} = this.props;
        const button_color_change_2 = () => {
            if ((this.state.text).toString().length >= 5) {
                this.state.buttoncolor = '#0000004D';
            } else {
                this.state.buttoncolor = 'white';
            }
        };

        return (
            <SafeAreaView style = {{flex : 1, backgroundColor : 'white'}}>
                <View style = {{flexDirection : 'row'}}>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                </View>
                <Text style = {{marginTop : 50, fontSize : 24, fontWeight : 'bold', 
                        marginLeft : 24}}>
                    6자리 인증번호를 입력해주세요.
                </Text>
                <View style = {{marginTop : 8, flexDirection : 'row', marginLeft : 24}}>
                    <Text style = {{fontSize : 13, fontWeight : 'bold'}}>
                        010-6208-8214
                    </Text>
                    <Text style = {{fontSize : 13, fontWeight : '200', marginLeft : 1}}>
                        번으로 인증번호를 전송했어요.
                    </Text>
                </View>
                <Text style = {{fontSize : 13, fontWeight : '200', marginLeft : 24, 
                        marginTop : 2, marginBottom : 24}}>
                    수신된 인증번호를 입력하세요.
                </Text>
                <View>
                    <Input
                        keyboardType = 'number-pad'
                        onChangeText = {(text) => {this.setState({text}), button_color_change_2()}}
                        placeholder='6자리 인증번호'
                        inputStyle = {{fontSize : 28}}
                        containerStyle = {{borderColor : '#069BE5', width : 345,
                            alignSelf : 'center'}}
                        value = {this.state.text}
                        />
                    <Text style = {{color : '#00000099', fontSize : 12, 
                        marginLeft : 24,
                        marginTop : 12,
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#00000099"}}>
                        인증번호 재전송
                    </Text>
                </View>
                <Button title = '인증이 완료되었습니다.' type = "solid" 
                        buttonStyle = {{
                            height : 50,
                            marginLeft : 24,
                            marginRight : 24,
                            marginTop : 63,
                            backgroundColor : this.state.buttoncolor,
                    
                            borderRadius : 25,
                        }}
                        titleStyle = {{
                            color : 'white',
                            fontSize : 17,
                        }}
                        onPress = {() => navigation.navigate("전화번호입력_다음세번째")}
                        />
            </SafeAreaView>
        );
    }
}


class PhoneNumberScreen_NextThird extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            button_color : '#00000014',
            button_font_color : "#0000004D",
            text : '',
        };
    }

    render () {
        const {navigation} = this.props;
        const button_color_change = () => {
            if (this.state.text != '') {
                this.state.button_color = '#069BE5';
                this.state.button_font_color = 'white';
            } else {
                this.state.button_color = '#00000014';
                this.state.button_font_color = '#0000004D';
            }
        };

        return (
            <SafeAreaView style = {{flex : 1, backgroundColor : 'white'}}>
                <View style = {{flexDirection : 'row'}}>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE5'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                    <View style = {{flex : 1, height : 2, backgroundColor : '#069BE514'}}>
                    </View>
                </View>
                <Text style = {{marginTop : 50, fontSize : 24, fontWeight : 'bold', 
                        marginLeft : 24, marginBottom : 48}}>
                    실명을 입력해주세요.
                </Text>
                <View>
                    <Input
                        onChangeText = {(text) => {this.setState({text}), button_color_change()}}
                        placeholder='주민등록상 한글이름'
                        inputStyle = {{fontSize : 28}}
                        containerStyle = {{borderColor : '#069BE5'}}
                        leftIcon={
                            <FontAwesome 
                                name = 'phone' size = {24} color = 'black' />
                        }
                        value = {this.state.text}
                        leftIconContainerStyle = {{marginLeft : 12, marginRight : 12}}
                        />
                    <Text style = {{color : '#00000099', fontSize : 12, 
                        marginLeft : 20,
                        marginTop : 12,
                        textDecorationLine: "underline",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#00000099"}}>
                        추천인 등록하기
                    </Text>
                </View>
                <Button title = '다음' type = "solid" 
                        buttonStyle = {{
                            height : 50,
                            marginLeft : 24,
                            marginRight : 24,
                            marginTop : 24,
                            backgroundColor : this.state.button_color,
                    
                            borderRadius : 4,
                        }}
                        titleStyle = {{
                            fontSize : 17,
                            fontWeight : 'bold',
                            color : this.state.button_font_color,
                        }}
                        onPress = {() => navigation.navigate("전화번호입력_다음네번째")}
                        />
            </SafeAreaView>
        );
    }
}


class PhoneNumberScreen_NextFourth extends Component {
    render () {
        const {navigation} = this.props;

        return (
            <View style = {{flex : 1, backgroundColor : '#304050'}}>
                <StatusBar barStyle = "light-content" />
                <Text style = {{marginTop : 50, fontSize : 16, color : 'white', 
                    alignSelf : 'center'}}>
                    돌아오신 걸 환영해요!
                </Text>
                <Text style = {{marginTop : 3, fontSize : 16, color : 'white', 
                    alignSelf : 'center'}}>
                    비밀번호를 입력해주세요.
                </Text>
                <View style = {{flexDirection : 'row', justifyContent : 'center', 
                        marginTop : 69.5, marginBottom : 86}}>
                    <View style = {{width : 17, height : 17, backgroundColor : 'white',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5}}></View>
                    <View style = {{width : 17, height : 17, backgroundColor : 'white',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5}}></View>
                    <View style = {{width : 17, height : 17, backgroundColor : '#00000000',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5, 
                        borderWidth : 1, borderColor : 'white'}}></View>
                    <View style = {{width : 17, height : 17, backgroundColor : '#00000000',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5, 
                        borderWidth : 1, borderColor : 'white'}}></View>
                    <View style = {{width : 17, height : 17, backgroundColor : '#00000000',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5, 
                        borderWidth : 1, borderColor : 'white'}}></View>
                    <View style = {{width : 17, height : 17, backgroundColor : '#00000000',
                        borderRadius : 25, marginLeft : 5.5, marginRight : 5.5, 
                        borderWidth : 1, borderColor : 'white'}}></View>
                </View>
                <View style = {{flexDirection : 'row', justifyContent : 'center'}}>
                    <View style = {{width : 20, height : 20, backgroundColor : '#069BE5',
                        borderRadius : 25, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style = {{color : 'white', fontSize : 15}}>✓</Text>
                    </View>
                    <View style = {{width : 7}}></View>
                    <TouchableOpacity onPress = {() => navigation.navigate('전화번호입력_반갑')}>
                        <Text style = {{color : 'white', fontSize : 16}}>
                            Face ID 사용하기 설정
                        </Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    autoFocus={true}
                />
            </View>
        );
    }
}


class PhoneNumberScreen_Greeting extends Component {
    render () {
        const {navigation} = this.props;

        return (
            <View style = {{flex : 1, backgroundColor : 'white', justifyContent : 'space-between'}}>
                <View>
                    <View style = {{width : 311.23, height : 217.23, alignSelf : 'center', 
                            marginTop : 150.34}}>
                        <Image source = {require('./src/assets_PhoneNumberScreen/greet.png')}
                            style = {{width : '100%', height : '100%'}} />
                    </View>
                    <Text style = {{marginTop : 19.42, fontSize : 35, fontWeight : '500', 
                        color : '#069BE5', alignSelf : 'center'}}>
                        윤정탁님, 반가워요
                    </Text>
                    <Text style = {{marginTop : 8, fontSize : 15, fontWeight : '500', 
                        color : '#0000004D', alignSelf : 'center'}}>
                        회원가입을 진심으로 축하드려요{'\n'}개인정보는 야미가 안전하게 보관할게요.
                    </Text>
                </View>
                <Button title = '식사하러 가볼까요?' type = "solid" 
                        buttonStyle = {{
                            height : 50,
                            marginLeft : 24,
                            marginRight : 24,
                            marginTop : 24,
                            marginBottom : 16,
                            backgroundColor : '#069BE5',
                    
                            borderRadius : 4,
                        }}
                        titleStyle = {{
                            fontSize : 17,
                            fontWeight : 'bold',
                            color : 'white',

                        }}
                        onPress = {() => navigation.navigate("메인")} />
            </View>
        );
    }
}


class MainScreen extends Component {
    render () {
        const TabBar = createBottomTabNavigator();

        return (
            <TabBar.Navigator
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === '홈') {
                            return <Feather 
                                name = 'home' size = {22} color = {color} />;
                        } else if (route.name === '주문내역') {
                            return <Ionicons 
                                name = 'ios-list' size = {22} color = {color} />;
                        } else if (route.name === '내 지갑') {
                            return <SimpleLineIcons 
                                name = 'wallet' size = {21} color = {color} />;
                        } else if (route.name === '쇼핑') {
                            return <SimpleLineIcons 
                                name = 'handbag' size = {22} color = {color} />;
                        }
                },
                })}
                tabBarOptions={{
                    activeTintColor: '#0098EB',
                    inactiveTintColor: '#999999',
                }}>
                
                <TabBar.Screen name = "홈" component = {HomeScreen} />
                <TabBar.Screen name = "주문내역" component = {JumoonScreen} />
                <TabBar.Screen name = "내 지갑" component = {WalletScreen} />
                <TabBar.Screen name = "쇼핑" component = {ShoppingScreen} />
            </TabBar.Navigator>
        );
    }
}

export default class App extends Component {
	render() {
		const {navigation} = this.props;
		const Stack = createStackNavigator();
		
		return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName = "인트로">
                    <Stack.Screen 
                        name = "인트로" 
                        component = {IntroScreen}
                        options = {{
                            headerShown : false
                        }}
                        />
                    <Stack.Screen 
                        name = "전화번호입력" 
                        component = {PhoneNumberScreen} 
                        options = {{
                        	headerShown : false
                        }}
                        />
                    <Stack.Screen 
                        name = "전화번호입력_다음" 
                        component = {PhoneNumberScreen_NextFirst} 
                        options = {{
                        	headerShown : false
                        }}
                        />
                    <Stack.Screen 
                        name = "전화번호입력_다음두번째" 
                        component = {PhoneNumberScreen_NextSecond}
                        options = {{
                            title: ' ',
                            headerStyle: {
                                backgroundColor: 'white',
                                height : 50,
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
                    <Stack.Screen 
                        name = "전화번호입력_다음세번째" 
                        component = {PhoneNumberScreen_NextThird}
                        options = {{
                            title: ' ',
                            headerStyle: {
                                backgroundColor: 'white',
                                height : 50,
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
                    <Stack.Screen 
                        name = "전화번호입력_다음네번째" 
                        component = {PhoneNumberScreen_NextFourth}
                        options = {{
                            title: ' ',
                            headerStyle: {
                                backgroundColor: '#304050',
                                height : 50,
                                shadowRadius: 0,
                                shadowOffset: {
                                    height: 0,
                                },
                            },
                            headerBackTitle : ' ',
                            headerTintColor: 'white',
                            headerTitleAlign : 'center',
                            headerTitleStyle: {
                                color : 'white',
                                fontSize : 17,
                                fontWeight: 'bold',
                            }, 
                        }}
                        />
                    <Stack.Screen 
                        name = "전화번호입력_반갑" 
                        component = {PhoneNumberScreen_Greeting}
                        options = {{
                            headerShown : false
                        }}
                        />
                    <Stack.Screen 
                        name = "메인" 
                        component = {MainScreen} 
                        options = {{
                        	headerShown : false
                        }}
                        />
                </Stack.Navigator>
            </NavigationContainer>
		);
	}
}
