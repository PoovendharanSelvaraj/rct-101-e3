import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css"


const Login = () => {
  // const [email,setEmail]=useState("");
  // const [password,setPassword]=useState("");
  const {isAuth,login,logout}=useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin=(e)=>{
    e.prevantDefault();
    if(isAuth){
      logout();
    }
    else{
      login();
    }
    navigate("/")
    
    
  }

  
  return (
    <div className={styles.loginBox}>
      <h2>Login!!!</h2>
     <form action="" >
     <input data-cy="login-email" placeholder="Enter your Email" />
      <input data-cy="login-password"   placeholder="Enter your password" />
      <button  data-cy="login-submit" onClick={handleLogin}>Login</button>
     </form>
    </div>
  );
};

export default Login;
