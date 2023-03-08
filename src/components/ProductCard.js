import React ,{useEffect,useState}from "react";
import { useDispatch } from "react-redux";
import { add , remove} from "../store/cartSlice";
import { useSelector } from "react-redux";


export const ProductCard = ({item}) => {
  const {id,price,name,images}= item;
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList)
  const [isInCart,setCart] = useState(false)

  useEffect(() => {
    const product = cartList.find(item=>item.id === id)
    if (product) {
      setCart(true)
    } else {
      setCart(false)
    }
   
  }, [cartList,id])
  
 
  
  return (
    <section className=" m-5">
        <div className="border max-w-sm border-black rounded-sm" >
      <img className="h-60" src={images} alt={name} / >
        <p className="text-xl font-bold">{name}</p>
        <p className="text-base font-light">{price}TK</p>
        {isInCart? (<button className="bg-red-700  px-10 rounded-md "  onClick={()=>dispatch(remove(item))}>remove</button>):(<button className="bg-blue-600 px-8 rounded-lg" onClick={()=>dispatch(add(item))}> Add To Cart</button>)}
       
        
    </div>
    </section>
  
  );
};
