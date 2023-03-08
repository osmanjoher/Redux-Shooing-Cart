import React from "react";
import { useSelector } from "react-redux";
import { CartCard } from "../components/CartCard";
import Usetitle from "../hooks/Usetitle";

export const Cart = () => {

  Usetitle("Cart")

  const product = useSelector(state=> state.cartState.cartList)
  const total = useSelector(state=> state.cartState.total)

  return (
  <div>
    <h1 className="text-3xl font-extrabold"> Cart Item :{product.length} total:${total}</h1>
    {product.map((item)=>(
      <CartCard key={item.id} item={item}/>
    ))}
  </div>);
};
