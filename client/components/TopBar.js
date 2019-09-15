import React from 'react'
import { Header } from 'react-native-elements'

const TopBar = () => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Coinmo', style: { color: '#fff' } }}
    />
  )
}

export default TopBar
