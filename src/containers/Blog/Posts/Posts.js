import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from '../../../axiosInstance'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

export default class Posts extends Component {
    state = {
        posts: [],
        // selectedPostId: null,
        // error: false
    }

    componentDidMount() {
        axios.get("/array")
            .then(res => {
                // const posts = res.data.slice(0, 4)
                const posts = res.data
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "raghav"
                    }
                })
                this.setState({ posts: updatedPosts })

                // console.log(this.state.posts)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
                // this.setState({ error: true })
            })
    }

    postsSelectedHandler = (id) => {
        // this.setState({ selectedPostId: id })
        // if we dont want to use link we can also use this->
        // this.props.history.push({pathname:'/'+id})
        // this.props.history.push('/posts/'+id)
    }
    render() {
        //we can use 
        // {console.log(this.props.match.url,this.props.match.path)}
        // for relative path , make sure to use it in omponent called after Route , cause this props is sent by Route
        let post = <p style={{ textAlign: "center" }}>Something went wrong!!</p>
        if (!this.state.error) {
            post = this.state.posts.map(posts => {
                return (
                    <Link to={'/posts/' + posts.id} key={posts.id}>
                        <Post
                            title={posts.title}
                            author={posts.author}
                            clicked={() => { this.postsSelectedHandler(posts.id) }} />
                     </Link>
                )
            })
        }
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
            </div>
        )
    }
}