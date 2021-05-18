import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    getStudentData=()=>{
        //發送網路請求
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('success',response.data);},
            error => {console.log('failed',error);}
        )
    }
    getCarData=()=>{
        //發送網路請求
        axios.get('http://localhost:3000/api2/cars').then(
            response =>{console.log('success',response.data);},
            error => {console.log('failed',error);}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>點我獲取學生數據</button>
                <button onClick={this.getCarData}>點我獲取汽車數據</button>
            </div>
        )
    }
}
