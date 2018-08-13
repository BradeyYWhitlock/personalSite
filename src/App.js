import React from 'react';
import ReactDOM from "react-dom";
import style from './styles/main.css';
import Button from 'antd/lib/button';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import iphoneX from './assets/images/iphoneX.png'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div className='header'>
                    <img style={{ maxWidth: '500px' }} alt="iphoneX" src={iphoneX} />
                    <div className='nameTitle'>
                        <span style={{ fontSize: '40px' }}>Bradey Whitlock</span>
                        <span className='twitterHandle'>Software Developer</span>
                        <span className='twitterHandle'>@Bradeyyw</span>
                    </div>
                </div>

                <div style={{ fontSize: '40px', fontFamily: 'monospace', textAlign: 'center', width: '100%', marginBottom: '50px' }}>Projects</div>
                <div className='projects'>
                    <div>
                        <div></div>
                        <div>he</div>
                        <div>he</div>
                        <div>he</div>
                    </div>
                    <Carousel width={400} showStatus={false} swipeable={true} showArrows={false} showThumbs={false}>
                        <div style={{ maxHeight: '50px' }}>
                            <img src={iphoneX} />
                        </div>
                        <div>
                            <img src={iphoneX} />
                        </div>
                        <div>
                            <img src={iphoneX} />
                        </div>
                    </Carousel>
                </div >
            </div >
        )
    }
}