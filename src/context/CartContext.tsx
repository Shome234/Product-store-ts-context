import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { ProductItem } from "../Types/Types";

interface CartProviderProps{
    children:ReactNode,
}
const CartContext=createContext<CartProviderProps|undefined>(undefined);
const [products,setProduct]=useLocalStorage<ProductItem[]>("dessert-product",[]);

//add to cart
const addToCart=(id:number,name:string,price:number,image:string)=>{
    const existingProduct=products.find(product=>product.id===id);
    if(existingProduct){
        const updateproduct=products.map(product=>{
            if(product.id===id){
                return {...product,quantity:product.quantity!+1};
            }
            return product;
        });
        setProduct(updateproduct);
    }
    else{
        setProduct(previousProduct=>[...previousProduct,{id,name,price,image,quantity:1}]);
    }
};


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