import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ThumbsUp from './thumbs-up/ThumbsUp.jsx';
import UI from './ui/UI.jsx';
import Tree from './tree/Tree.jsx';
import List from './list/List.jsx';
import CommentWrap from './comment/CommentWrap.jsx';
import Ref from './ref/Ref';
import Wrapper from './container/Wrapper';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked: false
        }
    }

    onStatusChange = (isLiked) => {
        this.setState({
            isLiked: !isLiked
        })
    }

    render() {
        return (
            <Wrapper/>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'))

