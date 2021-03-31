import React from 'react';
import {BiMenu} from 'react-icons/bi'
import Side from './sidebar'
const Top= props => {
  
    return (
        <>
            <header >
                   <div>
                   <span>
                        <h6 className='text-muted'>{props.page} </h6>
                    </span>

                    <span>
                        <h6><BiMenu/></h6>
                    </span>
                   </div>
             </header>
             {/* <Side first='home' second='more'/> */}
        </>
    )
   
}
export default Top;