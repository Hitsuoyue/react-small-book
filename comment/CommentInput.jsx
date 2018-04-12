import React, { Component } from 'react';

export default class CommentInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            comment: ''
        }
    }

    /**
     * 用户名修改触发
     */
    onUserChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    /**
     * 评论内容修改触发
     */
    onCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }    

    /**
     * 点击提交触发
     */
    onSubmit = (e) => {
        this.props.onSubmitComment(this.state);
    }

    render() {
        return (
            <div className='input-wrap'>
                <div className='input-user'>
                    <span className='input-user-left'>用户名：</span>
                    <input className='input-user-right' type="text" onChange={this.onUserChange}/>
                </div>
                <div className='input-comment'>
                    <span className='input-comment-left'>内容：</span>
                    <textarea className='input-comment-right' type="text" onChange={this.onCommentChange}/>
                </div>
                <button onClick={this.onSubmit}>提交</button>
            </div>
            
        );
    }
}