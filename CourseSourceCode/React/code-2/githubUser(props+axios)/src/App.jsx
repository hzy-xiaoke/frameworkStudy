import React,{ Component } from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css'

export default class App extends Component{

    //状态信息
    state = {
        userList: [],  //用户列表
        isFirst: true, //是否首次加载
        isLoading: false,  //是否正在加载
        error: '',  //请求错误信息,
        totalNum: 0  //相关用户数
    }

    //更新用户列表数据
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render(){
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} {...this.state}/>
                <List {...this.state} />
            </div>
        )
    }

}