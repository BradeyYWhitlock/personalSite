import React from 'react';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import sprint from './assets/images/hiitImages/HIITTrackerSprint.png'
import running from './assets/images/hiitImages/HIITTrackerSprintRunning.png'
import complete from './assets/images/hiitImages/HIITTrackerComplete.png'
import setup from './assets/images/hiitImages/HIITTrackerSetup.png'
import rest from './assets/images/hiitImages/HIITTrackerRest.png'
import warmup from './assets/images/hiitImages/HIITTrackerWarmUp.png'
import iosAppIcon from './assets/images/socialMediaIcons/appStoreIcon.png'

export default class HiitTrackerProject extends React.Component {

    render() {
        var hiitTrackerImageList = [
            setup, warmup, sprint, running, rest, complete
        ]
        return (
            <div className='projects'>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '20px', fontFamily: 'monospace', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <div style={{ fontSize: '30px', marginTop: '5px', marginRight: '10px' }}>HIIT Tracker</div>
                        <a href='https://itunes.apple.com/us/app/hiit-tracker/id1416932812?mt=8&app=itunes&ign-mpt=uo%3D4'><img src={iosAppIcon} height={50} width={50} /></a>
                    </div>
                    <div>Created in React Native</div>
                    <div>Track your HIIT cardio session</div>
                    <div>Set intervals, sprint duration, and rest duration</div>
                    <div>Recieve sound alerts when moving between sprint and rest</div>
                    <div>Currently released on iOS App Store</div>
                </div>
                <Carousel width={'400px'} showStatus={false} swipeable={true} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    {hiitTrackerImageList.map(it => (
                        <div>
                            <img src={it} />
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }

}