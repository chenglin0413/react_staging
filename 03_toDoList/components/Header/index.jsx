import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Header extends Component {
    //對接收的props進行:類型、必要性的限制
    static propTypes ={
        addTodos:PropTypes.func.isRequired
    }
    //鍵盤事件的回調
    handleKeyUp =(event) =>{
        //解構賦值取keyCode,target
        const {keyCode,target}=event
        //判斷是否按下enter
        if(keyCode!==13)return
        //輸入的字串不能為空
        if(target.value.trim()===''){
            alert('輸入不能為空')
            return
        }
        //準備好一個todoObj
        const todoObj ={id:uuidv4(),name:target.value,done:false}
        //將todoObj傳遞給 App
        this.props.addTodos(todoObj)
        //清空輸入
        target.value=''
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                   <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入您的任務名稱，按下enter鍵確認"/>
                </div>
            </div>
        )
    }
}

