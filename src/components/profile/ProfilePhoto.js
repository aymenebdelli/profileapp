import React from 'react';
import { Image } from 'react-bootstrap';

const ProfilePhoto = () => {
  return (
    <div>
      <Image
        src='https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        roundedCircle
        width='20%'
      />
    </div>
  );
};
export default ProfilePhoto;
