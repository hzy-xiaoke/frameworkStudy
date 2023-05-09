import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import NewDetail from './NewDetail';

export default class News extends Component {

    //状态初始化
    state = {
        newsDetails: [
            {id: 'n1',title: "新闻资讯1"},
            {id: 'n2',title: "新闻资讯2"},
            {id: 'n3',title: "新闻资讯3"},
        ]
    }

    render() {
        const {newsDetails} = this.state;

        return (
            <div className="info">
                <ul>
                {
                    newsDetails.map(detail => {
                        return (
                            <li key={detail.id}>
                                {/* params方式传参 */}
                                {/* <Link to={`/home/news/detail/${detail.id}/${detail.title}`}>
                                    {detail.title}
                                </Link> */}

                                {/* search方式传参 */}
                                {/* <Link to={`/home/news/detail?id=${detail.id}&title=${detail.title}`}>
                                    {detail.title}
                                </Link> */}

                                {/* state方法传参 */}
                                <Link to={{pathname: "/home/news/detail", state: {id: detail.id,title: detail.title}}}>
                                    {detail.title}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
                <hr />
                {/* 注册路由,对于params方法 */}
                {/* <Route path="/home/news/detail/:id/:title" component={NewDetail} /> */}
                
                {/* 注册路由,对于search和state方式 */}
                <Route path="/home/news/detail" component={NewDetail}  />
            </div>
        )
    }

}
