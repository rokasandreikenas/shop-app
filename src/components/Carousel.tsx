import React from 'react';
import {
  Image,
  View,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
} from 'react-native';
import {images as imagesConst} from '../consts/images';

interface Props {
  images: ImageSourcePropType[];
}

const Carousel = ({images}: Props) => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (step === images.length) {
      setStep(0);
    }
    if (step < 0) {
      setStep(images.length - 1);
    }
  }, [step, images.length]);

  return (
    <View>
      <Image source={images[step]} style={styles.image} />
      <View style={styles.arrows}>
        <Pressable
          onPress={() => setStep(prevStep => prevStep - 1)}
          style={styles.box}>
          <Image source={imagesConst.arrowLeft} style={styles.boxArrow} />
        </Pressable>
        <Pressable
          onPress={() => setStep(prevStep => prevStep + 1)}
          style={styles.box}>
          <Image source={imagesConst.arrowRight} style={styles.boxArrow} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  arrows: {
    position: 'absolute',
    bottom: -12,
    right: 10,
    flexDirection: 'row',
  },
  box: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxArrow: {
    tintColor: 'white',
  },
});

export default Carousel;
