import React from 'react';
import '../styles/account.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import LockIcon from '@mui/icons-material/Lock';

const Account = () => {
  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  return (
    <div className='container'>
      <div className="accountHeader">
        <ArrowBackIcon className='backArrow'/>
        <span>darkoh</span>
        <MoreVertIcon className='moreIconAccount'/>
      </div>
      <div className="accountPageInfo">
        <div className="accountProfilePicture">
          <img src='../public/assets/account.png' alt="" />
          <div className="gradientDiv"></div>
        </div>
        <div className="nameContainer">
          <span className='accountName'>Darius</span>
          <div className="shareIconBackground"></div>
          <ShareIcon className='accountShareIcon'/>
        </div>
        <div className="infoContainer">
          <span className='locationInfo'>Bratislava</span>
          <span className='joiningDate'>You joined BeReal 4 months ago</span>
        </div>
      </div>
      <div className="memoriesContainer">
        <div className="titlesAndPrivacy">
          <span>Your Memories</span>
          <div className="privacyDiv">
            <LockIcon className='lockIcon'/>
            Only visible to you.
          </div>
        </div>
        <div className="calendarContainer">
          <span>Last 14 days</span>
          <div className="daysContainer">
            {days.map(day => {
              return(
                <div className='calendarDay'>{day}</div>
              )
            })}
          </div>
          <button>View all my Memories</button>
        </div>
      </div>
    </div>
  )
}

export default Account