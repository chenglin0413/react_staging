import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home' // Home路由組件
import About from './pages/About' // About路由組件
import Header from './components/Header' //header 是一般組件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {    

   
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item"></a> */}
                            {/* 在react 中靠路由鏈接切換組件 */}
                            <MyNavLink to="/home" a='b' b='1' c='2'>Home</MyNavLink>
                            <MyNavLink to="/about" >About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 註冊路由 */}
                            <Route path="/about" component={About}/>
                            <Route path="/home" component={Home}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
