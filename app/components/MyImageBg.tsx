import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface MyImageBgProps {
  children?: React.ReactNode;
  showBg?: boolean;
}

const MyImageBg = (props: MyImageBgProps) => {
  const source: any = require('../assets/main_bg.png');

  if (!props.showBg) {
    return <View style={styles.background}>{props.children}</View>;
  }

  return (
    <ImageBackground
      source={source}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      {props.children}
    </ImageBackground>
  );
};

export default MyImageBg;

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
});
