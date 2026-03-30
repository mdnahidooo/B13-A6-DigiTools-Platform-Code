
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'
import SubscriptionPricing from './components/SubscriptionPricing/SubscriptionPricing'
import TransformWorkflow from './components/TransformWorkflow/TransformWorkflow'
import Cart from './components/Products/Cart/Cart'


const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}


function App() {

  const dataPromise = fetchData();
  // console.log(dataPromise);

  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
      <Navbar carts={carts}></Navbar>

      <Banner></Banner>

      <StatsSection></StatsSection>


      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Products dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Products>

      </Suspense>

      <GetStarted></GetStarted>

      <SubscriptionPricing></SubscriptionPricing>

      <TransformWorkflow></TransformWorkflow>

      <Footer></Footer>
    </>
  )
}

export default App
