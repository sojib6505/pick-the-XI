
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
     setAddCards(prev => {
      const alreadyAdd = prev.find(p => p.playerId === Player.playerId)
      if(alreadyAdd ){
        alert('already added')
      return prev
     }
     if(prev.length >= 6){
      alert('Opps only select 6 player')
      return prev
     }
     return [...prev , Player]
     })
  }

  const deleteCard = delPlayer => {
    const remaining = addCards.filter(Player => Player.playerId !== delPlayer.playerId)
    setAddCards(remaining)
  }
  return (
     <>
      <div className="container mx-auto">
        <Navbar clamCoins={clamCoins}></Navbar>
        <Banner clamCoin={clamCoin}></Banner>
        <MainSection addCard={addCard} addCards={addCards}></MainSection>
        <AddToCard addCardPlayer={addCards} delPlayer={deleteCard}></AddToCard>
     </div>
     <Footer></Footer>
     </>
  )
}

export default App
