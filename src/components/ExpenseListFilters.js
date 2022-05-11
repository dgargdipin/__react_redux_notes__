import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import { setEndDate, setFilter, setStartDate, sortByAmount, sortByDate } from "../actions/filters";
import 'react-dates/lib/css/_datepicker.css';

//controlled input
class ExpenseListFilters extends React.Component{
    state={
        focusedInput:null,
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setFilter(e.target.value))
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === "date") {
                        this.props.dispatch(sortByDate())
                    }
                    else if (e.target.value === "amount") {
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                    

                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        )
    }

}



const mapStateToProps = ({ filters }) => ({ filters });
const ConnectedExpenseListFilters=connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;