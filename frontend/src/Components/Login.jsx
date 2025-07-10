import React, { useState } from 'react'
import {Box, Button, Container, TextField, Typography} from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Login = () => {
  var[user,setuser] =useState({})
   const inputHandler = (e)=>{

        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)

    }
    const adduser = ()=>{
      axios
      .post("http://localhost:3000/api/login",user)
    .then((res)=>{console.log(res)
      alert(res.data.message)
    })    
      .catch((err)=>{console.log(err)})  
}

  return (
    <div>
     <Container maxWidth='sm'>
         <Box
         sx={{
                Padding:4,
                backgroundColor:'wheat',
                borderRadius:2,
                marginTop:14,
                boxShadow:3,
                textAlign:'center'
          
                     }} 
      >
        <Typography variant='h4' 
        color='purple' align='centre' gutterBottom>
            Welcome to Product App
        </Typography>
        <TextField
        variant='outlined'
        label='username'
        margine='normal'
        fullWidth
 
        name='username'
        onChange={inputHandler}
        /> 
        <TextField
        variant='outlined'
        label='password'
        margine='normal'
        fullWidth
        type='password'
        name='password'
        onChange={inputHandler}
        />
        <Button
        variant='contained'
        color='secondary'
        fullWidth
        sx={{mt:2}}
        onClick={adduser}


        >
          login

        </Button>
        <br /><br />
        <Button>
          <Link to={'/s'}>Create a new account</Link>
        </Button>
      </Box>
     </Container>
    </div>
  )
}

export default Login


