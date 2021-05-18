import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
    
    render() {
        console.log(this.props)
        //將to , children ...全部傳入navlink，因此可用{...this.props}來代替原寫法
        return (
            // <NavLink activeClassName="ABC" className="list-group-item" to={to} children={children}>{title}</NavLink>
            <NavLink activeClassName="ABC" className="list-group-item" {...this.props}/>
            
        )
    }
}
