import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class Header extends Component {
    back =()=>{
        this.props.history.goBack()
    }
    forword=()=>{
        this.props.history.goForward()
    }
    go =()=>{
        this.props.history.go(2)
    }
    render() {
        console.log('Header組件的props是:',this.props)
        return (
            <div className="page-header"><h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forword}>前進</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
export default withRouter(Header)

// withRouter 可以加工一般組件，讓一般組件具備路由組件所持有的API
//withRouter的返回值是一個新組件