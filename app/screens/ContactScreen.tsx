import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import MaskInput from 'react-native-mask-input';
import CustomButton from '../components/CustomButton.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
const ContactScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <Text style={styles.topTitle}>Контакты</Text>
        <Formik
          initialValues={{
            phone: '',
            address: '',
            date: '',
            index: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Номер телефона"
                    placeholderTextColor={COLORS.grayText}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Город"
                    placeholderTextColor={COLORS.grayText}
                    value={values.address}
                    onChangeText={handleChange('address')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Индекс"
                    placeholderTextColor={COLORS.grayText}
                    value={values.index}
                    onChangeText={handleChange('index')}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder="Страна"
                    style={styles.input}
                    placeholderTextColor={COLORS.grayText}
                    value={values.date}
                    onChangeText={handleChange('date')}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 45,
    borderRadius: BORDER_RADIUS,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
  },
  topTitle: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
});

export default ContactScreen;
