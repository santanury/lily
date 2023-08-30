import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {COLORS} from '../constants';

const Login = ({navigation, route}) => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.cont}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Animatable.View
          animation={'fadeInLeft'}
          duration={1000}
          delay={500}
          style={styles.leftCont}></Animatable.View>

        <View style={styles.rightCont}></View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  cont: {flex: 1, flexDirection: 'row'},
  leftCont: {
    flex: 1,
    backgroundColor: COLORS.danger,
  },
  rightCont: {
    flex: 3,
  },
});
