import 'react-dates/initialize';

import React from "react";
import moment from 'moment'
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css'
import { v4 } from "uuid";
moment().format(); 

// console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component{
    state={
        description:'',
        note:'',
        amount:'',
        createdAt:moment(),
        calendarFocused:false
    }
    onDescriptionChange=(e)=>{
        const description=e.target.value
        this.setState(()=>({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }));
    }
    onAmountChange=(e)=>{
        const amount=e.target.value
        const regex =/^\d*(\.\d{0,2})?$/
        if(amount.match(regex)){
            this.setState(()=>({amount}))
        }

    }
    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ createdAt:date })} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ calendarFocused:focused })} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        // id={v4()} // PropTypes.string.isRequired,
                    />

                    <textarea 
                        placeholder="Add a note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}