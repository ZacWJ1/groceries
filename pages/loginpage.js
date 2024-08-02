import React from 'react'
import Video from '../assets/couplecooking.mp4'
import '../components/navbar/logo.jpg'
import './loginpage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import logoo from './logo.jpg'
import { PolygonCard } from 'react-awesome-shapes/dist/shapes/polygonCard';

const Loginpage = () => {
  return (
    <div className='login'>

       <video className='bg'
        loop autoPlay muted 
        src={Video} 
        type="video/mp4"
         />
         <PolygonCard className='cardy'
    height="400px"
    width="500px"
    zIndex={2}
    color="linear-gradient(45deg, #50C878, #FFD859)"
    
/>
       <div className='center'>
       
       <div>
       
       <Form >
        
       <img
              alt=""
              src={logoo}
              width="200"
              height="200"
              className="rounded logo"
      />
       
        
        <InputGroup className='mt-2 input'>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className='mt-2 input'>
          <Form.Control
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
       
          <Col xs="auto" className=' mt-3'>
            <Button  type="submit">Sign In</Button>
          </Col>
          <Col xs="auto" className='mt-2'>
            <Button type="submit">New to <b>Groceries?</b> <br></br><u>Sign Up</u></Button>
          </Col>
      </Form>
      
    
      </div>
      </div> 
    </div>
  )
}

export default Loginpage


