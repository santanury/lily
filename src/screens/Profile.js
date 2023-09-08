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
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

const Profile = ({navigation, route}) => {
  return (
    <>
      <KeyboardAvoidingView // keyboard avoiding view
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView // scrollview for the whole screen
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollCont}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: normalize(80),
          }}>
          <View style={styles.curve}>
            <TouchableOpacity // edit picture button
              activeOpacity={0.7}>
              <Image // profile picture
                source={icons.avatar_m}
                style={styles.dp}
              />
            </TouchableOpacity>

            <View // name and edit button container
              style={styles.rowFlex1}>
              <View style={{flex: 1}} />
              <Text style={styles.txtPatt1}>Santanu Roy</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity // edit name button
                  style={{marginLeft: normalize(12)}}
                  activeOpacity={0.7}>
                  <Feather name={'edit-2'} size={20} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.txtPatt2}>Kolkata, India</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollCont: {
    flex: 1,
    zIndex: 1,
    backgroundColor: COLORS.transparent,
  },
  curve: {
    height: SIZES.height * 0.6,
    width: SIZES.width * 2.2,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: SIZES.width * 2.2,
    borderBottomLeftRadius: SIZES.width * 2.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dp: {
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(50),
    resizeMode: 'cover',
    borderWidth: normalize(2),
  },
  txtPatt1: {
    fontFamily: FONTS.BricolageGrotesqueExtraBold,
    fontSize: normalize(20),
    color: COLORS.white,
    marginTop: normalize(8),
  },
  txtPatt2: {
    fontFamily: FONTS.BricolageGrotesqueSemiBold,
    fontSize: normalize(14),
    color: COLORS.white + 99,
    marginTop: normalize(2),
    marginBottom: normalize(16),
  },
  rowFlex1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
