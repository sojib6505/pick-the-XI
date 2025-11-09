
import { useState } from "react"
import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import MainSection from "./components/main/MainSection"
import Navbar from "./components/navbar/Navbar"

function App() {
  const [clamCoins,setClamCoins] = useState(0)
  const clamCoin = () => {
    const newCoin = clamCoins + 800000;
    setClamCoins(newCoin)
  }
  console.log(clamCoins)
  return (
     <>
      <div className="container mx-auto">
        <Navbar clamCoins={clamCoins}></Navbar>
        <Banner clamCoin={clamCoin}></Banner>
        <MainSection></MainSection>
     </div>
     <Footer></Footer>
     </>
  )
}

export default App
