import React from 'react'
import Navbar from '../../navbar/Navbar'

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({ children }) => {
    return (
        <div className={'mainPageLayout'}>
            <Navbar />
            
            {children}
        </div>
    )
}

export default MainPageLayout
