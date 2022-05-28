export const initialState = {
    basket : [],
    favs : []
    
};

export const getBasketTotal = (basket) => 
 basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case 'ADD_TO_FAV':
        return {
            ...state,
            favs : [...state.favs, action.item],
        };

        
    }
};


export default reducer