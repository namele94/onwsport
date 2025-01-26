import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';

const ProductCard = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Купить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 12,
  },
  header: {
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },
  name: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
  },
  desc: {
    color: COLORS.grayText,
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
    paddingHorizontal: 8,
  },
  addButton: {
    padding: 10,
    paddingVertical: 4,
    margin: 12,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.white,
  },
  icon: {
    width: 18,
    height: 18,
  },
  cart: {
    width: 52,
    height: 52,
  },
  weight: {
    color: COLORS.grayText,
  },
  detailContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  titleContainer: {
    paddingVertical: 8,
    height: width * 0.18,
    overflow: 'hidden',
  },
  priceContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS,
  },
});

export default observer(ProductCard);
