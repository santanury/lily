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
import {Actionsheet} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {TextInput} from '@react-native-material/core';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

const Profile = ({navigation, route}) => {
  const [editMdl, setEditMdl] = useState(false);

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
                  onPress={() => setEditMdl(true)}
                  style={{marginLeft: normalize(12)}}
                  activeOpacity={0.7}>
                  <Feather name={'edit-2'} size={20} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.txtPatt2}>Kolkata, India</Text>
          </View>

          <View style={styles.rowFlex2}>
            <View style={styles.infoCont}>
              <Text>Height</Text>
              <Text>1.65m</Text>
            </View>
            <View style={styles.infoCont}>
              <Text>Age</Text>
              <Text>26</Text>
            </View>
            <View style={styles.infoCont}>
              <Text>Weight</Text>
              <Text>62</Text>
            </View>
          </View>
        </ScrollView>

        {/* <Actionsheet // sort actionsheet
          style={{flex: 1}}
          isOpen={editMdl}
          onClose={() => setEditMdl(false)}
          size="full">
          <Actionsheet.Content>
            <TextInput variant="outlined" label="Label" style={{margin: 16}} />
          </Actionsheet.Content>
        </Actionsheet> */}
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
  rowFlex2: {
    width: SIZES.width,
    flexDirection: 'row',
    marginTop: normalize(30),
  },
  infoCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
