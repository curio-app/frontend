import React, {useState} from 'react';
import "./../App.css"
import {
    Route, Switch, Link
} from 'react-router-dom';
import UploadPage1 from './UploadPage1';
import UploadPage2 from './UploadPage2';
import UploadPage3 from './UploadPage3';
import Paginations from './Paginations';

const UploadPage = ({ match }) => {

    const [pageBars, setPageBars] = useState({
        isPageOne: false,
        isPageTwo: false,
        isPageThree: false
    })

    console.log(match)
    return (
        <div>

                <Route path={`${match.path}/1`} render={props => <UploadPage1 {...props} pageBars={pageBars} setPageBars={setPageBars} /> } />
                <Route path={`${match.path}/2`} render={props => <UploadPage2 {...props} pageBars={pageBars} setPageBars={setPageBars} /> } />
                <Route path={`${match.path}/3`} render={props => <UploadPage3 {...props} pageBars={pageBars} setPageBars={setPageBars} /> } />

                <Paginations page={pageBars}/>

        </div>
    )
}

export default UploadPage;