import UserDetails from './components/UserDetails';
import React, { useEffect } from 'react';

const DonorSubmission = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#E7E3BE';
      }, []);
    const user = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'johndoe@example.com',
    contactNumber: '123-456-7890',
    address: '1234 Elm St',
    area: 'Springfield',
    governorate: 'IL',

  };

  return (
    <div>
      <UserDetails user={user} />
    </div>
  );
};

export default DonorSubmission;
