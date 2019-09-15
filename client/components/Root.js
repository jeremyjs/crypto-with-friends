import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopBar from './TopBar'
import Profile from './Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Root = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <Profile />
    </View>
  )
}

export default Root
