import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import theme from '../theme';

export const Button = ({ onPress, name, iconName, textIcon, style = styles.mainContainer, center = false }) => {
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
      
      <View style={{
        ...styles.btnCont, 
        justifyContent: center ? "center" : "space-between"
      }}>
        <Text style={styles.header}>{name}</Text>
        { iconName ? <Ionicons name={iconName} size={30} color="white" /> : textIcon ? <Text style={styles.textIcon}>{textIcon}</Text> : null
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: theme.BTN_PRIMARY,
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
  },
  textIcon: {
    fontSize: 22,
    color: theme.SECONDARY_COLOR
  }
});