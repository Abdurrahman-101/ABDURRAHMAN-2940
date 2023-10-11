import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const OnboardingScreens: React.FC = () => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1" style={styles.page}>
        <Text style={styles.title}>Welcome to Daily Digest</Text>
        <Text style={styles.description}>Stay updated with the latest news from various sources.</Text>
      </View>
      <View key="2" style={styles.page}>
        <Text style={styles.title}>Customize Your Feed</Text>
        <Text style={styles.description}>Choose categories that interest you the most.</Text>
      </View>
      <View key="3" style={styles.page}>
        <Text style={styles.title}>Stay Informed On The Go</Text>
        <Text style={styles.description}>Get daily digests and notifications.</Text>
        <Button title="Get Started" onPress={() => {/* Navigate to the main app */}} />
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OnboardingScreens;
