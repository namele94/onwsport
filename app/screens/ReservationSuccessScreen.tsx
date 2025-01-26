import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton.tsx';
import COLORS from '../styles/colors.ts';
import MyImageBg from '../components/MyImageBg.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

const ReservationSuccessScreen = ({navigation}: any) => {
  const navToMain = () => {
    navigation.navigate('Shop');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{'Спасибо за\nрезерв!'}</Text>
            <Image
              source={require('../assets/success.png')}
              style={{width: 180, height: 180}}
            />
          </View>
        </View>
        <View style={styles.linearContainer}>
          <CustomButton
            onPress={navToMain}
            title={'НА ГЛАВНУЮ'}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
    textAlign: 'center',
    color: COLORS.secondary,
    marginTop: 20,
    marginBottom: 40,
  },
  icon: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  linearContainer: {
    alignItems: 'center',
  },
});

export default ReservationSuccessScreen;
