import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, Modal, Alert } from 'react-native';

import * as Haptics from "expo-haptics";
import { Picker } from '@react-native-picker/picker';

import { Button } from '../components/Button'
import theme from '../theme'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// В будущем можно сделать так:
// Выбрать пикер с датой или числами
// Если числа - сделать ренж к примеру от N до N
// Если дата - использовать DatePicker

export const ModalPicker = ({ 
  isPickerVisible, 
  onConfirm, 
  onCancel, 
  date, 
  value, 
  setValue 
}) => {
  const [nums, setNums] = useState([]);

  const loadWaterGoalValues = () => {
    let n = [];
    const maxNum = 5000/50;

    for (let i = 1; i <= maxNum; i++) {
      n.push(
        <Picker.Item key={i} label={`${50*i}`} value={50*i} />
      )
    };

    setNums(n);
  };
  
  useEffect(() => {
    loadWaterGoalValues();
  }, [])

  const customConfirmButton = (btn) => (
    <TouchableOpacity
      activeOpacity={theme.ACTIVE_OPACITY}
      onPress={() => {
        btn.onPress();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      style={styles.btnContainer}
    >
      <Text style={styles.btnText}>{btn.label}</Text>
    </TouchableOpacity>
  );

  const customPicker = () => (
    <View styke={styles.pickerContainer}>
      <Picker
        itemStyle={{
          color: "#fff",
        }}
        enabled
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) =>
          setValue(itemValue)
        }
      >
      {nums}
      </Picker>
    </View>
  );

  return (
    <DateTimePickerModal
      isVisible={isPickerVisible}
      mode="time"
      date={date}
      isDarkModeEnabled
      headerTextIOS={"Цель на день"}
      cancelTextIOS={"Отменить"}
      confirmTextIOS={"Подтвердить"}
      minuteInterval={5}
      customConfirmButtonIOS={(btn) => {
        return (
          <TouchableOpacity
            activeOpacity={theme.ACTIVE_OPACITY}
            onPress={() => {
              btn.onPress();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            style={styles.btnContainer}
          >
            <Text style={styles.btnText}>{btn.label}</Text>
          </TouchableOpacity>
        );
      }}
      customHeaderIOS={(btn) => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{btn.label}</Text>
          </View>
        );
      }}
      pickerContainerStyleIOS={{
        backgroundColor: "#191B1E",
      }}
      customCancelButtonIOS={() => <View></View>}
      customPickerIOS={customPicker}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  pickerBgc: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .75)',
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  headerText: {
    color: theme.SECONDARY_COLOR,
    fontFamily: "norms-medium",
    fontSize: 18,
  },
  btnContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "norms-medium",
    fontSize: 18,
  },
});