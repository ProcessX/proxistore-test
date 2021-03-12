import React from 'react'

// eslint-disable-next-line react/prop-types
const CampaignInfoSection = ({ children, title }) => {
    return (
        <section className={'campaignInfoBlock'}>
            <h2 className={'campaignInfoBlock__title'}>{title}</h2>
            <div className={'campaign__info'}>{children}</div>
        </section>
    )
}

export default CampaignInfoSection
