import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Profile = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button onPress={() => setCount(count + 1)} title="Jeremy wuz heer"/> 
      <Text> count:{count}</Text>
    </View>
  )
}

export default Profile
