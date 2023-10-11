import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

interface ArticleProps {
  route: {
    params: {
      title: string;
      description: string;
    };
  };
}

const ArticleDetailScreen: React.FC<ArticleProps> = ({ route }) => {
  const { title, description } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default ArticleDetailScreen;
