import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPagePicture from '../../../static/assets/images/auth/login.jpg';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          background: 'url(' + contactPagePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className='right-column'>
        <h1>Contact Me!</h1>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='envelope' />
            </div>
            <div className='text'>tinh62603@gmail.com</div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon='map-marked-alt' />
            </div>
            <div className='text'>South Jordan, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
