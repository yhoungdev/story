import React, {useState , useEffect} from 'react';
import { Container , Row , Col , Badge, Input, InputGroup, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import splash from '../assets/splash.png';
import Setting from './settings';

 
const Main= props => {
 
    const [name, setName]=useState('John Doe ')
    return (
        <>
          {/* split the screen into three */}
          <Container>
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
                               
                               <h5 className='menu'>ICON</h5>
                          </span>

                          <div className='user-datail '>
                             <span>
                              <img src={splash} width='70'/>
                              <h6>{name}</h6>
                             </span>
                            
                             <span>
                                 <h6>serch</h6>
                                 <h6 className='icon'>menu icon</h6>
                             </span>
                          </div>
                      </div>
                        <br></br>
                        {/* this is the other part */}
                      <div className='middle-main mt-5'>
                        {/* the post aspect */}
                        <div className='post'>
                            <form onSubmit={ e => e.preventDefault()} className='top-form'>
                               <Input type="text" id="" name="" placeholder="ispire people with your story " />
                               <Button className='post'>POST</Button>
                            </form>
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