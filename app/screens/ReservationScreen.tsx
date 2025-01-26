import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import DatePicker from 'react-native-date-picker';
import MaskInput from 'react-native-mask-input';
import {BORDER_RADIUS} from '../styles/constants.ts';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  table: Yup.string().required('Required'),
  ind: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
});

const ReservationScreen = ({navigation}: any) => {
  const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <Text style={styles.title}>Резерв столика</Text>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            table: '',
            ind: '',
            date: '',
          }}
          validationSchema={ReservationSchema}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, setFieldValue, isValid}) => {
            const isFormFilled = Object.values(values).every(
              value => value !== '',
            );

            return (
              <>
                <View style={styles.formContainer}>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Имя..."
                        placeholderTextColor={COLORS.grayText}
                        value={values.name}
                        onChangeText={handleChange('name')}
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Номер телефона"
                        placeholderTextColor={COLORS.grayText}
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        keyboardType="phone-pad"
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Столик"
                        placeholderTextColor={COLORS.grayText}
                        value={values.table}
                        onChangeText={handleChange('table')}
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Время"
                        placeholderTextColor={COLORS.grayText}
                        value={values.ind}
                        onChangeText={handleChange('ind')}
                      />
                    </View>
                  </View>

                  <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                      <MaskInput
                        mask={dateMask}
                        placeholder="Дата"
                        style={styles.input}
                        placeholderTextColor={COLORS.grayText}
                        value={values.date}
                        onChangeText={handleChange('date')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    isDisabled={!isFormFilled && !isValid}
                    title="Зарезервировать"
                    onPress={handleSubmit}
                  />
                </View>
              </>
            );
          }}
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
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
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
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  tablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableButton: {
    backgroundColor: COLORS.white,
    padding: 25,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  tableButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tableButtonText: {
    color: COLORS.black,
    fontWeight: '700',
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ReservationScreen;
