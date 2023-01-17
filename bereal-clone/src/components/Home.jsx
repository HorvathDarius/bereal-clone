import React from 'react';
import '../styles/home.scss';
import Header from './Header';
import Posts from './Posts';
import ViewPosts from './ViewPosts';

const Home = () => {
  return (
    <div className='container'>
        <div className="userInfo">
            <Header />
            <ViewPosts />
        </div>
        <div className="scrollable">
          <Posts />
        </div>
    </div>
  )
}

export default Home;