import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import CustomButton from '../../components/CustomButton.tsx';
import MyImageBg from '../../components/MyImageBg.tsx';
import ProductCard from '../../components/ProductCard.tsx';
import CartItemView from '../../components/CartItemView.tsx';
import LinearView from '../../components/LinearView.tsx';

const emptyIcon = require('../../assets/empty.png');
const CartScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal} = productStore;
  const isEmpty = cart.length === 0;

  const navigateToConfirmScreen = () => {
    navigation.navigate('Order');
  };
  const navigateToShop = () => {
    navigation.navigate('Shop');
  };

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CartItemView item={item} />}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            ListFooterComponent={
              cart.length > 0 ? (
                <View style={styles.footer}>
                  <Text style={[styles.footerText, {alignSelf: 'flex-start'}]}>
                    Сумма к оплате: ${cartTotal}
                  </Text>
                </View>
              ) : null
            }
            ListEmptyComponent={<EmptyCartView />}
          />
        </View>
        <View>
          {!isEmpty && (
            <CustomButton
              onPress={navigateToConfirmScreen}
              title={'ЗАКАЗАТЬ'}
              containerStyle={{
                marginBottom: 40,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartText}>{'Корзина\nпуста...'}</Text>
      <Image source={emptyIcon} style={styles.emptyIcon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
    paddingTop: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  emptyCartText: {
    fontSize: 40,
    fontWeight: 900,
    color: '#7F1B74',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyCartSubText: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '400',
    marginTop: 20,
  },
  emptyIcon: {
    width: 180,
    height: 180,
    marginTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.03)',
    paddingVertical: 10,
  },
  cartLengthText: {
    color: COLORS.black,
  },
  headerRight: {
    marginRight: 10,
  },
  headerRightTitle: {
    fontSize: 16,
  },
  cartHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  cartHeaderTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  totalAmount: {
    color: COLORS.primary,
  },
  footer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.black,
    marginBottom: 4,
    alignSelf: 'center',
  },
});

export default observer(CartScreen);
