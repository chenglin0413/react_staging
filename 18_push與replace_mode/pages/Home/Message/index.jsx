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
                                {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp; */}


                                {/* 向路由組件傳遞search參數 */}
                                {/* <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}

                                {/* 向路由組件傳遞state參數 */}
                                <Link replace to={{pathname:"/home/message/detail",state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
                                </li>
                           )
                        })
                    }
                </ul>
                <hr/>
                {/* 註冊路由 */}
                {/* 聲明接收paramas參數 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

                {/* search參數無需生明接收，正常註冊路由即可*/}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state參數無需生明接收，正常註冊路由即可*/}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
