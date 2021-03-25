import React from 'react';
const Top= props => {
  
    return (
        <>
            <header >
                   <div>
                   <span>
                        <h6 className='text-muted'>{props.page} </h6>
                    </span>

                    <span>
                        <h6>icons</h6>
                    </span>
                   </div>
             </header>
        </>
    )
   
}
export default Top;