import React, { Component } from 'react'
import  { Route,Link } from 'react-router-dom'
import Detail from './Detail';
export default class Message extends Component {
    state={
        messageArr : [
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                           return  (
                               <li key={messageObj.id} >
                                {/* 向路由組件傳遞params參數 */}
                                    <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                                </li>
                           )
                        })
                    }
                </ul>
                <hr/>
                {/* 註冊路由 */}
                {/* 聲明接收paramas參數 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
            </div>
        )
    }
}
