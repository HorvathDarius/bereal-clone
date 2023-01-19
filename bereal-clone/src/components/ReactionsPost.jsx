import React from 'react';
import '../styles/reactionsPost.scss';
import ReactionPost from './ReactionPost'; 

const ReactionsPost = ({ reactionNumber }) => {
    switch (reactionNumber) {
        case 1:
            return (
                <div className='reactionContainerPost'>
                    <ReactionPost />
                </div>
            )
        case 2:
            return (
                <div className='reactionContainerPost2'>
                    <ReactionPost />
                    <ReactionPost />
                </div>
            )
        case 3:
            return (
                <div className='reactionContainerPost3'>
                    <ReactionPost />
                    <ReactionPost />
                    <ReactionPost />
                </div>
            )
        case 4:
            return (
                <div className='reactionContainerPost4'>
                    <ReactionPost />
                    <ReactionPost />
                    <ReactionPost />
                    <div className='seeMore'>3+</div>
                </div>
            )
        default:
            return;
    }
}

export default ReactionsPost