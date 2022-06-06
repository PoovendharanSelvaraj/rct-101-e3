import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import styles from "./Navbar.module.css"
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {add}=useContext(CartContext)
  const {isAuth,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate("/login")
    logout();
  }
  
  return (
    <div data-cy="navbar" className={styles.container}>
      <Link to={isAuth?"/":"/login"} data-cy="navbar-home-link">Logo</Link>
      <div className={styles.box}>
      <span data-cy="navbar-cart-items-count">cart:{add} </span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
