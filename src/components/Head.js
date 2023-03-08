import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Head = () => {

  const cartList = useSelector(state=> state.cartState.cartList)

  return (
    <header className="border-gray-700 rod py-7 bg-cyan-200 ">
      <nav className="flex  flex-wrap justify-around">
        <div className="text-3xl font-bold">
          <Link to="/">
            <p>Sub Brand</p>
          </Link>
        </div>
        <div className="flex flex-row text-xl">
          <NavLink to="/">
            <p className=" hover:bg-stone-200 rounded-xl p-2  mr-5">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <p className=" hover:bg-stone-200 rounded-xl p-2">Cart</p>
          </NavLink>
        </div>
        <div><p className="text-xl p-2">Cart <span className=" text-blue-600">{cartList.length}</span> </p></div>
      </nav>
    </header>
  );
};
