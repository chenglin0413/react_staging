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
    replaceShow =(id,title) => {
        //replace跳轉 + 攜帶params參數 
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        //replace跳轉 + 攜帶search參數
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        //replace跳轉 + 攜帶state參數
        this.props.history.replace(`/home/message/detail`,{id,title})
    }
    pushShow = (id,title) => {
        //push跳轉 + 攜帶params參數 
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        //push跳轉 + 攜帶search參數
        this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        //push跳轉 + 攜帶state參數
        this.props.history.replace(`/home/message/detail`,{id,title})
    }

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
                                <Link  to={{pathname:"/home/message/detail",state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>

                                &nbsp;<button onClick={()=>{this.pushShow(messageObj.id,messageObj.title)}}>push查看</button>
                                &nbsp;<button onClick={()=>{this.replaceShow(messageObj.id,messageObj.title)}}>replace查看</button>
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
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forword}>前進</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
