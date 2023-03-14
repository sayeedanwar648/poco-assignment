import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const token=localStorage.getItem("token")
const HandleLogout=()=>{
  localStorage.clear();
    
      window.location("/")
}
const Signupfn=()=>{
  return(
<>

<Link to="/signup">  <Button colorScheme='crimson'>Sign Up</Button></Link>
  <Link to="/login"> <Button colorScheme='crimson'>Sign in</Button></Link>
</>
  )

}
const Logoutfn=()=>{
  return(
<Link to="/login"> <Button onClick={HandleLogout} colorScheme='crimson'>Logout</Button></Link>
  )
}

  
  
  return (

    <>
<Flex minWidth='max-content' alignItems='center' gap='2' p="10px 40px" backgroundColor="crimson">
<ButtonGroup gap='2'>
<Link to ="/dashboard">  <Button colorScheme='crimson'>Dashboard</Button></Link>
  </ButtonGroup>
  <Spacer />
  <ButtonGroup gap='2'>
    {!token?<Signupfn/>:<Logoutfn/>}
  
  

  </ButtonGroup>
</Flex>
    </>
  )
}

export default NavBar