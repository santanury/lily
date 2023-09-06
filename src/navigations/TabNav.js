import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

// screens
import List from '../screens/List';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TAB_ARRAY = [
  {
    name: 'List',
    component: List,
    icon: icons.list,
    iconFilled: icons.listFilled,
  },
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
  const animate1 = {
    0: {scale: 0.5, translateY: 12},
    0.92: {translateY: -34},
    1: {scale: 1.2, translateY: -24},
  };

  const animate2 = {
    0: {scale: 1.2, translateY: -24},
    1: {scale: 1, translateY: 12},
  };

  const circle1 = {
    0: {scale: 0},
    0.3: {scale: 0.9},
    0.5: {scale: 0.2},
    0.8: {scale: 0.7},
    1: {scale: 1},
  };

  const circle2 = {0: {scale: 1}, 1: {scale: 0}};

  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    focused
      ? (viewRef.current.animate(animate1),
        circleRef.current.animate(circle1),
        textRef.current.transitionTo({scale: 1}))
      : (viewRef.current.animate(animate2),
        circleRef.current.animate(circle2),
        textRef.current.transitionTo({scale: 0}));
  }, [focused]);

  return (
    <TouchableOpacity // tab button
      onPress={onPress}
      activeOpacity={1}
      style={styles.tabButton}>
      <Animatable.View style={styles.tabButton} ref={viewRef} duration={500}>
        <View style={styles.btn1}>
          <Animatable.View ref={circleRef} style={styles.iconCont} />
          <Image // tab icon
            resizeMode="contain"
            style={[
              styles.tabIcon,
              {tintColor: focused ? COLORS.white : COLORS.primary},
            ]}
            source={focused ? item.iconFilled : item.icon}
          />
        </View>

        <Animatable.Text ref={textRef} style={styles.txtPatt1}>
          {item.name}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const TabNav = ({navigation, route}) => {
  return (
    <SafeAreaProvider // main container
      style={styles.container}>
      <Tab.Navigator //
        initialRouteName={'Profile'}
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
                      {...(focused && {tintColor: COLORS.primary})},
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
      bottom: normalize(16),
      left: normalize(16),
      right: normalize(16),
      borderRadius: normalize(16),
      backgroundColor: COLORS.white,
    },
  },
  tabIcon: {
    height: normalize(20),
    width: normalize(20),
    alignSelf: 'center',
    marginBottom: normalize(4),
  },

  btn1: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    borderWidth: normalize(4),
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCont: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.primary,
    borderRadius: normalize(25),
  },
  txtPatt1: {
    fontSize: normalize(12),
    color: COLORS.black,
    fontFamily: FONTS.BricolageGrotesqueSemiBold,
  },
});
