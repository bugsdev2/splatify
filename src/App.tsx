import { useState } from 'react'


import SplashScreen from './components/SplashScreen/SplashScreen.tsx'
import Player from './components/Player/Player.tsx'
import SearchPage from './components/SearchPage/SearchPage.tsx'
export default function App() {



  return (
    <>
      <SplashScreen />
      <SearchPage />
      {/* <Player/> */}
    </>
  )
}

