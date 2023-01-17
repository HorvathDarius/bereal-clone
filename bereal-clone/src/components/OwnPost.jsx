import React from 'react';
import '../styles/ownPost.scss';
import Reactions from './Reactions';

const OwnPost = () => {
  return (
    <div className='ownContainer'>
        <div className="ownPost">
            <div className="bigPhoto">
                <div className="smallPhoto">

                </div>
            </div>
            <Reactions reactionNumber={4}/>
        </div>
        <span className='description'>exam 2</span>
        <span className='time'>18:33:10</span>
    </div>
  )
}

export default OwnPost