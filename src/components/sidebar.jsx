import React from 'react';
import {Link} from 'react-router-dom';
import Settings from './settings'

const Sidebar = props =>{
    return (
        <>
            <div className='side'>
                <div>
                    <ul>
                        <li>{props.first}</li>
                        <Link to='/Settings'>
                          <li>{props.second}</li>
                        </Link>
                        <li>{props.third}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Sidebar;