import React, { ReactElement, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { setIsMobile } from '../../actions/app'
import { HomeProps } from '../../types/app'
import MyPicture from '../../assets/images/home/myPicture.png'
import Twitter from '../../assets/images/socialMediaIcons/twitterIcon.png'
import Instagram from '../../assets/images/socialMediaIcons/instagramIcon.png'
import LinkedIn from '../../assets/images/socialMediaIcons/linkedInIcon.png'

import './styles/home.scss'

function mapDispatchToProps(dispatch: Function) {
    return {
        setIsMobile: (isMobile: boolean) => dispatch(setIsMobile(isMobile))
    };
}

function mapStateToProps({ app }) {
    return {
        isMobile: app.isMobile
    };
}


const Home: React.FC<HomeProps> = (props): ReactElement => {
    useEffect(() => {
        var isMobile = window.innerWidth <= 500;
        props.setIsMobile(isMobile)
    })

    return (
        <Fragment>
            <div className='home'>
                <div className='myInfoSection'>
                    <div className='aboutMeSection'>
                        <img src={MyPicture} className='homePicture'/>
                        <div className='socials'>
                            <a target='_blank' href='https://twitter.com/Bradeyyw'><img src={Twitter} className='socialIcon'/></a>
                            <a target='_blank' href='https://www.instagram.com/bradeyyw/'><img src={Instagram} className='socialIconInsta'/></a>
                            <a target='_blank' href='https://www.linkedin.com/in/bradey-whitlock-8319358a/'><img src={LinkedIn} className='socialIconlinkedIn'/></a>
                        </div>
                    </div>
                    <div className='aboutMe'>Hi, I'm Brady Yarbrough Whitlock. This is an example of what I would put here if I were done with this section. Thanks for reading!</div>
                </div>
                <div className='projectsSection'>
                    <div className='projectsHeader'>Projects</div>
                    <div className='tcl hvr-bob'>
                        <div className='test'>The Checkpoint League</div>
                        <div>React</div>
                    </div>
                    <div className='malf hvr-bob'>
                        <div>Malf Site</div>
                        <div>React</div>
                    </div>
                    <div className='hT hvr-bob'>
                        <div>HIIT Tracker</div>
                        <div>React Native</div>
                    </div>
                </div>
            </div>
            <div className='home2'>
                <div className='myInfoSection'>
                    <div className='aboutMeSection'>
                        <img src={MyPicture} className='homePicture'/>
                        <div className='socials'>
                            <a target='_blank' href='https://twitter.com/Bradeyyw'><img src={Twitter} className='socialIcon'/></a>
                            <a target='_blank' href='https://www.instagram.com/bradeyyw/'><img src={Instagram} className='socialIconInsta'/></a>
                            <a target='_blank' href='https://www.linkedin.com/in/bradey-whitlock-8319358a/'><img src={LinkedIn} className='socialIconlinkedIn'/></a>
                        </div>
                    </div>
                    <div className='aboutMe'>Hi, I'm Brady Yarbrough Whitlock. This is an example of what I would put here if I were done with this section. Thanks for reading!</div>
                </div>
                <div className='projectsSection'>
                    <div className='projectsHeader'>Projects</div>
                    <div className='tcl hvr-bob'>
                        <div className='test'>The Checkpoint League</div>
                        <div>React</div>
                    </div>
                    <div className='malf hvr-bob'>
                        <div>Malf Site</div>
                        <div>React</div>
                    </div>
                    <div className='hT hvr-bob'>
                        <div>HIIT Tracker</div>
                        <div>React Native</div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)