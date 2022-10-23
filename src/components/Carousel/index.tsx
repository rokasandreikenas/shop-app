import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {images as imagesConst} from '../../consts/images';
import CarouselButton from './CarouselButton';

interface Props {
  images: ImageSourcePropType[];
}

const Carousel = ({images}: Props) => {
  const [step, setStep] = React.useState(0);

  const pressBack = () => {
    setStep(prevStep => (prevStep < 1 ? images.length - 1 : prevStep - 1));
  };

  const pressForward = () => {
    setStep(prevStep => (prevStep === images.length - 1 ? 0 : prevStep + 1));
  };

  return (
    <View>
      <Image source={images[step]} style={styles.image} />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CarouselButton image={imagesConst.arrowLeft} onPress={pressBack} />
        </View>
        <View style={styles.button}>
          <CarouselButton
            image={imagesConst.arrowRight}
            onPress={pressForward}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  buttons: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 2,
  },
});

export default Carousel;
