import React, { Component } from 'react'
import {Redirect, Route,Switch} from 'react-router-dom';
import News from './News'
import Message from './Message';
import MyNavLink from '../../components/MyNavLink';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的內容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                           <MyNavLink  to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink  to="/home/message">Message</MyNavLink> 
                        </li>
                    </ul>
                    {/* 註冊路由 */}
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to="/home/news"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
