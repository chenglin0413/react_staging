import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state ={mouse:false} // 標示鼠標移入移出
    //鼠標移入移出的遞迴函數
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
       
    }
    //勾選、取消勾選某一個todo的回調
    handleCheck=(id)=>{
        return(event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    //刪除一個todo的回調
    handleDelete=(id)=>{
      if(window.confirm('確定刪除嗎?')){
        return this.props.deleteTodo(id)
      }
       
    }
    render() {
        const {id,name,done} =this.props
        const {mouse} = this.state
        return (
          <div>
            <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
              </label>
              <button onClick={()=> this.handleDelete(id) } className="btn btn-danger" style={{ display: mouse?'block':'none'}}>
                刪除
              </button>
            </li>
          </div>
        );
    }
}