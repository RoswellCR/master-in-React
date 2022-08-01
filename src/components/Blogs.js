import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../redux/actions/posts.Action'
import {SyncLoader} from 'react-spinners';

const Blogs = (props)=>{
    const handlerClickLoad=()=>props.dispatch(fetchPosts())
   //console.log(props); 
    //props.fetchPosts
    
    return (
        <div>
            <h1>Nuevas entredas de blogs</h1>
            <button onClick={handlerClickLoad}>Cargar Posts</button>
            {props.blogs.isFetching && <SyncLoader/>}
            <ul>
                {props.blogs.posts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

//mapStateToProps se define directamente en connect en forma de ()=>

export default connect((state)=>state)(Blogs);