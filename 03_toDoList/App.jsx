import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component{
    //狀態在哪裡，操作方法(addTodos,updateTodos...)就在哪裡
    state = {todos:[
        {id:'001',name:'吃飯',done:true},
        {id:'002',name:'睡覺',done:true},
        {id:'003',name:'打代碼',done:false},
        {id:'004',name:'開車',done:true},
    ]}
    //addTodo用於添加一個todo，接收的參數是todoObj
    addTodos =(todoObj)=>{
        //函數體
        //獲取原todos
        const {todos} = this.state
        // 追加一個todo
        const newTodos = [todoObj,...todos]
        //更新狀態
        this.setState({todos:newTodos})
        
    }
    //用於更新一個todoObj
    updateTodo = (id,done)=>{
        //獲取狀態中的todos
        const {todos}=this.state
        //匹配獲取數據
        const newTodos = todos.map( todoObj => {
            if(todoObj.id===id) return{...todoObj,done}
            else return todoObj//若沒有匹配則直接回傳
        })
        //更新狀態
        this.setState({todos:newTodos})
    }
    deleteTodo =(id)=>{
        //獲取原來的todos
        const {todos} = this.state
        //刪除指定id元素
        const newTodos = todos.filter( (todoObj)  => {
            return todoObj.id!==id
        })
        //更新狀態
        this.setState({todos:newTodos})
    }
    checkAllTodo =(done)=>{
        //獲取原來的todos
        const{todos} = this.state
        //加工數據
        const newTodos = todos.map((todoObj) => {
            return {...todoObj,done}
        })
        //更新狀態
        this.setState({todos:newTodos})
    }
    //用於清除所有已完成
    clearAllDone=()=>{
        const {todos} = this.state
        //過濾數據
       const newTodos=  todos.filter((todoObj)=>{
           //filete 回傳一個新的數組，只留下條件符合的
            return !todoObj.done
        })
        //更新狀態
        this.setState({todos:newTodos})
    }
    render(){
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodos={this.addTodos}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}