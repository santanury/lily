import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {COLORS, FONTS, normalize} from '../constants';

const Login = ({navigation, route}) => {
  const [emailLog, setEmailLog] = useState(''); // email for login
  const [passwordLog, setPasswordLog] = useState(''); // password for login
  const [emailSign, setEmailSign] = useState(''); // email for signup
  const [passwordSign, setPasswordSign] = useState(''); // password for signup
  const [confirmPasswordSign, setConfirmPasswordSign] = useState(''); // confirm password for signup

  return (
    <>
      <KeyboardAvoidingView
        style={styles.cont}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Animatable.View
          animation={'fadeInLeft'}
          duration={1000}
          delay={0}
          style={styles.leftCont}></Animatable.View>

        <View style={styles.rightCont}>
          {/* HEADER SECTION */}

          <>
            <Animatable.Text // logo text 1
              animation={'fadeInRight'}
              duration={1000}
              delay={100}
              style={[
                styles.txtPatt1,
                {marginTop: normalize(35)},
              ]}>{`L   I          `}</Animatable.Text>
            <Animatable.Text // logo text 2
              animation={'fadeInLeft'}
              duration={1000}
              delay={100}
              style={styles.txtPatt1}>{`          L   Y`}</Animatable.Text>
          </>

          {/* LOGIN SIGNUP SECTION */}

          <Animatable.View
            style={styles.lowerSec}
            animation={'fadeIn'}
            duration={1000}
            delay={1000}>
            <View style={styles.rowFlex1}>
              <Text>Don't have anaccount? </Text>
              <Text>Register</Text>
            </View>

            {/* LOGIN */}

            <>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.darkGray}
                value={emailLog}
                onChangeText={setEmailLog}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={COLORS.darkGray}
                value={passwordLog}
                onChangeText={setPasswordLog}
              />
            </>

            {/* SIGNUP */}
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={COLORS.darkGray}
                value={emailSign}
                onChangeText={setEmailSign}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={COLORS.darkGray}
                value={passwordSign}
                onChangeText={setPasswordSign}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.darkGray}
                value={confirmPasswordSign}
                onChangeText={setConfirmPasswordSign}
              />
            </>
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  cont: {flex: 1, flexDirection: 'row'},
  leftCont: {
    flex: 1,
    backgroundColor: COLORS.gamboge,
  },
  rightCont: {
    flex: 3,
    alignItems: 'center',
  },
  rowFlex1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  txtPatt1: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.black,
    fontSize: normalize(15),
    lineHeight: normalize(15),
  },
  lowerSec: {width: '100%'},
  input: {
    backgroundColor: COLORS.oldSilver + 90,
    width: '90%',
    fontFamily: FONTS.BricolageGrotesqueRegular,
    color: COLORS.black,
    fontSize: normalize(10),
  },
});
