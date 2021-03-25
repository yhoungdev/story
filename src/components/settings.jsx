import React, { useState } from 'react';
import { Container , Button , Badge, Breadcrumb, BreadcrumbItemd, BreadcrumbItem, Card } from 'reactstrap'
import Top from './header'
const Setting=props=>{
    const [theuser, setTheuser]=useState();
    
    return (
        <>
            <Container>
                <Top page='SETTINGS'/>
            <Breadcrumb>
                <BreadcrumbItem>
                    <span>
                        <p className='text-muted'>this is the section aspect, any property you pick or click will be apply to your account   </p>
                    </span>
                </BreadcrumbItem>
            </Breadcrumb>

            {/* settings properties */}
            <h6>Change name</h6>
            <form action="">
                <input type="text" className='form-control'/>
                <label htmlFor="profile">

                </label>
                <input type="file" name="user-img" id="profile"/>
            </form>
            </Container>
        </>
    )
}
export default Setting;