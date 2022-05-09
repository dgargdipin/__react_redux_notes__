import { createStore } from "redux";
const add=({a,b},c)=>a+b+c;
console.log(add({a:10,b:22},20))
const countReducer = (state = { count: 0 }, action) => {

    console.log("callback called")
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count }
        default:
            return state;
    }
}
const store=createStore(countReducer)
const incrementCount=({incrementBy=1}={})=>(
    {
        type:'INCREMENT',
        incrementBy
    }
)
const decrementCount=({decrementBy=1}={})=>(
    {
        type:'DECREMENT',
        decrementBy
    }
)
const resetCount=()=>({
    type:'RESET'
})
const setCount=({count})=>(
    {
        type:"SET",
        count
    }
)
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementCount({incrementBy:10}))
store.dispatch(incrementCount())
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(resetCount())
store.dispatch(decrementCount())

store.dispatch(setCount({count:100}))
unsubscribe();