import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {useRoute} from '@react-navigation/native';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  1: require('../assets/event1.png'),
  2: require('../assets/event2.png'),
  3: require('../assets/event3.png'),
  4: require('../assets/event4.png'),
  5: require('../assets/event5.png'),
  6: require('../assets/event6.png'),
};

const EventScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  // @ts-ignore
  const id = params?.id;

  function handleGoBack() {
    props.navigation.navigate('Events', {id});
  }

  return (
    <ImageBackground
      source={eventImages[id]}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <Pressable onPress={handleGoBack} style={styles.backBtn}>
        <Image
          source={require('../assets/back.png')}
          style={{width: 24, height: 24}}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  backBtn: {
    paddingTop: 60,
    paddingLeft: 20,
  },
});

export default observer(EventScreen);
