import { Button, Text, View } from 'react-native';

import { getAllResults } from '@/api/api';
import { defaultStyleSheet } from '@/constants/defaultStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style={defaultStyleSheet.container}>
      <Redirect href={'/(tabs)/home'} />
    </SafeAreaView>
  );
}
