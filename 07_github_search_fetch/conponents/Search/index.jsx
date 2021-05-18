import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'
export default class Search extends Component {
    
    search= async()=>{
        //取得用戶輸入(連續解構賦值+重命名)
        const {keyWordElement:{value:keyWord}} =this
        //發送請求前通知List更新狀態
        PubSub.publish('ABC',{isFirst:false,isLoading:true})
        console.log(keyWord);
        //發送網路請求----使用axios發送
        //#region 
        /*axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{ 
                //請求成功後通知List更新狀態
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('ABC',{isLoading:false,users:response.data.items})
            },
            error =>{
                //請求失敗後通知App更新狀態
                PubSub.publish('ABC',{isLoading:false,err:error.message})
            }
        )*/
        //#endregion
        //發送網絡請求----使用fetch發送(未優化)
        /*
        fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{
                console.log('success')
                return response.json()},
            error =>{
                console.log('failed',error);
                return new Promise(()=>{});
            }
        ).then(
            response=>{console.log('獲取數據成功',response)},
            error=>{console.log('獲取數據失敗',error)}
        )*/
        //發送網絡請求----使用fetch發送(已優化)
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data =  await response.json()
            PubSub.publish('ABC',{isLoading:false,users:data.items})
        } catch (error) {
            PubSub.publish('ABC',{isLoading:false,err:error.message})
        }
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
