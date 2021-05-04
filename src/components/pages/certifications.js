import React from 'react';
import Certification1 from '../../../static/assets/images/certifications/htmlcss.png';
import Certification2 from '../../../static/assets/images/certifications/html5.png';
import Certification3 from '../../../static/assets/images/certifications/sdf.png';
import Certification4 from '../../../static/assets/images/certifications/javascript.png';
import Certification5 from '../../../static/assets/images/certifications/java.png';
import Certification6 from '../../../static/assets/images/certifications/python.png';
import Certification7 from '../../../static/assets/images/certifications/ps.png';
import Certification8 from '../../../static/assets/images/certifications/illustrator.png';
import Certification9 from '../../../static/assets/images/certifications/premeire.png';

export default function Certifications() {
  return (
    <div>
      <h1>Certifications</h1>
      <div className='certification-grid'>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification1 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification2 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification3 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification4 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification5 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification6 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification7 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification8 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className='certification-card'
          style={{
            background: 'url(' + Certification9 + ') no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
}
