import { Dimensions, PixelRatio } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Get responsive width based on screen device size
export const getResponsiveWidth = (widthPercentage, width = SCREEN_WIDTH) => {
  const elemWidth = typeof widthPercentage === "number" ? widthPercentage : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
};

// Get responsive height based on screen device size
export const getResponsiveHeight = (heightPercentage, height = SCREEN_HEIGHT) => {
  const elemHeight = typeof heightPercentage === "number" ? heightPercentage : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};

// Responsive elements size
export const ELEMENTS_SIZE = {
  _500: getResponsiveHeight("40.6%"),
  _400: getResponsiveHeight("32.5%"),
  _200: getResponsiveHeight("16.25%"),
  _175: getResponsiveHeight("14.20%"),
  _150: getResponsiveHeight("12.20%"),
  _125: getResponsiveHeight("10%"),
  _110: getResponsiveHeight("8.95%"),
  _100: getResponsiveHeight("8.1%"),
  _90: getResponsiveHeight("7.3%"),
  _80: getResponsiveHeight("6.5%"),
  _75: getResponsiveHeight("6.1%"),
  _70: getResponsiveHeight("5.7%"),
  _60: getResponsiveHeight("4.95%"),
  _55: getResponsiveHeight("4.5%"),
  _50: getResponsiveHeight("4.1%"),
  _40: getResponsiveHeight("3.25%"),
  _35: getResponsiveHeight("2.8%"),
  _30: getResponsiveHeight("2.45%"),
  _25: getResponsiveHeight("2.05%"),
  _20: getResponsiveHeight("1.6%"),
  _15: getResponsiveHeight('1.25%'),
  _10: getResponsiveHeight("0.8%"),
  _8: getResponsiveHeight("0.65%"),
  _6: getResponsiveHeight("0.48%"),
  _5: getResponsiveHeight("0.4%"),
  _3: getResponsiveHeight("0.21%"),
  _2: getResponsiveHeight("0.18%"),
  _1: getResponsiveHeight("0.09%"),
}

//#region FORMATING FONT SIZE - METHOD 1

// Funtion to format fontsize based on screen device size
export const fonteSize = (fontSize) => {
  switch (fontSize) {
    case 10: return getResponsiveHeight('0.8%');
    case 12: return getResponsiveHeight('1%');
    case 14: return getResponsiveHeight('1.15%');
    case 16: return getResponsiveHeight('1.3%');
    case 18: return getResponsiveHeight('1.45%');
    case 20: return getResponsiveHeight('1.6%');
    case 25: return getResponsiveHeight('2.05%');
    case 30: return getResponsiveHeight('2.45%');
    case 35: return getResponsiveHeight('2.85%');
    case 40: return getResponsiveHeight('3.25%');
    case 45: return getResponsiveHeight('3.66%');
    case 50: return getResponsiveHeight('4.05%');
  }
}

// FONTS SIZE
export const FONTE_10 = fonteSize(10);
export const FONTE_12 = fonteSize(12);
export const FONTE_14 = fonteSize(14);
export const FONTE_16 = fonteSize(16);
export const FONTE_18 = fonteSize(18);
export const FONTE_20 = fonteSize(20);
export const FONTE_25 = fonteSize(25);
export const FONTE_30 = fonteSize(30);
export const FONTE_35 = fonteSize(35);
export const FONTE_40 = fonteSize(40);
export const FONTE_45 = fonteSize(45);
export const FONTE_50 = fonteSize(50);

/* seeing this in the log
if (__DEV__) console.log("FONTE_SIZE_10", FONTE_SIZE_10);
*/
//#endregion FORMATING FONT SIZE - METHOD 1



//#region FORMATING FONT SIZE - METHOD 2 (using react-native-responsive-fontsize lib)
//using RFPercentage
export const FONT_LARGE = RFPercentage(3.5);
export const FONT_MEDIUM = RFPercentage(2.3);
export const FONT_NORMAL = RFPercentage(2);

//or using RFValue
// export const FONT_LARGE = RFValue(30);
// export const FONT_MEDIUM = RFValue(22);
// export const FONT_NORMAL = RFValue(18);

//for more details: https://www.npmjs.com/package/react-native-responsive-fontsize

/* seeing this in the log
if (__DEV__) console.log("FONT_LARGE", FONT_LARGE);
*/
//#endregion FORMATING FONT SIZE - METHOD 2 (react-native-responsive-fontsize)



//#region FORMATING FONT SIZE - METHOD 3 (using REM, with react-native-extended-stylesheet)

/*
 it's about using EStyleSheet.create({ your styles here.., fontSize: '2rem'  }) instead of
                  StyleSheet.create({ your styles here.. }) -> (standard way)
*/

//for more details: https://github.com/vitalets/react-native-extended-stylesheet

//#endregion FORMATING FONT SIZE - METHOD 3 (REM, with react-native-extended-stylesheet)