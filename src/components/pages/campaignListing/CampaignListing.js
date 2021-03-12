import React from 'react';
import MainPageLayout from '../mainPageLayout/MainPageLayout';
import BtnRectangle from '../../btn/btnRectangle';

const CampaignListing = () => {
    return (
        <MainPageLayout>
            <h1 className={'title title--page'}>Campaign Listing</h1>
            <BtnRectangle text={'Add campaign'}/>
        </MainPageLayout>
    )
}

export default CampaignListing
