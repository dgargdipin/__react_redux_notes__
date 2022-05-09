import {createStore,combineReducers} from 'redux'

const demoState={
    expenses:[{
        id:'asdasd',
        description:'Rent',
        note:'Final payment',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined,
    }
}


//Expenses reducer
const expensesReducerDefaultState=[]
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

console.log(store.getState())