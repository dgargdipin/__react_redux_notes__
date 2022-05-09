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
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!=action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id!==action.id)return expense;
                return {...expense,...action.updates};
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.date
            }
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
const removeExpense=({id})=>(
    {
        type:'REMOVE_EXPENSE',
        id
    }
)
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})
store.subscribe(()=>{
    console.log(store.getState());
})



const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}))
const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:300}))
store.dispatch(editExpense(expenseTwo.expense.id,{ description: 'Coffee2', amount: 350 }))
store.dispatch(removeExpense({id:expenseOne.expense.id}))
store.dispatch(setFilter('rent'))
store.dispatch(setFilter())
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
store.dispatch(setEndDate(150))
store.dispatch(setStartDate(120))
// console.log(expenseOne)
// console.log(expenseTwo)
