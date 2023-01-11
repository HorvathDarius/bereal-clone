import React from 'react';
import '../styles/posts.scss';
import OwnPost from './OwnPost';

const Posts = () => {
  return (
    <div className='posts'>
      <OwnPost />
      <div className="allPosts">Other Posts</div>
    </div>
  )
}

export default Posts;