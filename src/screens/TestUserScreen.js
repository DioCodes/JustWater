import React, { useLayoutEffect, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Switch } from "react-native";

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import SwitchSelector from "react-native-switch-selector";

import { useDispatch, useSelector } from 'react-redux';
import { setUserWeight, setUserWaterGoal, setUserGender } from '../store/actions/userActions';

import { ModalPicker } from '../components/ModalPicker';
import { Button } from '../components/Button'
import theme from '../theme';

export const TestUserScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Пользователь",
    });
  }, []);

  let userWeight = useSelector((state) => state.user.weight);
  let userGender = useSelector((state) => state.user.gender);
  let userWaterGoal = useSelector((state) => state.user.waterGoal);

  const [isVisible, setIsVisible] = useState(false);
  const [isWeightPickerVisible, setIsWeightPickerVisible] = useState(false);
  const [wG, setWG] = useState(1400);
  const [weight, setWeight] = useState(userWeight);
  const [isSwitchSelected, setIsSwitchSelected] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const itunesItemId = 982107779; // ID приложения в магазине
  const dispatch = useDispatch();

  const modes = [
    {
      customIcon: (
        <Ionicons
          name="ios-man"
          size={24}
          style={{
            height: 24,
            textAlign: "center",
          }}
          color={
            isSwitchSelected && userGender == "Man"
              ? "black"
              : !isSwitchSelected && userGender == "Man"
              ? "black"
              : "rgba(255, 255, 255, .5)"
          }
        />
      ),
      value: "Man",
    },
    {
      customIcon: (
        <Ionicons
          name="ios-woman"
          size={24}
          style={{
            height: 24,
            textAlign: "center",
          }}
          color={
            !isSwitchSelected && userGender == "Woman"
              ? "black"
              : isSwitchSelected && userGender == "Woman"
              ? "black"
              : "rgba(255, 255, 255, .5)"
          }
        />
      ),
      value: "Woman",
    },
  ];

  const onWaterCancel = () => {
    setIsVisible(false);
  };

  const onWeightCancel = () => {
    setIsWeightPickerVisible(false);
  };
  
  const onWaterConfirm = () => {
    onWaterCancel()
    dispatch(setUserWaterGoal(wG));
  };

  const onWeightConfirm = () => {
    onWeightCancel()
    dispatch(setUserWeight(weight));
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (isEnabled) {
      if (userGender == "Man") {
        dispatch(setUserWaterGoal(userWeight * 35));
      } else if (userGender == "Woman") {
        dispatch(setUserWaterGoal(userWeight * 31));
      }
    }
  }, [userGender, userWeight, isEnabled])

  return(
    <View style={styles.main}>
      <ScrollView style={{ paddingTop: 10 }}>
        <Button 
          name="Автоматический рассчёт" 
          opacityDisabled
          customIcon={
            <Switch
              trackColor={{ false: 'rgba(0, 255, 255, .25)', true: theme.SECONDARY_COLOR }}
              thumbColor={theme.PRIMARY_COLOR}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          }
          onPress={() => {

          }}
        />

        <Button 
          name="Вес" 
          textIcon={`${userWeight} кг`}
          onPress={() => {
            setIsWeightPickerVisible(true); 
          }}
        />

        <Button 
          name="Пол"
          opacityDisabled
          customIcon={
            <SwitchSelector
            options={modes}
            initial={0}
            onPress={(value) => {
              setIsSwitchSelected(isSwitchSelected ? false : true);
              dispatch(setUserGender(value));
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            borderRadius={13}
            buttonColor="#fff"
            textColor="rgba(255, 255, 255, .5)"
            selectedColor="#000"
            backgroundColor={theme.TERTIARY_COLOR}
            height={30}
            style={{
              width: "40%",
            }}
            animationDuration={250}
          />
          }
          onPress={() => {}}
        />

        <Button 
          name="Цель на день" 
          textIcon={`${userWaterGoal} мл`}
          onPress={() => {
            isEnabled ? null : setIsVisible(true); 
          }}
        />

        <ModalPicker 
          headerName="Вес"
          isPickerVisible={isWeightPickerVisible} 
          onConfirm={onWeightConfirm} 
          onCancel={onWeightCancel} 
          date={new Date()} 
          value={weight}
          setValue={setWeight}
          valuesFrom={20}
          valuesTo={200}
          perItem={false}
        />

        <ModalPicker 
          headerName="Цель на день"
          isPickerVisible={isVisible} 
          onConfirm={onWaterConfirm} 
          onCancel={onWaterCancel} 
          date={new Date()} 
          value={wG}
          setValue={setWG}
          valuesFrom={50}
          valuesTo={5000}
          perItem={true}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 20,
  }
})