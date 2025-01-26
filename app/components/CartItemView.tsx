import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import CounterButton from './CounterButton.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {item.description}
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <CounterButton
            isHorizontal
            value={quantity}
            plus={() => handlePlus(item)}
            minus={() => handleMinus(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  imageContainer: {
    width: '42%',
  },
  contentContainer: {
    width: '49%',
    alignItems: 'flex-start',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 12,
  },
  infoContainer: {
    paddingLeft: 10,
    paddingVertical: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },
  desc: {
    fontWeight: '400',
    color: COLORS.grayText,
    marginTop: 4,
  },
  price: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 20,
  },
  oldPrice: {
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '500',
    marginLeft: 8,
    textDecorationLine: 'line-through',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTotal: {
    fontWeight: '300',
    color: COLORS.black,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS,
  },
});

export default observer(CartItemView);
