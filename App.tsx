import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { WebViewWrapper } from './WebViewWrapper';

export default function App() {
  return (
    <View style={styles.container}>
      <WebViewWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
