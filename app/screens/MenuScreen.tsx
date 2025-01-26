import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/MyImageBg.tsx';
import CartButton from '../components/CartButton.tsx';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useStore} from '../stores/StoreContext.tsx';
import FastImage from 'react-native-fast-image';
import Header from '../components/Header.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

interface MenuScreenProps {
  navigation: any;
}

const MenuScreen: React.FC<MenuScreenProps> = props => {
  const {cart, cartTotal} = useStore().productStore;

  function navToCart() {
    props.navigation.navigate('CartStack');
  }

  return (
    <MyImageBg showBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.emptyContainer}>
            <Image
              source={require('../assets/app_logo.png')}
              style={{width: '95%', height: 254, resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.menuItemContainer}>
            <ItemButton title={'ГЛАВНАЯ'} targetScreen={'Shop'} />
            <ItemButton title={'КОРЗИНА'} targetScreen={'CartStack'} />
            <ItemButton title={'ТРАНСЛЯЦИИ'} targetScreen={'Broadcasts'} />
            <ItemButton title={'КОНТАКТЫ'} targetScreen={'Contacts'} />
            <ItemButton title={'РЕЗЕРВ СТОЛИКА'} targetScreen={'Reservation'} />
            <ItemButton title={'СОБЫТИЯ'} targetScreen={'Events'} />
          </View>
        </View>
        <View style={{paddingBottom: 80, alignSelf: 'center'}}>
          <CartButton iconSize={48} />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const ItemButton = ({
  title,
  targetScreen,
}: {
  title: string;
  targetScreen: string;
  bgColor?: string;
}) => {
  const navigation: any = useNavigation();
  const route = useRoute();
  const getPreviousRouteName = () => {
    const navigationState = navigation.getState();
    const routes = navigationState.routes;
    const currentIndex = navigationState.index;

    // Проверяем, есть ли предыдущий роут
    if (currentIndex > 0) {
      return routes[currentIndex - 1].name;
    }
    return null;
  };

  const previousRouteName = getPreviousRouteName();

  const isActive =
    route.name === targetScreen || previousRouteName === targetScreen;

  return (
    <Pressable
      style={[
        styles.menuItem,
        isActive && {backgroundColor: COLORS.white, padding: 16},
      ]}
      onPress={() => navigation.navigate(targetScreen)}>
      <Text style={[styles.menuText, isActive && {color: COLORS.black}]}>
        {title}
      </Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  menuItem: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    marginBottom: 20,
    paddingLeft: 16,
  },
  menuText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  counter: {
    backgroundColor: COLORS.secondary,
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 100,
    position: 'relative',
    bottom: width * 0.08,
    right: 5,
  },
  counterText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  goBasketContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  goBasketButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  goBasketTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText1: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 700,
    opacity: 0.5,
  },
  emptyText2: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  emptyTextContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuItemContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    paddingRight: 20,
    position: 'relative',
    right: -50,
  },
});

export default observer(MenuScreen);
