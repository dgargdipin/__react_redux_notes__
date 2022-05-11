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
        calendarFocused:false,
        error:''
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
        const regex =/^\d+(\.\d{0,2})?$/
        if(!amount||amount.match(regex)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange = (date) => {
        if(date){
            this.setState({ createdAt: date })
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount){
            // Set error state 
            this.setState(()=>({error:'Please provide description and amount'}))
            
        }
        else{
            this.setState(() => ({ error: '' }))
            console.log('Submit')
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }

    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
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