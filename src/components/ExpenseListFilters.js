import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/filters";

const ExpenseListFilters=(props)=>(
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=>{
            props.dispatch(setFilter(e.target.value))
        }}/>
    </div>
)
const mapStateToProps = ({ filters }) => ({ filters });
const ConnectedExpenseListFilters=connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;