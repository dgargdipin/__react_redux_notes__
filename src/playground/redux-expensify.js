import { createStore, combineReducers } from 'redux'
import {v4 as uuid} from 'uuid'




const demoState = {
    expenses: [{
        id: 'asdasd',
        description: 'Rent',
        note: 'Final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined,
    }
}


//Expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        default:
            return state;
    }
}
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const addExpense = (
    {
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addExpense({description:'Rent',amount:100}))
store.dispatch(addExpense({description:'Coffee',amount:300}))