import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {filterData} from '../data/mockData.ts';
import COLORS from '../styles/colors.ts';
import LinearView from './LinearView.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

const FilterBar = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {filterData.map((filter, index) => (
          <View key={filter.id} style={styles.filterContainer}>
            <Pressable
              onPress={() => onSelect(filter)}
              style={styles.filterButton}>
              <Image
                source={filter.imgUrl}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  resizeMode: 'contain',
                }}
              />
              {activeFilter.name === filter.name ? (
                <LinearView
                  containerStyle={{marginTop: 10, borderRadius: BORDER_RADIUS}}>
                  <Text style={styles.filterTextActive}>{filter.name}</Text>
                </LinearView>
              ) : (
                <Text style={styles.filterText}>{filter.name}</Text>
              )}
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  gradientBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 6,
    borderRadius: 32,
    alignItems: 'center',
  },
  activeFilterButton: {
    borderRadius: 32,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.black,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
  },
  activeFilterText: {
    padding: 20,
  },
  separator: {
    color: 'transparent',
    fontSize: 16,
    marginHorizontal: 3,
  },
  filterTextActive: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
    padding: 4,
  },
});

export default FilterBar;
