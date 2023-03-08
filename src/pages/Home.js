import React from "react";
import { ProductCard } from "../components/ProductCard";
import Usetitle from "../hooks/Usetitle";

export const Home = () => {

  Usetitle("Home")

  const product =[
    {"id":"1","name":"eairphone","price":1800,"images":"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"id":"2","name":"eairphone v1","price":1700,"images":"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"id":"3","name":"eairphone v2","price":1600,"images":"https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"id":"4","name":"eairphone v3","price":1500,"images":"https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"id":"5","name":"eairphone v4","price":1400,"images":"https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"id":"6","name":"eairphone v5","price":1300,"images":"https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600"},

    {"id":"7","name":"eairphone v6","price":"1200","images":"https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=600"},
  ]
  return (
    <main className="flex justify-center flex-wrap">
      {product.map((item)=>(
        <ProductCard key={item.id} item={item} />
      ))}
      
    </main>
  );
};
