import React from 'react'

const Paginations = (props) => {

    return (
        <>
            <div className="main-bar-div">
                <div className={`bar${props.page.isPageOne ? ' toggled' : ''}`}> </div>
                <div className={`bar${props.page.isPageTwo ? ' toggled' : ''}`}> </div>
                <div className={`bar${props.page.isPageThree ? ' toggled' : ''}`}> </div>
            </div>
        </>
    )
}

export default Paginations;