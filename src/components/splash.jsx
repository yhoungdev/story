    import React from 'react'
    import splash from '../assets/splash.png';
    import '../App.css'
    import {Container,Button } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import Main from './main'
    const Splash=()=>{
        return  (
            <>
            
            <div className="splash">
                <Container>
                        <div className="text-center">
                            <div>
                            <img src={splash} alt="" className='img text-center'/>
                        </div>
                        <div className="text-part mt-5">
                            <h4>TELL MY STORY</h4>
                            <span>
                                <p>Inspire people with your story , Make them feel they can do it, by inspiring them with your  </p>
                            </span>

                            <Link to='/Main'>
                             <Button className='proceed'>PROCEED</Button>
                            </Link>
                            </div>
                        </div>
                </Container>
        
                </div>
            
            


            
            </>
        )
    }
    export default Splash;