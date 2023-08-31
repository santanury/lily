import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

// screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TAB_ARRAY = [
  {
    name: 'Home',
    component: Home,
    icon: icons.home,
    iconFilled: icons.homeFilled,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: icons.profile,
    iconFilled: icons.profileFilled,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    focused
      ? viewRef.current.animate({
          0: {scale: 1, rotate: '0deg'},
          1: {scale: 1.3, rotate: '720deg'},
        })
      : viewRef.current.animate({
          0: {scale: 1.3, rotate: '0deg'},
          1: {scale: 1, rotate: '0deg'},
        });
  }, [focused]);

  return (
    <TouchableOpacity // tab button
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabButton}>
      <View style={styles.tabButton}>
        <Animatable.Image // tab icon
          ref={viewRef}
          duration={500}
          resizeMode="contain"
          style={[
            styles.tabIcon,
            {...(focused && {tintColor: COLORS.gamboge})},
          ]}
          source={focused ? item.iconFilled : item.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const TabNav = ({navigation, route}) => {
  return (
    <SafeAreaProvider // main container
      style={styles.container}>
      <Tab.Navigator //
        initialRouteName={'Home'}
        screenOptions={styles.screenOptions}>
        {TAB_ARRAY.map((item, index) => {
          return (
            <Tab.Screen // individual screens
              key={index}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({focused, color}) => (
                  <Image // default icon
                    resizeMode="contain"
                    style={[
                      styles.tabIcon,
                      {...(focused && {tintColor: COLORS.gamboge})},
                    ]}
                    source={focused ? item.iconFilled : item.icon}
                  />
                ),
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(70),
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  screenOptions: {
    headerShown: false,
    lazy: true,
    unmountOnBlur: true,
    tabBarStyle: {
      height: normalize(70),
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopRightRadius: normalize(20),
      borderTopLeftRadius: normalize(20),
      backgroundColor: COLORS.white,
    },
  },
  tabIcon: {
    height: normalize(20),
    width: normalize(20),
    alignSelf: 'center',
    marginBottom: normalize(4),
  },
});
