import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';
import {TextInput} from '@react-native-material/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, images, icons, SIZES, normalize, FONTS} from '../constants';

const Profile = ({navigation, route}) => {
  const [editMdl, setEditMdl] = useState(false);
  const [name, setName] = useState('Santanu Roy');
  const [tempName, setTempName] = useState('');
  const [address, setAddress] = useState('Kolkata, India');
  const [tempAddress, setTempAddress] = useState('');
  const [height, setHeight] = useState('1.65m');
  const [tempHeight, setTempHeight] = useState('');
  const [age, setAge] = useState('26');
  const [tempAge, setTempAge] = useState('');
  const [weight, setWeight] = useState('62');
  const [tempWeight, setTempWeight] = useState('');

  // on press edit button
  const onPressEdit = () => {
    setTempName(name);
    setTempAddress(address);
    setTempHeight(height);
    setTempAge(age);
    setTempWeight(weight);
    setEditMdl(true);
  };

  // on press close button
  const onPressClose = () => {
    setTempName('');
    setTempAddress('');
    setTempHeight('');
    setTempAge('');
    setTempWeight('');
    setEditMdl(false);
  };

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
          {/* DP & BASIC INFO */}

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
              <Text style={styles.txtPatt1}>{name}</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity // edit name button
                  onPress={onPressEdit}
                  style={{marginLeft: normalize(12)}}
                  activeOpacity={0.7}>
                  <Feather name={'edit-2'} size={20} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.txtPatt2}>{address}</Text>
          </View>

          {/* ADDITIONAL INFO */}

          <View style={styles.rowFlex2}>
            <View // height container
              style={styles.infoCont}>
              <Text style={styles.txtPatt3}>{height}</Text>
              <Text style={styles.txtPatt4}>Height</Text>
            </View>
            <View // age container
              style={styles.infoCont}>
              <Text style={styles.txtPatt3}>{age}</Text>
              <Text style={styles.txtPatt4}>Age</Text>
            </View>
            <View // weight container
              style={styles.infoCont}>
              <Text style={styles.txtPatt3}>{weight}</Text>
              <Text style={styles.txtPatt4}>Weight</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* EDIT MODAL */}

      <Modal animationType="slide" transparent={true} visible={editMdl}>
        <TouchableOpacity // overlay to close modal
          onPress={onPressClose}
          activeOpacity={1}
          style={styles.modalOverlay}>
          <Pressable // modal content
            style={styles.unpressableOverlay}>
            <View // modal header
              style={styles.rowFlex3}>
              <Text // modal header text
                style={styles.txtPatt5}>
                Edit your personal details
              </Text>
              <EvilIcons
                name={'close'}
                size={normalize(20)}
                color={COLORS.black}
                onPress={onPressClose}
              />
            </View>

            <KeyboardAwareScrollView style={styles.keyAvoid}>
              <TextInput // name input
                variant="outlined"
                label="Name"
                style={styles.input1}
                value={tempName}
                onChangeText={text => setTempName(text)}
              />
              <TextInput // address input
                variant="outlined"
                label="Address"
                style={styles.input1}
                value={tempAddress}
                onChangeText={text => setTempAddress(text)}
              />
              <TextInput // height input
                variant="outlined"
                label="Height"
                style={styles.input1}
                value={tempHeight}
                onChangeText={text => setTempHeight(text)}
              />
              <TextInput // age input
                variant="outlined"
                label="Age"
                style={styles.input1}
                value={tempAge}
                onChangeText={text => setTempAge(text)}
              />
              <TextInput // weight input
                variant="outlined"
                label="Weight"
                style={styles.input1}
                value={tempWeight}
                onChangeText={text => setTempWeight(text)}
              />
            </KeyboardAwareScrollView>
          </Pressable>
        </TouchableOpacity>
      </Modal>
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
  txtPatt3: {
    fontFamily: FONTS.BricolageGrotesqueRegular,
    fontSize: normalize(25),
    color: COLORS.primary,
  },
  txtPatt4: {
    fontFamily: FONTS.BricolageGrotesqueLight,
    fontSize: normalize(12),
    color: COLORS.black + 99,
  },
  txtPatt5: {
    fontFamily: FONTS.BricolageGrotesqueSemiBold,
    fontSize: normalize(15),
    color: COLORS.black,
    lineHeight: normalize(30),
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
  rowFlex3: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: normalize(),
  },
  infoCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.black + 50,
  },
  unpressableOverlay: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.9,
    borderRadius: normalize(20),
    padding: normalize(10),
  },
  keyAvoid: {
    width: '100%',
    paddingVertical: normalize(5),
    maxHeight: SIZES.height * 0.85,
  },
  input1: {textAlign: 'center', marginTop: normalize(10)},
});
