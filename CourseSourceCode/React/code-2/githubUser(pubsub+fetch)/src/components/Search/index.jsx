import React,{ Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class Search extends Component{

    //状态信息
    state = {
        totalNum: 0   //相关用户数
    }

    //点击搜索按钮执行的函数
    search = async () => {
        //获取搜索框的内容,连续解构赋值
        const {keyword: {value}} = this;
        //如果搜索框的内容为空
        if(value.trim() === ''){
            alert('请输入内容');
            return;
        }
        //发布resultInfo消息
        PubSub.publish('resultInfo',{isFirst: false,isLoading: true});
        //发送请求
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${value}`);
            const data = await response.json();
            //发布resultInfo消息
            PubSub.publish('resultInfo',{
                isLoading: false,
                userList: data.items,
            });
            //更新相关用户数状态
            this.setState({totalNum: data.total_count});
        }catch(error){
            //发布resultInfo消息
            PubSub.publish('resultInfo',{
                isLoading: false,
                error: error.message
            });
        }
    }

    //按键抬起事件
    handleKeyUp = (event) => {
        //如果按回车键
        if(event.keyCode === 13){
            this.search();
        }
    }

    render(){
        return (
            <div>
                <div className="search-area">
                    <h3>GitHub用户查询</h3>
                    <input ref={c => this.keyword = c} type="search" className="search-input" 
                    placeholder="请输入用户名(英文)" onKeyUp={this.handleKeyUp}/>
                    <button onClick={this.search}>搜索</button><br /><br />
                    <p>相关用户数：{this.state.totalNum}</p>
                </div>
            </div>
        )
    }

}