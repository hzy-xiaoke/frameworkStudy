import React,{ Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MyNavLink from './components/MyNavLink';
import './App.css'

export default class App extends Component{

    render(){
        return (
            <div className="container">
                <header className="header">顶部栏</header>
                <div className="content">
                    <nav className="nav">
                        <ul>
                            <li><MyNavLink to="/home">主页</MyNavLink></li>
                            <li><MyNavLink to="/about">关于我们</MyNavLink></li>
                        </ul>
                    </nav>
                    <section className="section">
                        {/* 注册路由 */}
                        <Switch>
                            <Route path="/home" component={ Home }/>
                            <Route path="/about" component={ About }/>
                            {/* 重定向 */}
                            <Redirect to="/home"/>
                        </Switch>
                    </section>
                </div>
            </div>
        )
    }

}