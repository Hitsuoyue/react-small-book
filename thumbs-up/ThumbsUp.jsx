import React, { Component } from 'react';

const HelloWorld = () => {
    return(
        <button>点击点击</button>
    )
}

class ThumbsUp extends Component{    

        static defaultProps = {
            color: {liked: 'red', unLiked: 'green'},
            text: {liked: '取消', unLiked: '点赞'}
        }

        constructor(props){
            super(props);
            this.state = {
                isLiked: false
            }
        }    
        
        /**
         * 点击按钮，改变状态函数
         */
        isLikedChange = () => {
            this.setState({
                isLiked: !this.state.isLiked
            })
            if(this.props.onStatusChange){
                this.props.onStatusChange(this.state.isLiked)
            }
        }
        
        render(){
            const { isLiked } = this.state;
            let text = isLiked ? this.props.text && this.props.text.liked || '取消' : this.props.text && this.props.text.unLiked || '点赞';
            let color = isLiked ? this.props.color && this.props.color.liked || 'red' : this.props.color && this.props.color.unLiked || 'green';
            return(
                <div>
                    <button className='like-btn' onClick={this.isLikedChange} style={{background: color}}>
                    <span>{text}</span>
                </button>
                    <HelloWorld/>  
                
                </div>
                
            )
        }
}

export default ThumbsUp;