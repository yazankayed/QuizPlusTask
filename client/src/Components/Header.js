import React from 'react';
import defaultimage from '../Images/defaultimage.png';
import avatar from '../Images/avatar.png';
import '../Header.css'; // Import your external CSS file

const Header = (props) => {
  return (
    <div className="header-container">
      <img className="header-image" src={defaultimage} alt="Default Image" />
      <img className="header-image" src={avatar} alt="Avatar" />
    </div>
  );
};

export default Header;
