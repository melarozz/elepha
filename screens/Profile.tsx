import React, {useState, useRef, useEffect, FC} from "react";
import {
    StatusBar,
    Modal,
    TouchableOpacity,
    FlatList,
    View,

    Image,

    ScrollView,

    Dimensions,
    StyleProp, TextStyle, ViewStyle, ImageBackground
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styled from "styled-components/native";
import {useNavigation, useFocusEffect} from "@react-navigation/native";
import {colors} from "../components/colors";
import RegularText from "../components/Texts/RegularText";
import {CSSProp} from "styled-components";
import {loadUserDataUtil} from "./utils";
import HorizontalCard from "../components/Modals/Card";


const windowWidth = Dimensions.get("window").width - 40;

const totalStyles: CSSProp = {fontFamily: "TenorSans_400Regular"};
const rowStyle: CSSProp = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
};
const grayBoxLine: {
    alignItems: string;
    flexDirection: string;
    marginBottom: number;
    justifyContent: string
} = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
};
const grayBoxText: { fontFamily: string; color: string; fontSize: number; fontWeight: string } = {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "TenorSans_400Regular"
};
const personalDataText: { fontFamily: string; color: string; fontSize: number } = {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "TenorSans_400Regular"
};


const cardsData = [
    {
        title: "Несколько слов о системе замеров",
        text1: "1. Делайте замеры ежедневно 3 р/д",
        text2: "В течении недели, это даст объективное понимание — в какой период времени вашему организму нужен отдых или мобилизация сил,а когда наоборот, ввод в состояние боевой готовности."
    },
    {
        title: "Несколько слов о системе замеров",
        text1: "2. Для чего важны замеры?",
        text2: "Данная диагностика сделана на базе ВСР — вариабельность сердечного " +
            "ритма разработаная советскими учеными. Она помогала отслеживать состояние " +
            "стресса и энергии у космонавтов во время нахождения в космосе.\n\nЧтобы определить " +
            "баланс расхода и восстановления вашей энергии и нервной системы — необходимы данные " +
            "замеров ВСР, как минимум 3 раза в день. Показатели ВСР индивидуальны, и анализ данных " +
            "позволяет четко определить ваши индивидуальные нормы."
    },
    {
        title: "Несколько слов о системе замеров",
        text1: "3. Как делать замеры?",
        text2: "Важно!Замеры должны проводиться всегда:\n· в одной позе и не двигаясь,\n· " +
            "без внешних шумов и раздражителей.\nЛюбая другая поза/движение или обстановка " +
            "во время диагностики — будут вызывать другие усилия на сердце для обеспечения " +
            "циркуляции крови по организму. А также могут вносить помехи во время прохождения " +
            "замера."
    },
];


const Profile: FC = () => {
    const navigation = useNavigation<any>();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);


    const handleEditPress = () => {
        navigation.navigate('EditProfile');
    };

    {/*const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const cardWidth = windowWidth * 0.7; // Adjust this based on your card width
        const newActiveCardIndex = Math.floor(contentOffset / cardWidth);
        setActiveCardIndex(newActiveCardIndex);
    };

    const showModal = () => {
        setModalVisible(true);
    };
    const hideModal = () => {
        setModalVisible(false);
    };*/
    }


    const [pic, setPic] = useState<string>("https://images.unsplash.com/photo-1526045612212-70caf35c14df");
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [pulse, setPulse] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [push1, setPush1] = useState<string>('');
    const [push2, setPush2] = useState<string>('');
    const [push3, setPush3] = useState<string>('');

    useEffect(() => {
        void loadUserDataUtil(setPic, setName, setLastName, setPush1, setPush2, setPush3, setBirthDate, setGender, setCompany, setWeight, setHeight, setPulse);
    }, []);


    return (
        <>

            <ImageBackground source={require('../assets/bgs/bg2.png')}
                             style={{
                                 backgroundColor: colors.secondary,
                                 justifyContent: "flex-start",
                                 width: "100%",
                                 height: "100%"
                             }}>
                <View style={{
                    backgroundColor: 'rgba(14, 83, 80, 0.4)',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                </View>

                <ScrollView style={{
                    flex: 1,
                    padding: 20,
                }}>

                    {/*user info*/}
                    <View style={{
                        flexDirection: "column",
                        marginTop: 50,
                    }}
                    >
                        <View>
                            <Image
                                source={{uri: pic}}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 8,
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                            />
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 10,
                            width: "100%",
                        }}>
                            <RegularText textStyles={({
                                fontSize: 24,
                                color: "white",
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>Личный кабинет</RegularText>
                            <TouchableOpacity onPress={handleEditPress}>
                                <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <RegularText textStyles={({
                                fontSize: 18,
                                color: "#FFFFFF",
                                marginRight: 5,
                                marginTop: 10,
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>Имя</RegularText>
                        </View>

                        <View style={{
                            justifyContent: 'flex-start',
                            flex: 1,
                            alignItems: "flex-start",
                            backgroundColor: "rgba(168, 168, 166, 0.3)",
                            borderRadius: 15,
                            marginTop: 10,
                        }}>
                            <RegularText textStyles={({
                                fontSize: 18,
                                color: "#FFFFFF",
                                marginRight: 5,
                                marginLeft: 5,
                                textAlign: "left",
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>{name}</RegularText>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <RegularText textStyles={({
                                fontSize: 18,
                                color: "#FFFFFF",
                                marginRight: 5,
                                marginTop: 10,
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>Фамилия</RegularText>
                        </View>

                        <View style={{
                            justifyContent: 'flex-start',
                            flex: 1,
                            alignItems: "flex-start",
                            backgroundColor: "rgba(168, 168, 166, 0.3)",
                            borderRadius: 15,
                            marginTop: 10,
                        }}>
                            <RegularText textStyles={({
                                fontSize: 18,
                                color: "#FFFFFF",
                                marginRight: 5,
                                marginLeft: 5,
                                textAlign: "left",
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>{lastName}</RegularText>
                        </View>

                    </View>

                    {/*

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <MaterialCommunityIcons name="bell" size={20} color="#FFFFFF"/>
                            <RegularText textStyles={({
                                fontSize: 16,
                                color: "#FFFFFF",
                                ...totalStyles
                            } as unknown) as StyleProp<TextStyle>}>Напоминания замеров</RegularText>
                        </View>
                        <TouchableOpacity onPress={showModal}>
                            <MaterialCommunityIcons name="information-outline" size={20} color="#FFFFFF"/>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        backgroundColor: "rgba(168, 168, 166, 0.3)",
                        borderRadius: 15,
                        marginTop: 20,
                        padding: 10,
                    }}>
                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>Утро</RegularText>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>{push1} </RegularText>
                        </View>

                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>День</RegularText>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>{push2} </RegularText>
                        </View>

                        <View style={(grayBoxLine) as StyleProp<ViewStyle>}>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>Вечер</RegularText>
                            <RegularText textStyles={(grayBoxText) as StyleProp<ViewStyle>}>{push3} </RegularText>
                        </View>

                    </View>
                    */}

                    {/*detailed user info*/}
                    <View style={{marginTop: 20}}>
                        <RegularText textStyles={{
                            fontSize: 20,
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            fontFamily: "TenorSans_400Regular",
                        }}>Личные данные</RegularText>
                        <View style={{
                            backgroundColor: "rgba(168, 168, 166, 0.3)",
                            borderRadius: 15,
                            marginTop: 20,
                            padding: 10,
                        }}>
                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Дата
                                    рождения</RegularText>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>{birthDate}</RegularText>
                            </View>

                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Пол</RegularText>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>{gender === 'M' ? 'Мужской' : 'Женский'}</RegularText>
                            </View>

                            {/*<View style={(rowStyle) as StyleProp<ViewStyle>}>*/}
                            {/*    <RegularText*/}
                            {/*        textStyles={(personalDataText) as StyleProp<ViewStyle>}>Компания</RegularText>*/}
                            {/*    <RegularText*/}
                            {/*        textStyles={(personalDataText) as StyleProp<ViewStyle>}>{company}</RegularText>*/}
                            {/*</View>*/}

                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Вес</RegularText>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>{weight} кг</RegularText>
                            </View>

                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>Рост</RegularText>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>{height} см</RegularText>
                            </View>

                            <View style={(rowStyle) as StyleProp<ViewStyle>}>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>Средний пульс</RegularText>
                                <RegularText
                                    textStyles={(personalDataText) as StyleProp<ViewStyle>}>{pulse} уд/мин</RegularText>
                            </View>
                        </View>

                        <View style={{
                            marginTop: 20,

                            height: 100,
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "transparent",
                                    borderRadius: 15,
                                    paddingVertical: 12,
                                }}
                                onPress={() => navigation.navigate("Login")}>
                                <RegularText textStyles={{
                                    fontSize: 18,
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    fontFamily: "TenorSans_400Regular",
                                }}> Выйти </RegularText>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </ImageBackground>

            {/*
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={{
                    backgroundColor: "rgba(150, 202, 200, 0.69)",
                    height: "100%"
                }}>
                    <ScrollView
                        horizontal={true}
                        onScroll={handleScroll}
                        pagingEnabled={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        {cardsData.map((card, index) => (
                            <HorizontalCard
                                key={index}
                                title={card.title}
                                subtitle1={card.text1}
                                subtitle2={card.text2}
                                onClose = {hideModal}
                            />
                        ))}
                    </ScrollView>
                </View>
            </Modal>
            */}


        </>
    );
};

export default Profile;
