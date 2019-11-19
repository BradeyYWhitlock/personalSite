import React, { ReactElement, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectsProps } from '../../types/app'
import './styles/projects.scss'

const Skills: React.FC<ProjectsProps> = (props): ReactElement => {
    return (
        <Fragment>
            <div className='projectsPage'>
                Projects (WIP)
            </div>
            <NavLink to='/home' className='topPanel'>
                Home
            </NavLink>
        </Fragment>
    )
}

export default Skills