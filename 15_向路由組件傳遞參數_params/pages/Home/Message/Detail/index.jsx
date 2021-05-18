import React, { Component } from 'react'

const DetailData=[
    {id:'01',content:'您好，台灣'},
    {id:'02',content:'您好，上矽谷'},
    {id:'03',content:'您好，未來的自己'},
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        //接收params參數
        const {id,title} = this.props.match.params
        const findResult = DetailData.find( (detailObj)=>{
            return detailObj.id === id
        })
        return (
            
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>COTENT:{findResult.content}</li>
            </ul>
        )
    }
}
