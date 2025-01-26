import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ViewStyle} from 'react-native';

interface LinearViewProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const LinearView: React.FC<LinearViewProps> = ({containerStyle, children}) => {
  return (
    <LinearGradient
      colors={['#251554', '#7F1B74']}
      style={[styles.gradient, containerStyle]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {},
});

export default LinearView;
