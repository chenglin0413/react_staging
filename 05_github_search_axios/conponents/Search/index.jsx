import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search=()=>{
        //取得用戶輸入(連續解構賦值+重命名)
        const {keyWordElement:{value:keyWord}} =this
        //發送請求前通知App更新狀態
        this.props.updateAppState({isFirst:false,isLoading:true})
        console.log(keyWord)
        //發送網路請求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{ 
                //請求成功後通知App更新狀態
                this.props.updateAppState({isLoading:false,users:response.data.items})
                
            },
            error =>{
                //請求失敗後通知App更新狀態
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜尋github使用者</h3>
                    <div>
                        <input ref={c=>this.keyWordElement=c} type="text" placeholder="輸入關鍵詞搜索"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
