import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { Card } from 'reactstrap';
import splash from '../assets/splash.png'
const Post = props =>{
    return (
        <>
               <div className='post-part'>
                          <div className='user-post'>
                            {/* for the user info */}
                            <div className='user-details' style={{display:'flex',justifyContent:'space-between'}}>
                              <span style={{display:'inline-flex'}}>
                               <img src={splash} width='60px'/>
                               <h6>obi</h6>
                              </span>
                              <span>
                                <h4> <FiMoreVertical/></h4>
                              </span>
                              </div>
                          </div>
                          {/* for the main user post */}
                          <Card className='mt-3'>
                              <p className='text-center'>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tempore laborum in? Eius enim fugit, voluptate veritatis doloremque labore aut, officiis ex nobis alias itaque maiores non quam magni deserunt.

                              </p>
          
                          </Card>
                        </div>
        </>
    )
}
export default Post;