import React from 'react';
import { Link } from 'react-router-dom';

const CampaignThumbnail = () => {
    return (
        <Link className={'campaignThumbnail'}>
            <p className={'campaign__status'}>Status</p>
            <h3 className={'campaign__name'}>Campaign's name</h3>
            <p className={'campaign__id'}>Campaign's ID</p>
        </Link>
    )
}

export default CampaignThumbnail
