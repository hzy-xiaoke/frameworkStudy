import React,{ Component } from 'react';
import axios from 'axios';
import './index.css';

export default class Search extends Component{

    //点击搜索按钮执行的函数
    search = () => {
        //获取搜索框的内容,连续解构赋值
        const {keyword: {value}} = this;
        //如果搜索框的内容为空
        if(value.trim() === ''){
            alert('请输入内容');
            return;
        }
        //请求前显示为加载中(查找中)
        this.props.updateAppState({isFirst: false,isLoading: true});
        //发送请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //请求成功后关闭正在加载,并将用户数据更新到状态中
                this.props.updateAppState({
                    isLoading: false,
                    userList: response.data.items,
                    totalNum: response.data.total_count
                });
            },
            error => {
                //请求失败后关闭正在加载,并设置错误信息
                this.props.updateAppState({
                    isLoading: false,
                    error: error.message
                });
            }
        )
    }

    //按键抬起事件
    handleKeyUp = (event) => {
        //如果按回车键
        if(event.keyCode === 13){
            this.search();
        }
    }

    render(){
        //接收父组件传递的参数
        const {totalNum} = this.props;

        return (
            <div>
                <div className="search-area">
                    <h3>GitHub用户查询</h3>
                    <input ref={c => this.keyword = c} type="search" className="search-input" 
                    placeholder="请输入用户名(英文)" onKeyUp={this.handleKeyUp}/>
                    <button onClick={this.search}>搜索</button><br /><br />
                    <p className="relateNum">相关用户数：{totalNum}</p>
                </div>
            </div>
        )
    }

}