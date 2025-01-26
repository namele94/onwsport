import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import MyImageBg from '../components/MyImageBg.tsx';
import {broadcastData} from '../data/mockData.ts';
import {Match} from '../types';
import LinearView from '../components/LinearView.tsx';

const BroadcastsScreen = ({navigation}: any) => {
  function renderItem({item: match}: {item: Match}) {
    return (
      <View style={styles.matchContainer}>
        <LinearView containerStyle={styles.leagueBadge}>
          <Text style={styles.leagueText}>{match.league}</Text>
          <Text style={styles.dateTime}>
            {match.date} - {match.time}
          </Text>
        </LinearView>
        <View style={styles.teamInfo}>
          <Text style={styles.teamName}>{match.team1}</Text>
          <Text style={styles.vs}>vs</Text>
          <Text style={styles.teamName}>{match.team2}</Text>
        </View>
      </View>
    );
  }

  return (
    <MyImageBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <Text style={styles.title}>Трансляции</Text>
        <View style={styles.container}>
          <FlatList
            data={broadcastData}
            keyExtractor={(item: any, index: number) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.black,
    marginLeft: 20,
    paddingTop: 70,
  },
  icon: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  linearContainer: {
    alignItems: 'center',
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
  },
  leagueBadge: {
    width: 120,
    height: 120,
    backgroundColor: '#5B2EBC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  leagueText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  dateTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 4,
  },
  teamInfo: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  vs: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
});

export default BroadcastsScreen;
