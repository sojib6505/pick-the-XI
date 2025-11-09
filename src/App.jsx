
import { useState } from "react"
import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import MainSection from "./components/main/MainSection"
import Navbar from "./components/navbar/Navbar"
import AddToCard from "./components/AddToCard/AddToCard"
import PlayerCard from "./components/main/PlayerCard"

function App() {
  const [clamCoins,setClamCoins] = useState(0)
  const [addCards , setAddCards] = useState([])
  const clamCoin = () => {
    const newCoin = clamCoins + 800000;
    setClamCoins(newCoin)
  }
  
  const addCard = Player =>{
    const newPlayer = [...addCards , Player]
    setAddCards(newPlayer)
  }
  
  return (
     <>
      <div className="container mx-auto">
        <Navbar clamCoins={clamCoins}></Navbar>
        <Banner clamCoin={clamCoin}></Banner>
        <MainSection addCard={addCard}></MainSection>
        <AddToCard addCardPlayer={addCards}></AddToCard>
     </div>
     <Footer></Footer>
     </>
  )
}

export default App
