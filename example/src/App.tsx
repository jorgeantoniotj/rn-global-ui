import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'rn-global-ui'

export default function App() {

  return (
    <View style={styles.container}>
      <Button>BUTTON</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
