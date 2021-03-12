import React from 'react'
import BtnBack from '../../btn/BtnBack'
import CampaignInfoSection from '../../campaignInfoSection/CampaignInfoSection'
import IdentifiersBlock from '../../campaignInfoSection/IdentifiersBlock'
import SingleBlock from '../../campaignInfoSection/SingleBlock'
import TargetsBlock from '../../campaignInfoSection/TargetsBlock'
import MainPageLayout from '../mainPageLayout/MainPageLayout'

const CampaignDetails = () => {
    return (
        <MainPageLayout>
            <div className={'campaignDetails'}>
                <BtnBack />

                <CampaignInfoSection title={'Identifiers'}>
                    <IdentifiersBlock>
                        <h4 className={'campaign__name'}>Campaign name</h4>
                        <p className={'campaign__id'}>ID</p>
                        <div className={'info'}>
                            <SingleBlock title={'Status'} value={'value'} />
                            <SingleBlock title={'Source'} value={'value'} />
                            <SingleBlock title={'Budget'} value={'value'} />
                        </div>
                    </IdentifiersBlock>
                    <TargetsBlock title={'Targets'}/>
                </CampaignInfoSection>

                <CampaignInfoSection title={'Stats'}></CampaignInfoSection>

                <CampaignInfoSection title={'Diffusion'}></CampaignInfoSection>
            </div>
        </MainPageLayout>
    )
}

export default CampaignDetails
