import React from 'react';
import '../styles/header.scss';
import PeopleIcon from '@mui/icons-material/People';

const Header = () => {
  return (
      <div className="header">
          <PeopleIcon className='friendsImg' />
          <span className='logo'>BeReal.</span>
          <div className="accImg"></div>
      </div>
  )
}

export default Header