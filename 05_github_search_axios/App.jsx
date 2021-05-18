import React, { Component } from 'react'
import Search from './conponents/Search'
import List from './conponents/List'

export default class App extends Component {    

    state = {//初始化狀態 
        users:[],//users 初始化為數組
        isFirst:true,//是否為第一次打開頁面
        isLoading:false,//標示是否處於加載狀態
        err:'',//儲存相關錯誤訊息
    } ; 
    //更新APP的state
    updateAppState =(stateObj) =>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List  {...this.state}/>
            </div>
        )
    }
}
