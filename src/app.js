import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers/AppRouter'
import configureStore from './store/createStore'
import { addExpense} from './actions/expenses'
import {setFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import { Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const store=configureStore()
store.subscribe(()=>{
    const state=store.getState();
    // console.log(state)
    console.log(getVisibleExpenses(state.expenses,state.filters))
})
store.dispatch(addExpense({amount:4500,description:'water bill'}));
store.dispatch(addExpense({description:'gas bill',createdAt:1000}));
store.dispatch(addExpense({amount:109500,description:'Rent'}));
// store.dispatch(setFilter('water'))
// setTimeout(()=>{
//     store.dispatch(setFilter('bill'))
// },3000);


const root = ReactDOM.createRoot(
    document.getElementById("app")
);
const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
root.render(
    jsx
);
