import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    marginBottom: 40,
  }
})

const Profile = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text h1>Welcome!</Text>
      <View style={styles.contentContainer}>
        <Text h4 style={styles.buttonLabel}>Count: {count}</Text>
        <Button title="Add" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  )
}

export default Profile
