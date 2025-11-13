import React from 'react';
import Card from './Card';
// import Card from './Card';
// import Card from "../../COMPONENTS/Card";

const LetestProducts = ({latestModels}) => {
    const AiModels = latestModels;
    return (
        <div className='grid grid-cols-3 gap-4 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1'>
            {
                AiModels.map(Aimodel => <Card key={Aimodel._id} Aimodel={Aimodel}/>)
            }
        </div>
    );
};

export default LetestProducts;