import React from 'react';
import '../styles/addFriend.scss';
import CloseIcon from '@mui/icons-material/Close';

const AddFriend = ({typeOfFriend}) => {
  switch(typeOfFriend){
    case "fromContacts":
        return(
            <div className="friend">
                <div className="friendProfilePic"></div>
                <div className="friendsDetails">
                    <span className='berealDisplayName'>Darius</span>
                    <span className='berealUsername'>darkoh</span>
                    <span className='contactsName'>Darius Horvath</span>
                </div>
                <button className='addFriendButton'>ADD</button>
                <CloseIcon className='dismissIcon'/>
            </div>
        );
    case "suggested":
        return (
            <div className="friend">
                <div className="friendProfilePic"></div>
                <div className="friendsDetails">
                    <span className='berealDisplayName'>Darius</span>
                    <span className='berealUsername'>darkoh</span>
                    <span className='mutualFriends'>35 mutual friends</span>
                </div>
                <button className='addFriendButton'>ADD</button>
                <CloseIcon className='dismissIcon' />
            </div>
        );
  }
}

export default AddFriend