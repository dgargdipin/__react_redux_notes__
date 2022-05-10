//A component that renders another component
import React from 'react'
import  ReactDOM  from 'react-dom'


const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>Info is:{props.info}</p>
    </div>
);
const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>This is private info</p>
            <WrappedComponent {...props}/>
        </div>
    );
}
// const AdminInfo=withAdminWarning(Info);
// ReactDOM.render(<AdminInfo info="This is details"/>,document.getElementById("app"))
const requireAuth=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>:<p>Please authenticate</p>}
        </div>
    )
}

const AuthInfo=requireAuth(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is details"/>,document.getElementById("app"))
