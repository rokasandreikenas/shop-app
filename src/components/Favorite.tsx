import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {favoriteIconColor} from '../consts/colors';
import {images} from '../consts/images';

interface Props {
  onPress: () => void;
}

const Favorite = ({onPress}: Props) => {
  const [favorited, setFavorited] = React.useState(false);

  const favorite = () => {
    setFavorited(prevFavorited => !prevFavorited);
    onPress();
  };

  return (
    <TouchableOpacity onPress={favorite}>
      <Image
        source={favorited ? images.heartFilled : images.heart}
        style={[styles.icon, favorited && styles.fill]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
  fill: {
    tintColor: favoriteIconColor,
  },
});

export default Favorite;
