import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductCard.tsx';
import MyImageBg from '../components/MyImageBg.tsx';
import CustomHeader from '../components/CustomHeader.tsx';
import FilterBar from '../components/FilterBar.tsx';
import LinearView from '../components/LinearView.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
            fontWeight: 500,
            textAlign: 'center',
          }}>
          Категории
        </Text>
        <FilterBar activeFilter={activeFilter} onSelect={setFilter} />
        <LinearView
          containerStyle={{
            alignSelf: 'flex-start',
            borderRadius: 16,
            marginLeft: 12,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontWeight: 600,
              padding: 6,
              paddingHorizontal: 16,
            }}>
            {activeFilter.name}
          </Text>
        </LinearView>
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },
  container: {
    paddingTop: 16,
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default observer(HomeScreen);
