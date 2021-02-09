import React, { useState, useRef, useEffect } from 'react'
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { MainScreen } from '../screens/MainScreen'
import { UserScreen } from '../screens/UserScreen';
import theme from '../theme';

export const CustomSlideNavigation = ({ navigation }) => {
  const [active, setActive] = useState(0);

  const allScreens = useRef(null);
  // const mainScreenPosition = 414;
  const mainScreenPosition = 0;
  const countOfScreens = screens.length;

  let change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== active) {
      setActive(slide);
    }
  };

  useEffect(() => {
    allScreens.current.scrollTo({x:mainScreenPosition, animated: false})
    // setActive(1); // сделать активным второй экран
    return () => {
      // cleanup
    }
  }, [])

  return (
    <View style={styles.navigation}>
      <StatusBar barStyle="light-content" />
      <ScrollView 
        // style={{paddingBottom: 0}}
        ref={allScreens}
        horizontal 
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: `${100 * countOfScreens}%` }}
        onMomentumScrollEnd={change}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        {
          screens.map((screen, i) => (
          <View key={i} style={{flex: 1}}>
            {screen.screen}
          </View>
          ))
        }

      </ScrollView>

        <View style={styles.pagination}>
          {
            screens.map((screen, i) => (
            <View
              key={i}
              style={i == active ? styles.pagingActiveDot : styles.pagingDot}
            ></View>
            ))
          }
        </View>
    </View>
  )
}

const screens = [
  {
    key: "s1",
    screen: <MainScreen />
  },
  {
    key: "s2",
    screen: <UserScreen />
  },
  // {
  //   key: "s3",
  //   screen: <UserScreen />
  // },
]


const styles = StyleSheet.create({
  navigation: {
    flex: 1, 
    height: "100%",
    width: '100%',
    // backgroundColor: theme.PRIMARY_COLOR,
    backgroundColor: theme.FIFTERNARY_COLOR,
    position: 'absolute',
    bottom: 0
  },
  pagination: {
    position: 'absolute',
    bottom: Dimensions.get("window").height > 800 ? 20 : 15,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screens.length * 20,
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: theme.TERTIARY_COLOR,
  },
  pagingDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, .25)',
  },
  pagingActiveDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.SECONDARY_COLOR
  }
})
