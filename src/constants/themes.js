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
  primary: '#E69516',
};

export const FONTS = {
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
