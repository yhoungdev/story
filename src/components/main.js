import React, {useState , useEffect} from 'react';
import { Container , Row , Col , Badge, Input, InputGroup, Button, Breadcrumb, BreadcrumbItem, Card } from 'reactstrap'
import splash from '../assets/splash.png';
import Story from './stories';
import Setting from './settings';
import {BiMenu} from 'react-icons/bi';
import {FiMenu, FiMoreHorizontal, FiSearch} from 'react-icons/fi';
import {buger} from 'react-icons/di';
import Post from './post';
import Sidebar from './sidebar';


 
const Main= props => {
 
    const [name, setName]=useState('John Doe ')
    const [hide, setHide]=useState('none')

    //let hide the sidebar when the body is being clicked
   
    return (
        <>
          {/* split the screen into three */}
          <Container >
           <div className='theSide' style={{display:hide}}>
             <Sidebar first='HOME' second='SETTINGS' third='MORE'/>
           </div>
                <div className='contents'>
                <Row>
                  {/* left part */}
                  <Col className='col-md-3 left'>
                      lore
                  </Col>

                  <Col className='col-12 col-md-6' >
                   
                      <div className='middle-top'>
                          <span className='upper'> 
                              <h6 className='text-muted'>HOME</h6 >
                               
                               <h5 className='menu'></h5>
                          </span>

                          <div className='user-datail '>
                             <span>
                              <img src={splash} width='70'/>
                              <h6>{name}</h6>
                             </span>
                            
                             <span>
                                 <h4><FiSearch/></h4>
                                 <h4 className='icon' onClick={e=>setHide('block')}><BiMenu/></h4>
                             </span>
                          </div>
                      </div>
                        <br></br>
                        {/* this is the other part */}
                      <div className='middle-main mt-5'>
                        {/* the post aspect */}
                        <div className='post'>
                            <form onSubmit={ e => e.preventDefault()} className='top-form mt-3'>
                               <Input type="text" id="user-post" name="user_post" placeholder="inspire people with your story " />
                               <Button className='post '>POST</Button>
                            </form>
                        </div>
                        <Story/>

                        <div>
                          <Post/>
                        </div>
                     


                      </div>
                  </Col>
                        {/* settings page  */}
                  <Col className='col-md-3 right'>
                    <Setting/>
                  </Col>
              </Row>
                </div>
          </Container>
        </>
    )
}
export default Main;