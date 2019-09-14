import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Profile from "./components/Profile"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const App = () => {
  return (
    <Profile/>
  )
}

export default App
