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
import {COLORS, FONTS, SIZES, normalize} from '../constants';

const Login = ({navigation, route}) => {
  const [toggle, setToggle] = useState(false); // toggle for login and signup [false = login, true = signup
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
                {marginTop: normalize(55)},
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
              <Text style={styles.txtPatt2}>
                {toggle ? `Don't have an account?` : `Already have an account?`}
              </Text>
              <TouchableOpacity onPress={() => setToggle(!toggle)}>
                <Text style={[styles.txtPatt2, {color: COLORS.indego}]}>
                  {toggle ? `Register` : `Log In`}
                </Text>
              </TouchableOpacity>
            </View>

            {toggle ? ( // LOGIN
              <>
                <Text
                  style={[
                    styles.txtPatt4,
                    {marginVertical: normalize(25)},
                  ]}>{`Log In`}</Text>
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
            ) : (
              // SIGNUP
              <>
                <Text
                  style={[
                    styles.txtPatt4,
                    {marginVertical: normalize(25)},
                  ]}>{`Sign Up`}</Text>
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
            )}

            <Animatable.View
              style={styles.btn1}
              animation={'fadeInUp'}
              duration={1000}
              delay={1500}>
              <TouchableOpacity // enter button
                onPress={() => navigation.navigate('TabNav')}>
                <Text style={styles.txtPatt5}>
                  {toggle ? `Login -` : `Sign Up  -`}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
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
    backgroundColor: COLORS.primary,
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
  txtPatt2: {
    fontFamily: FONTS.BricolageGrotesqueRegular,
    color: COLORS.black,
    fontSize: normalize(10),
    lineHeight: normalize(15),
    letterSpacing: normalize(1),
  },
  txtPatt4: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.black,
    fontSize: normalize(35),
    lineHeight: normalize(40),
    letterSpacing: normalize(4),
  },
  txtPatt5: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    color: COLORS.black,
    fontSize: normalize(10),
    lineHeight: normalize(15),
  },
  lowerSec: {
    width: '100%',
    paddingHorizontal: normalize(10),
    top: normalize(170),
  },
  input: {
    marginTop: normalize(10),
    backgroundColor: COLORS.oldSilver + 90,
    width: '100%',
    height: normalize(35),
    fontFamily: FONTS.BricolageGrotesqueRegular,
    color: COLORS.black,
    fontSize: normalize(10),
    paddingHorizontal: normalize(10),
  },
  btn1: {
    marginTop: normalize(10),
    borderColor: COLORS.black,
    alignItems: 'center',
    width: SIZES.width * 0.5,
    borderWidth: normalize(2),
    paddingVertical: normalize(7),
    borderTopRightRadius: normalize(100),
    borderBottomRightRadius: normalize(100),
  },
});
