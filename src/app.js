import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage=()=>(
    <div>
        This is from my dashboard component
    </div>
)
const AddExpensePage=()=>(
    <div>
        This is from my add expense component
    </div>
)
const EditExpensePage=()=>(
    <div>
        This is from my edit expense component
    </div>
)
const HelpExpensePage=()=>(
    <div>
        This is from my help expense component
    </div>
)
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
)
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName='is-active'>Go Home</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Add expense</NavLink>
        <NavLink to="/edit" activeClassName='is-active'>Edit expense</NavLink>
        <NavLink to="/help" activeClassName='is-active'>Help page</NavLink>
    </header>
)
const routes=(
    <BrowserRouter>
    <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit" component={EditExpensePage}></Route>
                <Route path="/help" component={HelpExpensePage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
    </div>
    </BrowserRouter>
)


const root = ReactDOM.createRoot(
    document.getElementById("app")
);

root.render(
    routes
);
