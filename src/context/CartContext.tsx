import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { ProductItem } from "../Types/Types";

interface CartProviderProps{
    children:ReactNode,
}
const CartContext=createContext<CartProviderProps|undefined>(undefined);
const [products,setProduct]=useLocalStorage<ProductItem[]>("dessert-product",[]);

const addToCart=()=>{};
const reduceCartQuantity=()=>{};
const removeFromCart=()=>{};
const isItemInCart=()=>{}
const resetcart=()=>{};