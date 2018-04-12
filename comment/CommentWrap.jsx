import React, { Component } from 'react';
import CommentList from './CommentList.jsx';
import CommentInput from './CommentInput.jsx';
import {connect} from "react-redux";
require('./index.css');

class CommentWrap extends Component {

    constructor(props){
        super(props);
        this.state={
            list: []
        }
    }


    /**
     * 输入区域提交触发
     */
    onSubmitComment = (obj) => {
        let { list } = this.state;
        list.push(obj);
        this.setState({
            list: list
        })
    }

    render() {
        console.log('store', this.props);

        return (
            <div className='wrap'>
                <CommentInput onSubmitComment={this.onSubmitComment}/>
                <CommentList list={this.state.list}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(CommentWrap);
