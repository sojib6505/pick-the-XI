import Banner from "./components/banner/Banner"
import MainSection from "./components/main/MainSection"
import TopSection from "./components/main/TopSection"
import Navbar from "./components/navbar/Navbar"

function App() {
  


  return (
     <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <TopSection></TopSection>
        <MainSection></MainSection>
     </div>
  )
}

export default App
