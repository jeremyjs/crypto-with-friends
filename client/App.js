import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import RootComponent from './components/Root'

const App = () => (
  <ThemeProvider>
    <RootComponent />
  </ThemeProvider>
)

export default App
