import React,{ Component } from 'react';
import './index.css';

export default class List extends Component{

    render(){
        //接收父组件传递的属性
        const {userList,isFirst,isLoading,error} = this.props;

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