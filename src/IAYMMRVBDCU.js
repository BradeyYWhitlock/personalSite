import React from 'react';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import home from './assets/images/IAYMMRVBDCU/IAYMMRVBDCUHome.jpeg';
import faq from './assets/images/IAYMMRVBDCU/IAYMMRVBDCUFaq.jpeg';

export default class HiitTrackerProject extends React.Component {

    render() {
        var IAYMMRVBDCUList = [
            home, faq
        ]
        return (
            <div className='projects' style={{ marginTop: '50px' }}>
                <Carousel width={'500px'} showStatus={false} swipeable={true} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    {IAYMMRVBDCUList.map(it => (
                        <div>
                            <img src={it} />
                        </div>
                    ))}
                </Carousel>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '20px', fontFamily: 'monospace', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <div style={{ fontSize: '30px', marginTop: '5px', marginRight: '10px' }}>IAYMMRVBDCU</div>
                    </div>
                    <div>Basic HTML fan site</div>
                    <div>Used to show if areyoumakingmoreredvsblue.com is updated</div>
                    <div>Created on a lunch break</div>
                    <div>Hosted in s3 bucket</div>
                    <div>Routed using AWS Route 53</div>
                </div>
            </div>
        )
    }

}