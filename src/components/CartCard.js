import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
export const CartCard = ({item}) => {
  const dispatch = useDispatch();

  const { name,images,price}= item;
  return (
    <section>
        <div className="border border-black rounded-sm m-20 ">
    <div className="flex justify-between flex-wrap">
      <img className="h-28 rounded-xl p-5" src={images} alt={name}/>
      <p className="font-bold text-2xl py-9">{name}</p>
      <p  className="font-bold text-2xl py-9">$ {price}</p>
      <button className="bg-red-700 my-9 px-10 rounded-xl mr-5"  onClick={()=>dispatch(remove(item))}>remove</button>
    </div>

    </div>
    </section>
    );

};
