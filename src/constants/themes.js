import {Dimensions, StatusBar} from 'react-native';
const {width, height, fontScale} = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  oldSilver: '#868686',
  indego: '#392185',
  green: '#00B761',
  warning: '#FF9900',
  darkGray: '#666A74',
  danger: '#FF0000',
  gamboge: '#E69516',
};

export const FONTS = {
  // Grotesque18CondensedBold: 'BricolageGrotesque_18pt_Condensed-Bold',
  // Grotesque18CondensedExtraBold: 'BricolageGrotesque_18pt_Condensed-ExtraBold',
  // Grotesque18CondensedExtraLight:
  //   'BricolageGrotesque_18pt_Condensed-ExtraLight',
  // Grotesque18CondensedLight: 'BricolageGrotesque_18pt_Condensed-Light',
  // Grotesque18CondensedMedium: 'BricolageGrotesque_18pt_Condensed-Medium',
  // Grotesque18CondensedRegular: 'BricolageGrotesque_18pt_Condensed-Regular',
  // Grotesque18CondensedSemiBold: 'BricolageGrotesque_18pt_Condensed-SemiBold',
  // Grotesque18SemiCondensedExtraBold:
  //   'BricolageGrotesque_18pt_SemiCondensed-ExtraBold',
  // Grotesque18SemiCondensedExtraLight:
  //   'BricolageGrotesque_18pt_SemiCondensed-ExtraLight',
  // Grotesque18SemiCondensedLight: 'BricolageGrotesque_18pt_SemiCondensed-Light',
  // Grotesque18SemiCondensedMedium:
  //   'BricolageGrotesque_18pt_SemiCondensed-Medium',
  // Grotesque18SemiCondensedRegular:
  //   'BricolageGrotesque_18pt_SemiCondensed-Regular',
  // Grotesque18SemiCondensedSemiBold:
  //   'BricolageGrotesque_18pt_SemiCondensed-SemiBold',
  // Grotesque18Bold: 'BricolageGrotesque_18pt-Bold',
  // Grotesque18ExtraBold: 'BricolageGrotesque_18pt-ExtraBold',
  // Grotesque18ExtraLight: 'BricolageGrotesque_18pt-ExtraLight',
  // Grotesque18Light: 'BricolageGrotesque_18pt-Light',
  // Grotesque18Medium: 'BricolageGrotesque_18pt-Medium',
  // Grotesque18Regular: 'BricolageGrotesque_18pt-Regular',
  // Grotesque18SemiBold: 'BricolageGrotesque_18pt-SemiBold',
  BricolageGrotesqueBold: 'BricolageGrotesque-Bold',
  BricolageGrotesqueExtraBold: 'BricolageGrotesque-ExtraBold',
  BricolageGrotesqueExtraLight: 'BricolageGrotesque-ExtraLight',
  BricolageGrotesqueLight: 'BricolageGrotesque-Light',
  BricolageGrotesqueMedium: 'BricolageGrotesque-Medium',
  BricolageGrotesqueRegular: 'BricolageGrotesque-Regular',
  BricolageGrotesqueSemiBold: 'BricolageGrotesque-SemiBold',
};

export const SHADOW = {
  shadowColor: COLORS.black + 50,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,
};

export const SIZES = {
  width,
  height,
  fontScale,
  STATUSBAR_HEIGHT,
};

const appTheme = {
  COLORS,
  FONTS,
  SIZES,
};

export default appTheme;
