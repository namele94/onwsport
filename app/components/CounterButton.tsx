import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';
import LinearView from './LinearView.tsx';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
  isHorizontal?: boolean;
}

const CounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
  isHorizontal = true,
}) => {
  return (
    <View style={[styles.container, isHorizontal && {flexDirection: 'row'}]}>
      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={minus}>
        <LinearView containerStyle={styles.button}>
          <Text style={[styles.buttonText, styles.leftBtnText]}>-</Text>
        </LinearView>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.valueText,
            isHorizontal && {marginHorizontal: 16, marginVertical: 0},
          ]}>
          {value}
        </Text>
      </View>

      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={plus}>
        <LinearView containerStyle={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </LinearView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 3,
    paddingHorizontal: 10,
    margin: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
  button: {
    borderRadius: 30,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.white,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.white,
  },
});

export default CounterButton;
