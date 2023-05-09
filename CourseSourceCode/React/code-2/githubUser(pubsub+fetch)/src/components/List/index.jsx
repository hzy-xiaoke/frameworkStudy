import React,{ Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component{

    //状态信息
    state = {
        userList: [],  //用户列表
        isFirst: true, //是否首次加载
        isLoading: false,  //是否正在加载
        error: ''  //请求错误信息
    }
    
    //组件挂载完毕后
    componentDidMount(){
        //订阅resultInfo消息
        this.token = PubSub.subscribe('resultInfo',(_,data) => {
            this.setState(data);
        });
    }

    //组件将要卸载时
    componentWillUnmount(){
        //取消订阅resultInfo消息
        PubSub.unsubscribe(this.token);
    }

    render(){
        const {userList,isFirst,isLoading,error} = this.state;

        return (
            <div className="search-list">
                {
                    isFirst? <h2>欢迎使用</h2> : 
                    isLoading? <h2>正在查找中...</h2> : 
                    error !== ''? <h2>{error}</h2> :  
                    userList.map(user => {
                        return (
                            <div className="list-item" key={user.id}>
                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                    <img src={user.avatar_url} alt={user.login} />
                                </a>
                                <p>{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}