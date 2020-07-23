import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Raghav',
        submitted: false
    }
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        // console.log()
        // axios.post("http://localhost:3000/array/"+JSON.stringify(data))
        axios.post("/array/", data)
            .then(res => {
                console.log(res)
                this.setState({ submitted: true })
            })
    }
    render() {
        let redirect= null
        if(this.state.submitted){
            redirect=<Redirect to="/posts" />
        }
        // {console.log(this.props.match.url,this.props.match.path)}
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Raghav">Raghav</option>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;