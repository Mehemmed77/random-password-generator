import React from 'react';
import iconCopy from '../images/icon-copy.svg';

const PasswordComponent = ({ copied, password, setCopied }) => {

  const handleCopyClick = () => {
    setCopied("COPIED");

    navigator.clipboard.writeText(password).then(() => {
      console.log('Password copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <div className="passwordContainer">
      <p id="password" >{password}</p>
      <div className="copySvgContainer">
        <span className='copied'>{copied}</span>
        <img
          src={iconCopy}
          alt="Copy Icon"
          id='copyButton'
          onClick={handleCopyClick}
        />
      </div>
    </div>
  );

};

export default PasswordComponent;