import React, { use, useEffect, useState } from 'react';
import axiosInstance from '../../AXIOS_api/Axio';
import { AuthContext } from '../../CONTEXT/AuthContext';

const Mymodels = () => {

    const {user} = use(AuthContext);
    ;

    const [mymodels, setMymodels] = useState([]);
    useEffect(() => {
        if (!user?.email) return
        axiosInstance.get(`/Mymodels?email=${user?.email}`)
            // .then((res) => res.json())
            .then((res) => setMymodels(res.data))
            .catch((err) => console.error("Error fetching models:", err));
    }, [user]);

    console.log(mymodels)
    return (
        <div className='mt-20'>
            My model
        </div>
    );
};

export default Mymodels;