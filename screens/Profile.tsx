import React, { FunctionComponent, useState, useRef } from "react";
import { StatusBar, Modal, TouchableOpacity, FlatList, View, Text, Image, TextInput, ScrollView, StyleSheet,Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../components/colors";
import background2 from "./../assets/bgs/bg2.png";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";

const windowWidth = Dimensions.get("window").width-40;

const ProfileContainer = styled.ImageBackground`
  background-color: ${colors.secondary};
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.View`
  background-color: rgba(14, 83, 80, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ScrollableContent = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

const cardsData = [
  {
    title: "Несколько слов о системе замеров",
    text1: "1. Делайте замеры ежедневно 3 р/д",
    text2: "В течении недели, это даст объективное понимание — в какой период времени вашему организму нужен отдых или мобилизация сил,а когда наоборот, ввод в состояние боевой готовности."
  },
  {
    title: "Несколько слов о системе замеров",
    text1: "2. Для чего важны замеры?",
    text2: "Данная диагностика сделана на базе ВСР — вариабельность сердечного ритма разработаная советскими учеными. Она помогала отслеживать состояние стресса и энергии у космонавтов во время нахождения в космосе.\n\nЧтобы определить баланс расхода и восстановления вашей энергии и нервной системы — необходимы данные замеров ВСР, как минимум 3 раза в день. Показатели ВСР индивидуальны, и анализ данных позволяет четко определить ваши индивидуальные нормы."
  },
  {
    title: "Несколько слов о системе замеров",
    text1: "3. Как делать замеры?",
    text2: "Важно!Замеры должны проводиться всегда:\n· в одной позе и не двигаясь,\n· без внешних шумов и раздражителей.\nЛюбая другая поза/движение или обстановка во время диагностики — будут вызывать другие усилия на сердце для обеспечения циркуляции крови по организму. А также могут вносить помехи во время прохождения замера."
  },
];

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(150, 202, 200, 0.69);
`;

const CardContainer = styled.View`
  height: 500px;
  margin: 20px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  marginTop: 100px;
  justify-content: flex-start;

`;


const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 30;
`;

const CardBody = styled.View`
  margin-top: 11px;
`;

const CardButton = styled.View`
  padding: 10px 20px;
  background-color: ${colors.primary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;


const Profile: FunctionComponent = () => {
  const flatListRef = useRef(null);

  const margins: number[] = [0,40,80];


  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);


  const userProfile = {
    name: "Михаил",
    profilePicture: require("../man.jpeg"),
    birthDate: "24.04.2004",
    gender: "M",
    weight: "95",
    height: "175",
    pressure: "120/90",
  };

     const showModal = () => {
    setModalVisible(true);
  };

  const ModalContent = () => {
    const onCardButtonPress = () => {
      if (activeCardIndex < cardsData.length - 1) {
        setActiveCardIndex((prevIndex) => prevIndex + 1);
      } 
      else {
        setModalVisible(false);
      }
    };

    const onCloseModal = () => {
      setModalVisible(false);
      setActiveCardIndex(0);
    };

     const renderCircle = (circleColor) => (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: circleColor,
            marginHorizontal: 5,
            
          }}
        />
      );


     const renderItem = ({ item, index }) => (
       <View>
        <CardContainer style={{ alignSelf: "center", width: windowWidth }}>
          <TouchableOpacity onPress={onCloseModal} style={{justifyContent: "flex-end", alignItems: "flex-end"}}>
              <MaterialCommunityIcons name="close" size={24} color="#000000" />
          </TouchableOpacity>

          <BigText textStyles={{color: "#000000", fontSize: "24px", textAlign: "left"}}>{item.title}</BigText>
          <CardBody>
            <RegularText textStyles={{color: "rgba(109, 147, 149, 1)", fontSize: "16px", textAlign: "left"}}>{item.text1}</RegularText>
            <RegularText textStyles={{color: "#000000", fontSize: "16px", textAlign: "left", paddingVertical: "25px"}}>{item.text2}</RegularText>
          </CardBody>
          <View style={{justifyContent: "flex-end",alignItems: "center", height: "20px"}}></View>
          
        </CardContainer>
        <View style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cardsData.map((_, i) => renderCircle(i === index ? "rgba(101, 136, 138, 1)" : "rgba(255,255,255, 0.6)"))}
          </View>
          </View>
      );



   

    const onMomentumScrollEnd = (event) => {
      const index = Math.floor(event.nativeEvent.contentOffset.x / windowWidth);
      setActiveCardIndex(index);
      const offset = index * windowWidth+margins[index];
      flatListRef.current.scrollToOffset({ offset, animated: true });
    };


    return (
      <ModalContainer>
        <FlatList
          ref={flatListRef}
          data={cardsData}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index + margins[index],
            index,
          })}
          initialScrollIndex={activeCardIndex}
          onMomentumScrollEnd={onMomentumScrollEnd}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {cardsData.map((_, index) => renderCircle(index))}
        </View>
      </ModalContainer>

    );
  };


return (
    <>
      <StatusBar style="light" />
      <ProfileContainer source={background2}>
        <Overlay />

        <ScrollableContent>

          {/*user info*/}
          <View style={styles.profileInfoContainer}>
            <Image source={userProfile.profilePicture} style={styles.profilePicture} />
            <RegularText textStyles={styles.userName}>Личный кабинет</RegularText>
            <View style={styles.userInfo}> 
              <RegularText textStyles={styles.editButtonText}>Имя</RegularText>
              <TouchableOpacity onPress={() => {}} style={{ marginLeft: "75%" }}>
                <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.nameInput}
              value={userProfile.name}
              onChangeText={(text) => {}}
            />
          </View>

          <TouchableOpacity style={styles.reminderContainer} onPress={showModal}>
            <View style={styles.reminderIconContainer}>
              <MaterialCommunityIcons name="bell" size={20} color="#FFFFFF" />
            </View>
            <RegularText textStyles={styles.reminderText}>Напоминания замеров</RegularText>
            <TouchableOpacity style={{ marginLeft: "30%" }} onPress={showModal}>
              <MaterialCommunityIcons name="information-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </TouchableOpacity>

           {/*time*/}
          <View style={styles.grayBoxContainer}>
            <View style={styles.grayBoxLine}>
              <RegularText textStyles={styles.grayBoxText}>Утро</RegularText>
              <View style={styles.timeContainer}>
                <RegularText textStyles={styles.timeText}>10:30 </RegularText>
                <TouchableOpacity style={styles.editIconContainer}>
                  <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.grayBoxLine}>
              <RegularText textStyles={styles.grayBoxText}>День</RegularText>
              <View style={styles.timeContainer}>
                <RegularText textStyles={styles.timeText}>13:30 </RegularText>
                <TouchableOpacity style={styles.editIconContainer}>
                  <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.grayBoxLine}>
              <RegularText textStyles={styles.grayBoxText}>Вечер</RegularText>
              <View style={styles.timeContainer}>
                <RegularText textStyles={styles.timeText}>20:00 </RegularText>
                <TouchableOpacity style={styles.editIconContainer}>
                  <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          {/*detailed user info*/}
          <View style={styles.personalDataContainer}>
            <View style={styles.userDetInfo}>
              <RegularText textStyles={styles.sectionTitle}>Личные данные</RegularText>
              <TouchableOpacity style={{marginLeft: "40%"}}>
                <MaterialCommunityIcons name="pencil" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.grayBoxContainer}>
              <View style={styles.personalDataRow}>
                <RegularText textStyles={styles.personalDataText}>Дата рождения</RegularText>
                <RegularText textStyles={styles.personalDataValue}>{userProfile.birthDate}</RegularText>
              </View>

              <View style={styles.personalDataRow}>
                <RegularText textStyles={styles.personalDataText}>Пол</RegularText>
                <RegularText textStyles={styles.personalDataValue}>{userProfile.gender}</RegularText>
              </View>

              <View style={styles.personalDataRow}>
                <RegularText textStyles={styles.personalDataText}>Вес</RegularText>
                <RegularText textStyles={styles.personalDataValue}>{userProfile.weight} кг</RegularText>
              </View>

              <View style={styles.personalDataRow}>
                <RegularText textStyles={styles.personalDataText}>Рост</RegularText>
                <RegularText textStyles={styles.personalDataValue}>{userProfile.height} см</RegularText>
              </View>

              <View style={styles.personalDataRow}>
                <RegularText textStyles={styles.personalDataText}>Давление</RegularText>
                <RegularText textStyles={styles.personalDataValue}>{userProfile.pressure} мм рт.ст.</RegularText>
              </View>
            </View>

          <View style={{marginTop: 20, height: 100, justifyContent: "flex-start", alignItems: "center"}}>
            <TouchableOpacity style={styles.exitButtonContainer} onPress={() => navigation.navigate("Login")}>
            <RegularText textStyles={styles.exitButtonText}> Выйти </RegularText>
            </TouchableOpacity>
          </View>
          
          </View>

        </ScrollableContent>
      </ProfileContainer>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <ModalContent />
      </Modal>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileInfoContainer: {
    flexDirection: "column",
    marginTop: 100,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: "auto",
    marginLeft: "auto",
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userDetInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  editButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginRight: 5,
    marginTop: 10,
  },
  nameInput: {
    flex: 1,
    height: 40,
    backgroundColor: "rgba(168, 168, 166, 0.3)",
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    color: "#FFFFFF",
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  reminderIconContainer: {
    marginRight: 10,
  },
  reminderText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  grayBoxContainer: {
    backgroundColor: "rgba(168, 168, 166, 0.3)",
    borderRadius: 15,
    marginTop: 20,
    padding: 10,
  },
  grayBoxLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  grayBoxText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 10,
  },
  editIconContainer: {
    padding: 5,
  },
  personalDataContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  personalDataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  personalDataText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  personalDataValue: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  exitButtonContainer: {
    marginTop: 20,
    backgroundColor: "transparent",
    borderRadius: 15,
    paddingVertical: 12,
  },
  exitButtonText: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
