import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./Product.module.css"
const Product = () => {
  // Note: this id should come from api
  const {adding,remove}=useContext(CartContext)
  const [count, setCount] = useState(1)
 const [show,setShow]=useState(false);
  const [data,setData]=useState([])
  const handleIncrement=(id)=>{
    setCount(count+1)
  }
  const handleAddCart=(id)=>{
    setShow(!show);
    adding();
  }
  useEffect(()=>{
     fetch("http://localhost:8080/products").then(r=>r.json()).then((d)=>{setData(d);  console.log(d)})
  },[])

  return (
    <>
 { data.map((d)=>{ return  <div className={styles.box} key={d.id} data-cy={`product-${d.id}`}>
      <h3 data-cy="product-name">{d.name}</h3>
      <h6 data-cy="product-description">{d.description}</h6>
      {!show?<button data-cy="product-add-item-to-cart-button" onClick={()=>handleAddCart(d.id)}>AddToCart</button>:
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>handleIncrement(d.id)} >+</button>
        <span data-cy="product-count">
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{setCount(count-1);if(count===0){setShow(!show)}}}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>{remove()}}>removeItem</button>
      </div>}
    </div>
    })
  }
  </>
  );
};

export default Product;
