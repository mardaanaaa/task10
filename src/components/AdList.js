import React from 'react';
import { useSelector } from 'react-redux';
import Ad from './Ad.js';

const AdList = () => {
    const ads = useSelector(state => state.ads);

    return (
        <div>
            <h2>Список объявлений</h2>
            {ads.map(ad => (
                <Ad key={ad.id} {...ad} />
            ))}
        </div>
    );
};

export default AdList;
