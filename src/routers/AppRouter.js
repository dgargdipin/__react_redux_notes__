import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import HelpExpensePage from '../components/HelpExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'

const AppRouter =()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route path="/help" component={HelpExpensePage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter