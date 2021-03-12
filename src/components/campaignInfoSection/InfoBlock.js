import React from 'react'

// eslint-disable-next-line react/prop-types
const InfoBlock = ({children, title}) => {
    return (
        <div className={'infoBlock'}>
            <h3 className={'infoBlock__title'}>{title}</h3>
            {children}
        </div>
    )
}

export default InfoBlock
