import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Home from './components/Home'
import Shop from './components/Shop'
import Tour from './components/Tour'

const App = () => {

  const renderRouteComponent = (component: React.ReactNode) => {
    return <Body page={component} />
  }

  return (
    <>
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
          <Route path="/" element={renderRouteComponent(<Home />)} />
          <Route path="/tour" element={renderRouteComponent(<Tour />)} />
          <Route path="/shop" element={renderRouteComponent(<Shop />)} />
          <Route path="/contact" element={renderRouteComponent(<Contact />)} />
          <Route path="/newsletter" element={renderRouteComponent(<Newsletter />)} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
