import { createStore ,combineReducers } from 'redux'
import ShoppingReducer from './reduces/shoping/shoping'
import MoneyReducer from './reduces/money/money'
// import {persistReducer,persistStore} from 'redux-persist'
// import storage from '@/../redux-persist/lib/storage'
// import {PersistGate} from '@/redux-persist/integration/react';

const rootReducer = combineReducers({
    shop : ShoppingReducer,
    money : MoneyReducer
})
// const myReducer = persistReducer({
//     key: 'root',
//     storage
// }, rootReducer);
// export const store = createStore(myReducer)
// export const persistor = persistStore(store);
const store = createStore(rootReducer)
export default store