//創建外殼組件
import React,{Component} from 'react';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
// create and expose App component
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/> 
                <Welcome/>
            </div>
        )
    }
}

