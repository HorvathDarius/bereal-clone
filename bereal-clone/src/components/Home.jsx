import React from 'react';
import '../styles/home.scss';
import Header from './Header';
import ViewPosts from './ViewPosts';

const Home = () => {
  return (
    <div className='container'>
        <div className="userInfo">
            <Header />
            <ViewPosts />
        </div>
        <div className="scrollable">
            <div className="ownPost">Own Post</div>
            <div className="allPosts">Other Posts</div>
        </div>
    </div>
  )
}

export default Home