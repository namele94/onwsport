import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import COLORS from '../styles/colors.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';
import LinearView from './LinearView.tsx';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  secondTitle?: string;
  containerStyle?: ViewStyle;
  outline?: boolean;
  isDisabled?: boolean;
  iconUrl?: any;
}

const CustomButton = ({
  onPress,
  title,
  secondTitle,
  containerStyle,
  outline,
  isDisabled,
  iconUrl,
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[
        styles.button,
        outline && styles.outline,
        isDisabled && styles.disabled,
        containerStyle,
      ]}
      onPress={onPress}>
      <LinearView containerStyle={{borderRadius: 16}}>
        <View style={styles.titleContainer}>
          {iconUrl ? <Image source={iconUrl} style={styles.icon} /> : null}
          <Text style={[styles.buttonText, outline && styles.outlineText]}>
            {title}
          </Text>
        </View>
        {secondTitle && (
          <Text style={[styles.buttonText, outline && styles.outlineText]}>
            {secondTitle}
          </Text>
        )}
      </LinearView>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    width: '80%',
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    padding: 14,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  outlineText: {
    color: COLORS.primary,
    fontWeight: '300',
  },
  disabled: {
    opacity: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
