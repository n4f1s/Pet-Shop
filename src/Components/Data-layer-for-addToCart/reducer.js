export const initailState = {
    cart: [],
};

// Selector
export function getTotalPrice(cart){
    const total = cart?.reduce((previousValue, item) => ((item.price * item.quantity) + previousValue), 0);
    return total;
}


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }


            
        case "UPDATE_QUANTITY":
            // Find the product in the cart
            const productToUpdate = state.cart.find(item => item.id === action.id);
    
            if (!productToUpdate) {
            return state;
            }
            // Update the quantity
             productToUpdate.quantity = action.quantity;
            // Create a new copy of the cart array with the updated product
            const updatedCart = state.cart.map(item =>
            item.id === action.id ? productToUpdate : item
            );
    
            return { ...state, cart: updatedCart };


        default :  
            return state;
    }
};

export default reducer;