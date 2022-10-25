import {PlatformOSType} from 'react-native';
import {secondaryFontAndroid, secondaryFontiOS} from '../consts/font';

export const getSecondaryFont = (os: PlatformOSType) => {
  if (os === 'ios') {
    return secondaryFontiOS;
  } else {
    return secondaryFontAndroid;
  }
};
