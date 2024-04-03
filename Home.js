import * as React from 'react';
import { Button, View, Text } from 'react-native';

export function Home({ navigation }) {
  const goDetails = () => navigation.navigate('Details', { id: 12345, name: 'Morticia Addams' });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Home View</Text>
      <Button title={'Go Details'} onPress={goDetails} />
    </View>
  );
}
