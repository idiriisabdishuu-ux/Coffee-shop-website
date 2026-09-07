import "./App.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Router, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart";
import Menu from "./Pages/Menu";
import Checkout from "./Pages/Checkout";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Profile from "./Pages/Profile.jsx";
import ProtectedRouter from "./Components/ProtectedRouter.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import NotFound from "./Pages/NotFound.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function App(){
  return(
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/menu" element={<Menu />} /> 
      <Route path="/checkout" element={
          <ProtectedRouter>
             <Checkout />
          </ProtectedRouter>
       } />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/profile" element={
        <ProtectedRouter>
        <Profile />
          </ProtectedRouter>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
     <Footer />
     
    
    </div>
  )
}
export default App;