import React, { Component,lazy,Suspense } from 'react';
import {NavLink,Route,Redirect} from 'react-router-dom';
import Loading from './Loading';

//懒加载Home和About组件,即真正需要时再加载
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export default class LazyLoad extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/home">主页</NavLink>&nbsp;
                    <NavLink to="/about">关于</NavLink>
                </nav>
                <hr />
                <section>
                    {/* 注册路由 */}
                    <Suspense fallback={ <Loading /> }>
                        <Route path="/home" component={ Home } />
                        <Route path="/about" component={ About } />
                        <Redirect to="/home"/>
                    </Suspense>
                </section>
            </div>
        )
    }
}
