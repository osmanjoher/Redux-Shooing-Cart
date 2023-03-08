const { createSlice } = require("@reduxjs/toolkit")

const cartSlice = createSlice({
    name: "Cart",
    initialState :{
        cartList :[],
        total :0
    },
    reducers :{
        add(state,action){
            const upadatedCartList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return{...state,total:total,cartList:upadatedCartList}

        },
        remove (state , action){
            const upadatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return{...state,total:total,cartList:upadatedCartList}

        }
    }
})

export const {add,remove} = cartSlice.actions;
export const cartReducher = cartSlice.reducer;