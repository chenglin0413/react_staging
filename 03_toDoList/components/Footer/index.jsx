import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  //全選checkbox的回調
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
    render() {
        const {todos} = this.props
        //已完成的個數
        const doneCount = todos.reduce((pre,todo)=>  pre + (todo.done?1:0) ,0)
        console.log('%%',doneCount)
        //總數
        const total=todos.length
        
        return (
          <div>
            <div className="todo-footer">
              <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total&&total!==0} />
              </label>
              <span>
                <span>已完成{doneCount}</span> / 全部{total}
              </span>
              <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任務</button>
            </div>
          </div>
        );
    }
}