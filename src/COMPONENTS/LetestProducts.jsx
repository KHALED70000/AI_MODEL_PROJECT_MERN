import React from 'react';
import Card from './Card';
// import Card from './Card';
// import Card from "../../COMPONENTS/Card";

const LetestProducts = ({latestModels}) => {
    const AiModels = latestModels;
    return (
        <div>
            {
                AiModels.map(Aimodel => <Card key={Aimodel._id} Aimodel={Aimodel}/>)
            }
        </div>
    );
};

export default LetestProducts;