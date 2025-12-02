import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome to {place}</Text>
      <Text style={{ fontSize: 16, marginVertical: 10 }}>Rating: {rating} stars</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}