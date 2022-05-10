import React from "react";
import { connect } from "react-redux";
import { setFilter, sortByAmount, sortByDate } from "../actions/filters";
//controlled input
const ExpenseListFilters=(props)=>(
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=>{
            props.dispatch(setFilter(e.target.value))
        }}/>
        <select value={props.filters.sortBy} onChange={(e) => {
            if(e.target.value==="date"){
                props.dispatch(sortByDate())
            }
            else if(e.target.value==="amount"){
                props.dispatch(sortByAmount())
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)
const mapStateToProps = ({ filters }) => ({ filters });
const ConnectedExpenseListFilters=connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;