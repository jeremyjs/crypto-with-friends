import Fortmatic from 'fortmatic'
import Web3 from 'web3'

const fm = new Fortmatic('YOUR_API_KEY')
window.web3 = new Web3(fm.getProvider())

import React, { useEffects } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const App = () => {
  useEffects(() => {
    fm.user.login().then(() => {
      web3.eth.getAccounts().then(console.log) // ['0x...']
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Jeremy wuz heer</Text>
    </View>
  )
}

export default App
