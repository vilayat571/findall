import React from 'react';
import Loglink from './Loglink';
import Logout from "./Logout";

function Adduser() {

    const data = localStorage.getItem('userDetails');
    const userDetails = JSON.parse(data);

    const token = userDetails !== null && userDetails !== undefined && userDetails.token;

    return (
        <div className="w-auto px-2 flex text-light items-center h-12">
            <div className="w-auto px-2 flex text-light items-center h-12">
                {
                    token ? <Logout /> : <Loglink />
                }
            </div>
        </div>
    )
}

export default React.memo(Adduser);
