import React from 'react';
import '../styles/posts.scss';
import OwnPost from './OwnPost';
import Post from './Post';

const Posts = () => {
  return (
    <div className='posts'>
      <OwnPost />
      <div className="allPosts">
        <Post reactionNumber={4}/>
        <Post reactionNumber={2}/>
      </div>
    </div>
  )
}

export default Posts;