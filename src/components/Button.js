import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import theme from '../theme';

export const Button = ({onPress, name, iconName, style = styles.mainContainer}) => {
  const onPressHandler = () => {
    onPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <TouchableOpacity
      style={{...styles.mainContainer, ...style}}
      activeOpacity={theme.ACTIVE_OPACITY}
      onPress={onPressHandler}
    >
      <View style={styles.btnCont}>
        <Text style={styles.header}>{name}</Text>
        { iconName ?  <Ionicons name={iconName} size={30} color="white" /> :
        <Ionicons
          name="ios-arrow-forward"
          color="rgba(255, 255, 255, .25)"
          size={26}
        />
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60
  },
  btnCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: theme.CONTAINER_FONT_FAMILY,
    color: "#fff",
  },
  mainWrapper: {
    width: "100%",
    // backgroundColor: "red",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  time: {
    fontFamily: "norms-regular",
    color: "rgba(255, 255, 255, .5)",
  },
  icon: {
    fontSize: 22
  }
});