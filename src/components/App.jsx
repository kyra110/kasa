import "../sass/main.scss"
import Header from "./Header"
import BannerImg from "./BannerImg"
import Gallery from "./Gallery"
import Footer from "./Footer"
function App() {


  return (
    <div className="app">
      <Header/>
      <BannerImg/> 
      <Gallery/>
      <Footer/>
    </div>
    
  )
}

export default App
