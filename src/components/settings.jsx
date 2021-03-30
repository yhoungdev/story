import React, { useState } from 'react';
import { Container , Button , Badge, Breadcrumb, BreadcrumbItemd, BreadcrumbItem, Card } from 'reactstrap'
import Top from './header'
import {AiFillCamera} from 'react-icons/ai'
const Setting=props=>{
    const [theuser, setTheuser]=useState();

    return (
        <>
            <Container>

                <Top page='SETTINGS' style={{padding:"2em"}}/>
            <Breadcrumb>
                <Card>
                    <span className='text-muted'>
                        <p className='text-center'>this is the settings part , properties you make changes to here will affect the style of your account </p>
                    </span>
                </Card>
            </Breadcrumb>

            {/* settings properties */}
            <h6>Change name</h6>
            <form action="" onSubmit={e=>e.preventDefault()}>
                    <div style={{display:'flex'}}>
                         <input type="text" className='form-control user_name' />
                         <Button className='change'>CHANGE</Button>
                    </div>
                <small className='text-muted'>change profile image</small>
                <br/>
                <label htmlFor="profile">
                    <Card className='cam-card'>
                        <center> <h4 className='camera'><AiFillCamera/></h4></center>
                    </Card>
                </label>
                <input type="file" name="user-img" id="profile" style={{display:'none'}}/>
            </form>
            </Container>
        </>
    )
        

}
export default Setting;