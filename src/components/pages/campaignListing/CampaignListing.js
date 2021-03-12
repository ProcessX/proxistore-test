import React from 'react';
import MainPageLayout from '../mainPageLayout/MainPageLayout';
import BtnRectangle from '../../btn/btnRectangle';
import Searchbar from './Searchbar';
import SortingParamSelector from './SortingParamSelector';
import PageNav from './PageNav';
import CampaignList from './CampaignList';

const CampaignListing = () => {
    return (
        <MainPageLayout>
            <div className={'campaignListing'}>
                <div className={'campaignListing__head'}>
                    <h1 className={'title title--page'}>Campaign Listing</h1>
                    <BtnRectangle text={'Add campaign'} />
                    <div className={'campaignListing__tools'}>
                        <Searchbar />
                        <SortingParamSelector />
                        <PageNav />
                    </div>
                </div>
                <CampaignList />
            </div>
        </MainPageLayout>
    )
}

export default CampaignListing
