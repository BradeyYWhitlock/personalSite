import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Spin } from 'antd';
const { TextArea } = Input;
import { ContactMeProps } from '../../types/app'
import axios from 'axios'
import './styles/contactMe.scss'
import * as AppActions from '../../actions/app';

function mapDispatchToProps(dispatch: Function) {
    return {
        setEmailSender: (sender: string) => dispatch(AppActions.setEmailSender(sender)),
        setEmailMessage: (message: string) => dispatch(AppActions.setEmailMessage(message)),
        setEmailResponse: (response: Record<string, any>) => dispatch(AppActions.setEmailResponse(response)),
        setLoadingEmailSent: (loadingEmailSent: boolean) => dispatch(AppActions.setLoadingEmailSent(loadingEmailSent))
    };
}

function mapStateToProps({ app }) {
    return {
        emailSender: app.emailSender,
        emailMessage: app.emailMessage,
        emailResponse: app.emailResponse,
        loadingEmailSent: app.loadingEmailSent
    };
}

const ContactMe: React.FC<ContactMeProps> = (props): ReactElement => {

    const {emailSender, emailMessage, emailResponse, loadingEmailSent} = props;
    const {setEmailSender, setEmailMessage, setEmailResponse, setLoadingEmailSent} = props;

    var template_params = {
        'from_name': emailSender,
        'message_from_site': emailMessage
    }

    const sendEmail = () => {
        setLoadingEmailSent(true)
        axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'default_service',
            template_id: 'template_QdWhihKe',
            user_id: 'user_yZGR5TfmtBi8UhvbzYccn',
            template_params: template_params
        })
            .then(res => {
                setEmailSender('')
                setEmailMessage('')
                setEmailResponse(res)
                setLoadingEmailSent(false)
            })
            .catch(() => {
                setLoadingEmailSent(false)
            })
    }

    return (
        <div className='contactMe'>
            <div className='contactMeHeader'>Contact Me</div>
            {emailResponse === null ?
                <div className='messageSection'>
                    <div className='contactMeInputs'>
                    <Input
                        placeholder="Who Are You?"
                        className='styledInput sender'
                        value={emailSender}
                        onChange={(event) => setEmailSender(event.target.value)}
                    />
                     <TextArea
                        rows={5}
                        placeholder="Send Me A Message"
                        className='styledInput message'
                        value={emailMessage}
                        onChange={(event) => setEmailMessage(event.target.value)}
                    />
                    </div>
                    <Button className='contactMeButton' onClick={() => sendEmail()} type="primary" shape="round" size='large'>
                        Send Message {loadingEmailSent ? <div className='loadingEmailSpinner'><Spin/></div> : <i className="fas fa-paper-plane planeIcon"/>}
                    </Button>
                </div> :
                <div className='messageSection'>
                    {emailResponse.status === 200 ?
                        <div className='responseMessage'>
                            <div>I got your message!</div>
                            <div>I promise... see here's your response code</div>
                            <div className='responseData'>
                                <div>Data: {emailResponse.data}</div>
                                <div>Status: {emailResponse.status}</div>
                            </div>
                        </div> :
                        <div className='responseMessage'>
                            Uh oh... I didn't get that
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)