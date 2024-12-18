import { useState } from 'react'
import Collection from './collections/Marketplace'
import Wallet from './wallet/WalletView'
// import HomeMarket from './components/marketplace/MarketplaceLayout'
import LayoutMarket from './marketplace/MarketplaceLayout'
// import './App.css'

function App() {

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      
       {/* <Market/> */}
       {/* <HomeMarket/> */}
       <LayoutMarket/>
       {/* <Collection /> */}
       <Wallet />
      
    </>
  )
}

export default App
