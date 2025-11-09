
import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import MainSection from "./components/main/MainSection"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
     <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <MainSection></MainSection>
     </div>
     <Footer></Footer>
     </>
  )
}

export default App
