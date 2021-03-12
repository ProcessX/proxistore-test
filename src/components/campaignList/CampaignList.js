import React from 'react';
import CampaignThumbnail from './CampaignThumbnail';

const CampaignList = () => {
    return (
        <div className={'campaignList'}>
            CampaignList
            <ul className={'campaignThumbnail__li'}>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail/>
                </li>
            </ul>
        </div>
    )
}

export default CampaignList
