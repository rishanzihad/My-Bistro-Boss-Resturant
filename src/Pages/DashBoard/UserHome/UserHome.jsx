import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h2><span>hi welcome</span>{
                user.displayName ? user.displayName : 'Back'
            }</h2>
            
        </div>
    );
};

export default UserHome;