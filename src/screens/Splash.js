import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation, route}) => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.cont}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        {/* SLIDERS CONTAINER */}

        <View style={styles.rowFlex1}>
          <Animatable.Image
            animation={'fadeInRight'}
            duration={1000}
            delay={0}
            style={[styles.slideImg, {left: 0}]}
            source={images.slide_1}
          />
          <Animatable.Image
            animation={'fadeInRight'}
            duration={1000}
            delay={500}
            style={[styles.slideImg, {left: SIZES.width / 3.3}]}
            source={images.slide_2}
          />
          <Animatable.Image
            animation={'fadeInRight'}
            duration={1000}
            delay={1000}
            style={[styles.slideImg, {left: SIZES.width / 1.6}]}
            source={images.slide_3}
          />
        </View>

        {/* LOWER BUTTON CONTAINER */}

        <Animatable.View
          animation={'fadeInUp'}
          duration={1000}
          delay={1100}
          style={styles.lowerCont}>
          <LinearGradient
            colors={[COLORS.transparent, COLORS.black + 90, COLORS.black]}
            style={styles.gradientCont}>
            <Animatable.View
              style={styles.btn1}
              animation={'fadeInUp'}
              duration={1000}
              delay={2000}>
              <TouchableOpacity // enter button
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtPatt2}>{`Enter  -`}</Text>
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.Text // logo text 1
              animation={'fadeInRight'}
              duration={1000}
              delay={2500}
              style={[
                styles.txtPatt1,
                {marginTop: normalize(35)},
              ]}>{`L   I          `}</Animatable.Text>
            <Animatable.Text // logo text 2
              animation={'fadeInLeft'}
              duration={1000}
              delay={2500}
              style={styles.txtPatt1}>{`          L   Y`}</Animatable.Text>
          </LinearGradient>
        </Animatable.View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowFlex1: {
    height: SIZES.height,
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  slideImg: {
    position: 'absolute',
    height: SIZES.height,
    resizeMode: 'cover',
  },
  lowerCont: {
    position: 'absolute',
    alignItems: 'center',
    width: SIZES.width,
    height: SIZES.height / 3,
    bottom: 0,
  },
  gradientCont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    alignItems: 'center',
    width: SIZES.width * 0.5,
    borderWidth: normalize(2),
    borderColor: COLORS.white,
    paddingVertical: normalize(7),
    borderTopRightRadius: normalize(100),
    borderBottomRightRadius: normalize(100),
  },
  txtPatt1: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.white,
    fontSize: normalize(15),
    lineHeight: normalize(15),
  },
  txtPatt2: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.white,
    fontSize: normalize(10),
    lineHeight: normalize(15),
  },
});
