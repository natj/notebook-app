import React from 'react';
import { Link } from 'react-router-dom';

//See https://www.techiediaries.com/react-ajax/

export default class AppWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }  

    fetchFirst(url) {
        var that = this;
        if (url) {
            fetch('http://127.0.0.1:7082/db/' + url ).then(function (response) {
            return response.json();
        }).then(function (result) {
            //console.log(result.data.children);
    
            //that.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.id });
            that.setState({posts:result});
    
            console.log(that.state.posts);
            });
        }
    }  
    componentDidMount() {
        this.fetchFirst("test-file");
    } 

    updateState(e) {
        e.preventDefault();
        console.log(e.target);
        this.fetchFirst("updated-test-file2");
    }
    render() {
    return (
      <div className='app-container' onClick={e => this.updateState(e)}>
        <h2> ------ App ------- </h2>

        <div id="boxes" className="grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(50px, auto)', backgroundColor: 'skyblue'}}>

        <Link to={'/'}>Home </Link>
        <Link to={'/about'}>About </Link>
        <Link to={'/about/subroute'}>Subcomponent </Link>



        {this.props.children}

        {this.state.posts.map(post =>
            <li key={post.id}>{post.text}</li>
        )}

        </div>

        <h3> -----end of App------</h3>
      </div>
    )
  }
}
