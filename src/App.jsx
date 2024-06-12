import Banner from "./components/Banner"
import Category from "./components/Category"
import Credit from "./components/Credit"
import Karta from "./components/Karta"
import Navbar from "./components/Navbar"
import Tanks from "./components/Tanks"

const App = () => {
  return (
    <div className="bg-black/90">
      <Navbar/>
      <Banner/>
      <Tanks/>
      <Category/>
      <Credit/>
      <Karta/>
    </div>
  )
}

export default App