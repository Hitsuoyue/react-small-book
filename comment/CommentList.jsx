import React, { Component } from 'react';

export default class CommentList extends Component {
    render() { 
        const list = this.props.list || [];        
        return (
            <div className='list'>
                {
                    list.map((item,index)=>
                    <div key={index} className='list-block'>
                        <span className='list-user'>{item.userName}</span>:
                        <span className='list-comment'>{item.comment}</span>
                    </div>
                    )
                }
            </div>
        );
    }
}
