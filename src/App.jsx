import React, { Component } from 'react'
import {Button,DatePicker} from 'antd';
import './App.less';
import {WechatOutlined,SearchOutlined} from '@ant-design/icons';
const { RangePicker } = DatePicker;
export default class App extends Component {
    
    render() {
        return (
            <div>
                App....
                <button>按鈕1</button>
                <Button type="primary">按鈕2</Button>
                <Button type="link">按鈕3</Button>
                <WechatOutlined/>
                <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                <DatePicker  />
                <RangePicker/>
            </div>
        )
    }
}
