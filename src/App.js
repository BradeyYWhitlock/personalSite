import React from 'react';
import ReactDOM from "react-dom";
import style from './styles/main.css';
import Button from 'antd/lib/button';
import HiitTrackerProject from './HiitTrackerProject';
import IAYMMRVBDCU from './IAYMMRVBDCU';
import SnapCodes from './SnapCodes';
import axios from 'axios';

import iphoneX from './assets/images/iphoneXBradey.png'
import twitterIcon from './assets/images/socialMediaIcons/twitterIcon.png'
import instagramIcon from './assets/images/socialMediaIcons/instagramIcon.png'
import linkedInIcon from './assets/images/socialMediaIcons/linkedInIcon.png'

export default class App extends React.Component {

    componentDidMount() {
        axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', { headers: { 'Authorization': 'OAuth oauth_consumer_key="CB0SKZkf67v4yEpD7RdExh0hs",oauth_token="373534602-DykV77uZ2SgoiySxcf7u5FniETM4tGGW2O6WA3Km",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1534131513",oauth_nonce="sKZPV8bzPBH",oauth_version="1.0",oauth_signature="RnGTN3TPSF4qpIfS5FhmDdAxS1s%3D"' } })
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <img style={{ maxWidth: '500px' }} alt="iphoneX" src={iphoneX} />
                    <div className='nameTitle'>
                        <span style={{ fontSize: '40px' }}>Bradey Whitlock</span>
                        <span className='softwareDeveloper'>Software Developer</span>
                        <div className='socialMedia'>
                            <div>@Bradeyyw</div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <a href='https://twitter.com/Bradeyyw'><img src={twitterIcon} height={50} width={50} /></a>
                                <a href='https://www.instagram.com/bradeyyw/'><img src={instagramIcon} height={40} width={40} /></a>
                                <a href='https://www.linkedin.com/in/bradey-whitlock-8319358a/' style={{ marginLeft: '5px' }}><img src={linkedInIcon} height={40} width={40} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sectionHeader'>Projects</div>
                <HiitTrackerProject />
                <IAYMMRVBDCU />
                <SnapCodes />
                <div className='footer'>Copyright: Bradey Whitlock</div>
            </div>
        )
    }
}