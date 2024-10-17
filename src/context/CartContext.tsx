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

//remove product from cart
const removeFromCart=(id:number)=>{
    setProduct(previousProduct=>previousProduct.filter(product=>product.id!==id));
};

//check item is in the cart or not
const isItemInCart=(id:number)=>{
    return products.some(product=>product.id===id);
};

//resetin the cart
const resetcart=()=>{
    setProduct([]);
};