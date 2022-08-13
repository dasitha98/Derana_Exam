import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './component/common/footer'
import Head from './component/common/head'
import Header from './component/common/header'
import Loop from './component/common/loop'
import HomePage from './component/home/home.js'

import Sport from './component/sport/sport'
import Gallery from './component/gallery/gallery'
import Tech from './component/tech/tech'

const App = () => {
  return (
    <>
      <Router>
        <Head />
        <Header />
        <Loop />
        
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/sport' element={<Sport/>} />
          <Route exact path='/tech' element={<Tech/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App