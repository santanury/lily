import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  PermissionsAndroid,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

const WELCOME = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];

const Home = ({navigation, route}) => {
  const [user, setUser] = useState('SANTANU'.split(''));

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ImageBackground style={{flex: 1}} source={images.welcomeBg}>
          <Animatable.View
            animation={'fadeInDownBig'}
            duration={1000}
            delay={1000}
            style={styles.middleStrip}
          />

          <View style={styles.welcomeCont}>
            {WELCOME.map((item, index) => {
              return (
                <Animatable.Text
                  animation={'fadeIn'}
                  duration={1500 * index}
                  delay={1000}
                  key={index}
                  style={styles.txtPatt1}>
                  {item}
                </Animatable.Text>
              );
            })}
          </View>

          <View style={styles.nameCont}>
            {user.map((item, index) => (
              <Animatable.Text
                animation={'fadeIn'}
                duration={1500 * index}
                delay={1500}
                key={index}
                style={styles.txtPatt2}>
                {item}
              </Animatable.Text>
            ))}
          </View>

          <Animatable.Text
            animation={'fadeIn'}
            duration={9000}
            delay={1000}
            style={styles.txtPatt3}>
            This is your home screen, and here you can see your name and a
            welcome message. You can also see a strip in the middle of the
            screen, which is a part of the background image. This strip is
            animated to move down and up, and it is also semi-transparent. On
            right you have the Profile icon, which will take you to your profile
            screen. On left you have the List icon, which will take you to your
            list screen. You can
          </Animatable.Text>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollCont: {
    flex: 1,
    zIndex: 1,
    backgroundColor: COLORS.transparent,
  },
  middleStrip: {
    height: SIZES.height,
    width: normalize(100),
    backgroundColor: COLORS.primary + 70,
    alignSelf: 'center',
  },
  welcomeCont: {
    flexDirection: 'row',
    position: 'absolute',
    top: normalize(50),
    left: normalize(10),
  },
  nameCont: {
    flexDirection: 'row',
    position: 'absolute',
    top: normalize(90),
    left: normalize(50),
  },
  txtPatt1: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.white,
    letterSpacing: normalize(5),
    fontSize: normalize(20),
  },
  txtPatt2: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.white,
    letterSpacing: normalize(5),
    fontSize: normalize(40),
  },
  txtPatt3: {
    position: 'absolute',
    top: normalize(200),
    left: normalize(170),
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.white,
    fontSize: normalize(10),
    width: normalize(120),
    textAlign: 'right',
  },
});
