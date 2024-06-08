import { configureStore, applyMiddleWare, combineReducers } from  'redux';
import thunk from 'redux-thunk';
import productsReducers from '../reducers/productsReducers.js'
import categoriesReducers from '../reducers/categoriesReducers.js'



const rootReducer = combineReducers({
    categories: categoriesReducers,
    products: productsReducers
});


const store = configureStore(rootReducer, applyMiddleWare(thunk));

export default store;