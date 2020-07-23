import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axiosInstance';
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
// import asyncComponent from '../../containers/hoc/asyncComponent'
import Posts from './Posts/Posts'
import './Blog.css';
// using lazy loading as provided by react
const AsyncNewPosts = React.lazy(() => import('./NewPost/NewPost'))
// const asyncNewPosts=asyncComponent(()=>{
//     return import('./NewPost/NewPost');
// })
class Blog extends Component {

    state = {
        auth: true
    }
    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><Link to="/">Home1</Link></li>
                            <li>
                                <Link to={{
                                    pathname: "/newPost",
                                    hash: '#myOwnHash',
                                    search: '?what-to-search'
                                }}
                                >NewPost</Link>
                            </li> */}
                            {/* we couldnt add styling here, the active class wasnt known so we use NavLink */}
                            <li>
                                <NavLink to="/posts/"
                                    // exact
                                    activeClassName="active"
                                    activeStyle={{
                                        color: '#d2691e',
                                        textDecoration: 'underline'
                                    }}
                                >Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: "/newPost",
                                    hash: '#myOwnHash',
                                    search: '?what-to-search'
                                }}
                                >NewPost</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                <Switch>
                    {/* {this.state.auth ? <Route path="/newPost" component={asyncNewPosts} /> : null} */}
                    {
                        this.state.auth ? (
                            <Route path="/newPost" render={() => (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <AsyncNewPosts />
                                </Suspense>
                            )} />
                        ) : null
                    }
                    <Route path="/posts/" component={Posts} />
                    <Redirect from='/' to="/posts" />
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>

            </div>
        );
    }
}

export default Blog;