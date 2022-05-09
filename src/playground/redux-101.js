import { createStore } from "redux";
const add=({a,b},c)=>a+b+c;
console.log(add({a:10,b:22},20))

const store=createStore((state={count:0},action)=>{

    console.log("callback called")
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+action.incrementBy};
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count:state.count-decrementBy};
        case 'RESET':
            return {count:0};
        case 'SET':
            return {count:action.count}
        default:
            return state;
    }
})
const incrementCount=(payload={})=>(
    {
        type:'INCREMENT',
        incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1
    }
)

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementCount({incrementBy:10}))
store.dispatch({
    type: 'DECREMENT',
    decrementBy:7
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'SET',
    count:50
})
unsubscribe();