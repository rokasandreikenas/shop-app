import BottomSheet from '@gorhom/bottom-sheet';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, Pressable, StyleSheet, View} from 'react-native';
import {activeIndicatorColor, indicatorColor} from '../consts/colors';
import {images} from '../consts/images';
import CartSheet from '../sheets/CartSheet';
import TabNavigationCart from './TabNavigationCart';

const tabIcons: Record<string, ImageSourcePropType> = {
  TabHome: images.home,
  TabSearch: images.search,
  TabFavourites: images.heartFilled,
  TabCart: images.basket,
};

const TabNavigationBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const snapPoints = React.useMemo(() => ['70%', '100%'], []);

  const openBottomSheet = () => {
    bottomSheetRef?.current?.snapToPosition(snapPoints[0]);
  };

  const closeBottomSheet = () => {
    bottomSheetRef?.current?.close();
  };

  const handleToggleCartSheet = () => {
    if (open) {
      closeBottomSheet();
      setOpen(false);
    } else {
      openBottomSheet();
      setOpen(true);
    }
  };

  return (
    <>
      <View style={styles.floatingBar}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                merge: true,
                params: undefined,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.iconContainer}>
              <Image
                style={[
                  {
                    tintColor: isFocused ? activeIndicatorColor : indicatorColor,
                  },
                  styles.icon,
                ]}
                source={tabIcons[route.name]}
              />
            </Pressable>
          );
        })}
        <TabNavigationCart count={count} onPress={handleToggleCartSheet} />
      </View>
      <CartSheet navigation={navigation} bottomSheetRef={bottomSheetRef} snapPoints={snapPoints} setCount={setCount} />
    </>
  );
};

const styles = StyleSheet.create({
  floatingBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    borderRadius: 50,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: 'white',
    zIndex: 100,
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    margin: 20,
  },
});

export default TabNavigationBar;
