import React from 'react';
import '../styles/reactions.scss';
import Reaction from './Reaction';

const Reactions = () => {
    const numberOfReactions = 4;

    switch(numberOfReactions){
        case 1:
            return (
                <div className='reactionContainer'>
                    <Reaction />
                </div>
            )
        case 2:
            return (
                <div className='reactionContainer2'>
                    <Reaction />
                    <Reaction />
                </div>
            )
        case 3:
            return (
                <div className='reactionContainer3'>
                    <Reaction />
                    <Reaction />
                    <Reaction />
                </div>
            )
        case 4:
            return (
                <div className='reactionContainer4'>
                    <Reaction />
                    <Reaction />
                    <Reaction />
                    <div className='seeMore'>.. 3+</div>
                </div>
            )
        default:
            return;
    }
}

export default Reactions;