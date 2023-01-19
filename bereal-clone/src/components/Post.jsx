import React from 'react';
import '../styles/post.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import ReactionsPost from './ReactionsPost';

const Post = ({reactionNumber}) => {
  return (
    <div className='postContainer'>
      <div className="accountInfoContainer">
        <div className="profilePicture"></div>
        <div className="accountTypings">
          <span className='accountName'>darkoh</span>
          <span className="postingTime">40m late</span>
        </div>
        <MoreVertIcon className='moreIcon'/>
      </div>
      <div className="postItselfContainer">
        <div className="bigPhoto">
          <div className="smallPhoto">
          </div>
            <div className="postInteractions">
              <ChatBubbleIcon className='messageIcon'/>
              <EmojiEmotionsRoundedIcon className='reactIcon'/>
            </div>
          <ReactionsPost reactionNumber={reactionNumber}/>
        </div>
        <div className="writings">
          <span className="description">random description man</span>
          <span className='comments'>Add a comment...</span>
        </div>
      </div>
    </div>
  )
}

export default Post