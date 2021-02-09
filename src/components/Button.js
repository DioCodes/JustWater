import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import theme from '../theme';

export const Button = ({ 
  onPress, 
  name, 
  iconName, 
  textIcon,
  customIcon,
  style = styles.mainContainer, 
  center = false,
  opacityDisabled
}) => {
  const onPressHandler = () => {
    onPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <TouchableOpacity
      style={{...styles.mainContainer, ...style}}
      activeOpacity={opacityDisabled ? 1 : theme.ACTIVE_OPACITY}
      onPress={onPressHandler}
    >
      
      <View style={{
        ...styles.btnCont, 
        justifyContent: center ? "center" : "space-between"
      }}>
        <Text style={styles.header}>{name}</Text>
        {/* if (customIcon) {
          customIcon
        } else {
          <Text style={styles.header}>{name}</Text>
          { iconName ? <Ionicons name={iconName} size={30} color="white" /> : textIcon ? <Text style={styles.textIcon}>{textIcon}</Text> : null
          }
        } */}

        {
          customIcon ? customIcon : 
            ( iconName ? <Ionicons name={iconName} size={30} color="white" /> : textIcon ? <Text style={styles.textIcon}>{textIcon}</Text> : null )
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
    color: theme.SECONDARY_COLOR,
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: theme.CONTAINER_FONT_FAMILY,
  },
  mainWrapper: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  time: {
    fontFamily: "norms-regular",
    color: "rgba(255, 255, 255, .5)",
  },
  icon: {
    fontSize: 22
  },
  textIcon: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: 'norms-regular'
  }
});