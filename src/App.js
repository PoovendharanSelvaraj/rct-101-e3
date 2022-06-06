import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";



function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <div className="App">
     <Navbar/>
     <div>
     <Routes>
     
     {isAuth?<Route path="/" element={<Home/>}>
       <Route path="products" element={<Products/>}/>
     </Route>
     
     :
        <Route path="/login" element={<Login/>}/>
     }
      </Routes>
     </div>
    </div>
  );
}

export default App;
