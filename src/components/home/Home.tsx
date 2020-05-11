import React, { ReactElement, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { setIsMobile } from '../../actions/app'
import { HomeProps } from '../../types/app'
import ContactMe from '../contactMe/ContactMe';

import MyPicture from '../../assets/images/home/myPicture.png'
import Twitter from '../../assets/images/socialMediaIcons/twitterIcon.png'
import Instagram from '../../assets/images/socialMediaIcons/instagramIcon.png'
import LinkedIn from '../../assets/images/socialMediaIcons/linkedInIcon.png'

import './styles/home.scss'
import './styles/skills.scss'

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

    const wholeStar = (<i className="fas fa-star"></i>)
    const halfStar = (<i className="fas fa-star-half-alt"></i>)
    const noStar = (<i className="far fa-star"></i>)

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
                    <div className='aboutMe'>Hi, I'm Brady Yarbrough Whitlock, a full stack developer with extra interest in front end development.</div>
                    <div>
                        <ContactMe />
                    </div>
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
            <div className='skillsHeader' data-aos='fade-in'>Skills</div>
            <div className='skills'>
                <div className='skillsSection'>
                    <div className='skillsItem' data-aos='flip-up'>
                        <div className='specificSkillsHeader'>Front End</div>
                        <div className='specificSkills'>
                            <div className='mobileSkills'>
                                <div className='skillColumn'>
                                    <div className='individualSkillStarLabel'>React</div>
                                    <div className='individualSkillStarLabel'>Redux</div>
                                    <div className='individualSkillStarLabel'>Mobx</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {wholeStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {halfStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                </div>
                            </div>
                            <div className='mobileSkills'>
                                <div className='skillColumn leftMargin'>
                                    <div className='individualSkillStarLabel'>Javascript</div>
                                    <div className='individualSkillStarLabel'>Typescript</div>
                                    <div className='individualSkillStarLabel'>Webpack</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {wholeStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {halfStar} {noStar}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='skillsItem' data-aos='flip-up'>
                        <div className='specificSkillsHeader'>Back End</div>
                        <div className='specificSkills'>
                            <div className='mobileSkills'>
                                <div className='skillColumn'>
                                    <div className='individualSkillStarLabel'>Node.js</div>
                                    <div className='individualSkillStarLabel'>Kotlin</div>
                                    <div className='individualSkillStarLabel'>Java</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {halfStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {halfStar} {noStar}</div>
                                </div>
                            </div>
                            <div className='mobileSkills'>
                                <div className='skillColumn leftMargin'>
                                    <div className='individualSkillStarLabel'>Jenkins</div>
                                    <div className='individualSkillStarLabel'>Serverless</div>
                                    <div className='individualSkillStarLabel'>Firebase</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {halfStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skillsSection'>
                <div className='skillsItem' data-aos='flip-up'>
                        <div className='specificSkillsHeader'>AWS Cloud</div>
                        <div className='specificSkills'>
                            <div className='mobileSkills'>
                                <div className='skillColumn'>
                                    <div className='individualSkillStarLabel'>CloudFront</div>
                                    <div className='individualSkillStarLabel'>Lambda</div>
                                    <div className='individualSkillStarLabel'>Step Func</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {halfStar} {noStar}</div>
                                </div>
                            </div>
                            <div className='mobileSkills'>
                                <div className='skillColumn leftMargin'>
                                    <div className='individualSkillStarLabel'>SQS</div>
                                    <div className='individualSkillStarLabel'>S3</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {noStar}</div>
                                    <div className='skillStars'>{wholeStar} {wholeStar} {wholeStar} {wholeStar} {wholeStar}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='skillsItem' data-aos='flip-up' style={{height: '180px'}}>
                        <div className='specificSkillsHeader' style={{width: '180px'}}>Mobile</div>
                        <div className='specificSkills'>
                            <div className='mobileSkills'>
                                <div className='skillColumn'>
                                    <div className='individualSkillStarLabel'>React Nat</div>
                                    <div className='individualSkillStarLabel'>Swift</div>
                                    <div className='individualSkillStarLabel'>Android</div>
                                </div>
                                <div className='skillColumn'>
                                    <div className='skillStars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                    <div className='skillStars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                                    <div className='skillStars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)