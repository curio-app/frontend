import React from 'react';
import {
    Route, Switch, Link
} from 'react-router-dom';
import UploadPage1 from './UploadPage1';
import UploadPage2 from './UploadPage2';
import UploadPage3 from './UploadPage3';

const UploadPage = ({ match }) => {
    console.log(match)
    return (
        <div>
            <Route path={`${match.path}/1`} component={UploadPage1} />
            <Route path={`${match.path}/2`} component={UploadPage2} />
            <Route path={`${match.path}/3`} component={UploadPage3} />
        </div>
    )
}

export default UploadPage;