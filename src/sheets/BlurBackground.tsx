import {BottomSheetBackgroundProps} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {blurBackgroudColor} from '../consts/colors';

const BlurBackground: React.FC<BottomSheetBackgroundProps> = ({style}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: blurBackgroudColor,
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: blurBackgroudColor,
  }));
  const containerStyle = useMemo(() => [style, containerAnimatedStyle], [style, containerAnimatedStyle]);

  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default BlurBackground;
