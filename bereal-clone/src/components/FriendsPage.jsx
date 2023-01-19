import React from 'react';
import '../styles/friendsPage.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import AddFriend from './AddFriend';

const FriendsPage = () => {
  return (
    <div className="container">
      <div className="headerFriendsPage">
        <span className='logo'>BeReal.</span>
        <ArrowForwardIcon className='backIcon'/>
      </div>
      <div className="scrollableFriends">
        <div className="searchFriends">
          <SearchIcon className='searchIcon'/>
          <input type="text" placeholder='Add or search friends'/>
        </div>
        <div className="shareAccount">
          <div className="shareProfilePic"></div>
          <div className="shareWrittings">
            <span className='shareTitle'>Invite friends on BeReal</span>
            <span className='shareLink'>bere.al/darkoh</span>
          </div>
          <ShareIcon className='shareIcon'/>
        </div>
        <div className="friendsSuggestions">
          <span className='friendsDivider'>CONTACTS USING BEREAL</span>
          <AddFriend typeOfFriend={"fromContacts"}/>
          <AddFriend typeOfFriend={"fromContacts"}/>
          <AddFriend typeOfFriend={"fromContacts"}/>
          <span className='friendsDivider'>PEOPLE YOU MAY KNOW</span>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
          <AddFriend typeOfFriend={"suggested"}/>
        </div>
      </div>
    </div>
  )
}

export default FriendsPage;