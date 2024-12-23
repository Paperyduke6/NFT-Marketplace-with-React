import { useState } from 'react'
import Collection from './collections/Marketplace'
import Wallet from './wallet/WalletView'
import LayoutMarket from './marketplace/MarketplaceLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./marketplace/MarketplaceLayout";
import Collections from "./collections/Marketplace";


function App() {

  return (
    <>
      {/* <h1>Vite + React</h1> */}
       {/* <LayoutMarket/> */}
       {/* <Wallet /> */}
      

      <Router>
      <Routes>
        <Route path="/" exact element={<LayoutMarket />}/>
  
          {/* <Route index element={<LayoutMarket />} />  */}
        <Route path="/page2" element={<Collections />} />
        {/* </Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
