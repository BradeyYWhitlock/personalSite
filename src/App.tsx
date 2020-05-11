import React, { Fragment } from 'react';
import { Component, ReactNode } from 'react';
import { RouteComponentProps, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Routes, { AppRoute } from './routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';

import './common/styles/main.scss'


class App extends Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
        AOS.init();
    }

    public render(): ReactNode {
        return (
            <Fragment>
                    <Switch>
                        {Routes.map(
                            (routeObj: AppRoute): ReactNode => {
                                return (
                                    <Route
                                        component={routeObj.component}
                                        {...routeObj}
                                        key={routeObj.path}
                                    />
                                );
                            }
                        )}
                        <Redirect from={'*'} to={'/home'} />
                    </Switch>
            </Fragment>
        );
    }
}

export default withRouter(App)