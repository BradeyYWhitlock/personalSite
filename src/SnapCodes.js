import React from 'react';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import alwaysSunny from './assets/images/snapcodes/alwaysSunnySnapCode.png';
import america from './assets/images/snapcodes/americaSnapCode.png';
import imFine from './assets/images/snapcodes/imFineSnapCode.png';
import wildWest from './assets/images/snapcodes/wildWestSnapCode.png';
import patriots from './assets/images/snapcodes/patriotsSnapCode.png';

export default class SnapCodes extends React.Component {

    render() {
        var SnapCodesList = [
            alwaysSunny, imFine, america, wildWest, patriots
        ]
        return (
            <div className='projects' style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '20px', fontFamily: 'monospace', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <div style={{ fontSize: '30px', marginTop: '5px', marginRight: '10px' }}>Snap Codes</div>
                    </div>
                    <div>Created with LensStudio</div>
                    <div>Download via snapchat</div>
                    <div>Experiment with LensStudio to crate basic lenses for friends</div>
                </div>
                <Carousel width={'500px'} showStatus={false} swipeable={true} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    {SnapCodesList.map(it => (
                        <div>
                            <img src={it} />
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }

}